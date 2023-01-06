##############################################################################
#
# Copyright (c) 2001, 2002 Zope Foundation and Contributors.
# All Rights Reserved.
#
# This software is subject to the provisions of the Zope Public License,
# Version 2.1 (ZPL).  A copy of the ZPL should accompany this distribution.
# THIS SOFTWARE IS PROVIDED "AS IS" AND ANY AND ALL EXPRESS OR IMPLIED
# WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
# WARRANTIES OF TITLE, MERCHANTABILITY, AGAINST INFRINGEMENT, AND FITNESS
# FOR A PARTICULAR PURPOSE.
#
##############################################################################

import asyncore
import os
import os.path
import socket
import time

from waitress import trigger
from waitress.adjustments import Adjustments
from waitress.channel import HTTPChannel
from waitress.task import ThreadedTaskDispatcher
from waitress.utilities import (
    cleanup_unix_socket,
    logging_dispatcher,
)
from waitress.compat import (
    IPPROTO_IPV6,
    IPV6_V6ONLY,
)


def create_server(application,
                  map=None,
                  _start=True,  # test shim
                  _sock=None,  # test shim
                  _dispatcher=None,  # test shim
                  **kw  # adjustments
                  ):
    """
    if __name__ == '__main__':
        server = create_server(app)
        server.run()
    """
    if application is None:
        raise ValueError(
            'The "app" passed to ``create_server`` was ``None``.  You forgot '
            'to return a WSGI app within your application.'
        )
    adj = Adjustments(**kw)

    if map is None:  # pragma: nocover
        map = {}

    dispatcher = _dispatcher
    if dispatcher is None:
        dispatcher = ThreadedTaskDispatcher()
        dispatcher.set_thread_count(adj.threads)

    if adj.unix_socket and hasattr(socket, 'AF_UNIX'):
        sockinfo = (socket.AF_UNIX, socket.SOCK_STREAM, None, None)
        return UnixWSGIServer(
            application,
            map,
            _start,
            _sock,
            dispatcher=dispatcher,
            adj=adj,
            sockinfo=sockinfo)

    effective_listen = []
    last_serv = None
    for sockinfo in adj.listen:
        # When TcpWSGIServer is called, it registers itself in the map. This
        # side-effect is all we need it for, so we don't store a reference to
        # or return it to the user.
        last_serv = TcpWSGIServer(
            application,
            map,
            _start,
            _sock,
            dispatcher=dispatcher,
            adj=adj,
            sockinfo=sockinfo)
        effective_listen.append((last_serv.effective_host, last_serv.effective_port))

    # We are running a single server, so we can just return the last server,
    # saves us from having to create one more object
    if len(adj.listen) == 1:
        # In this case we have no need to use a MultiSocketServer
        return last_serv

    # Return a class that has a utility function to print out the sockets it's
    # listening on, and has a .run() function. All of the TcpWSGIServers
    # registered themselves in the map above.
    return MultiSocketServer(map, adj, effective_listen, dispatcher)


# This class is only ever used if we have multiple listen sockets. It allows
# the serve() API to call .run() which starts the asyncore loop, and catches
# SystemExit/KeyboardInterrupt so that it can atempt to cleanly shut down.
class MultiSocketServer(object):
    asyncore = asyncore  # test shim

    def __init__(self,
                 map=None,
                 adj=None,
                 effective_listen=None,
                 dispatcher=None,
                 ):
        self.adj = adj
        self.map = map
        self.effective_listen = effective_listen
        self.task_dispatcher = dispatcher

    def print_listen(self, format_str):  # pragma: nocover
        for l in self.effective_listen:
            l = list(l)

            if ':' in l[0]:
                l[0] = '[{}]'.format(l[0])

            print(format_str.format(*l))

    def run(self):
        try:
            self.asyncore.loop(
                timeout=self.adj.asyncore_loop_timeout,
                map=self.map,
                use_poll=self.adj.asyncore_use_poll,
            )
        except (SystemExit, KeyboardInterrupt):
            self.task_dispatcher.shutdown()


class BaseWSGIServer(logging_dispatcher, object):
    channel_class = HTTPChannel
    next_channel_cleanup = 0
    socketmod = socket  # test shim
    asyncore = asyncore  # test shim

    def __init__(self,
                 application,
                 map=None,
                 _start=True,  # test shim
                 _sock=None,  # test shim
                 dispatcher=None,  # dispatcher
                 adj=None,  # adjustments
                 sockinfo=None,  # opaque object
                 **kw
                 ):
        if adj is None:
            adj = Adjustments(**kw)
        if map is None:
            # use a nonglobal socket map by default to hopefully prevent
            # conflicts with apps and libs that use the asyncore global socket
            # map ala https://github.com/Pylons/waitress/issues/63
            map = {}
        if sockinfo is None:
            sockinfo = adj.listen[0]

        self.sockinfo = sockinfo
        self.family = sockinfo[0]
        self.socktype = sockinfo[1]
        self.application = application
        self.adj = adj
        self.trigger = trigger.trigger(map)
        if dispatcher is None:
            dispatcher = ThreadedTaskDispatcher()
            dispatcher.set_thread_count(self.adj.threads)

        self.task_dispatcher = dispatcher
        self.asyncore.dispatcher.__init__(self, _sock, map=map)
        if _sock is None:
            self.create_socket(self.family, self.socktype)
            if self.family == socket.AF_INET6:  # pragma: nocover
                self.socket.setsockopt(IPPROTO_IPV6, IPV6_V6ONLY, 1)

        self.set_reuse_addr()
        self.bind_server_socket()
        self.effective_host, self.effective_port = self.getsockname()
        self.server_name = self.get_server_name(self.effective_host)
        self.active_channels = {}
        if _start:
            self.accept_connections()

    def bind_server_socket(self):
        raise NotImplementedError  # pragma: no cover

    def get_server_name(self, ip):
        """Given an IP or hostname, try to determine the server name."""
        # if ip:
        server_name = str(ip)
        # else:
        # server_name = str(self.socketmod.gethostname())

        # Convert to a host name if necessary.
        for c in server_name:
            if c != '.' and not c.isdigit():
                return server_name
        try:
            if server_name == '0.0.0.0' or server_name == '::':
                return 'localhost'
            server_name = self.socketmod.gethostbyaddr(server_name)[0]
        except socket.error:  # pragma: no cover
            pass
        return server_name

    def getsockname(self):
        raise NotImplementedError  # pragma: no cover

    def accept_connections(self):
        self.accepting = True
        self.socket.listen(self.adj.backlog)  # Get around asyncore NT limit

    def add_task(self, task):
        self.task_dispatcher.add_task(task)

    def readable(self):
        now = time.time()
        if now >= self.next_channel_cleanup:
            self.next_channel_cleanup = now + self.adj.cleanup_interval
            self.maintenance(now)
        return (self.accepting and len(self._map) < self.adj.connection_limit)

    def writable(self):
        return False

    def handle_read(self):
        pass

    def handle_connect(self):
        pass

    def handle_accept(self):
        try:
            v = self.accept()
            if v is None:
                return
            conn, addr = v
        except socket.error:
            # Linux: On rare occasions we get a bogus socket back from
            # accept.  socketmodule.c:makesockaddr complains that the
            # address family is unknown.  We don't want the whole server
            # to shut down because of this.
            if self.adj.log_socket_errors:
                self.logger.warning('server accept() threw an exception',
                                    exc_info=True)
            return
        self.set_socket_options(conn)
        addr = self.fix_addr(addr)
        self.channel_class(self, conn, addr, self.adj, map=self._map)

    def run(self):
        try:
            self.asyncore.loop(
                timeout=self.adj.asyncore_loop_timeout,
                map=self._map,
                use_poll=self.adj.asyncore_use_poll,
            )
        except (SystemExit, KeyboardInterrupt):
            self.task_dispatcher.shutdown()

    def pull_trigger(self):
        self.trigger.pull_trigger()

    def set_socket_options(self, conn):
        pass

    def fix_addr(self, addr):
        return addr

    def maintenance(self, now):
        """
        Closes channels that have not had any activity in a while.

        The timeout is configured through adj.channel_timeout (seconds).
        """
        cutoff = now - self.adj.channel_timeout
        for channel in self.active_channels.values():
            if (not channel.requests) and channel.last_activity < cutoff:
                channel.will_close = True

    def print_listen(self, format_str):  # pragma: nocover
        print(format_str.format(self.effective_host, self.effective_port))


class TcpWSGIServer(BaseWSGIServer):

    def bind_server_socket(self):
        (_, _, _, sockaddr) = self.sockinfo
        self.bind(sockaddr)

    def getsockname(self):
        try:
            return self.socketmod.getnameinfo(
                self.socket.getsockname(),
                self.socketmod.NI_NUMERICSERV
            )
        except:  # pragma: no cover
            # This only happens on Linux because a DNS issue is considered a
            # temporary failure that will raise (even when NI_NAMEREQD is not
            # set). Instead we try again, but this time we just ask for the
            # numerichost and the numericserv (port) and return those. It is
            # better than nothing.
            return self.socketmod.getnameinfo(
                self.socket.getsockname(),
                self.socketmod.NI_NUMERICHOST | self.socketmod.NI_NUMERICSERV
            )

    def set_socket_options(self, conn):
        for (level, optname, value) in self.adj.socket_options:
            conn.setsockopt(level, optname, value)


if hasattr(socket, 'AF_UNIX'):

    class UnixWSGIServer(BaseWSGIServer):

        def __init__(self,
                     application,
                     map=None,
                     _start=True,  # test shim
                     _sock=None,  # test shim
                     dispatcher=None,  # dispatcher
                     adj=None,  # adjustments
                     sockinfo=None,  # opaque object
                     **kw):
            if sockinfo is None:
                sockinfo = (socket.AF_UNIX, socket.SOCK_STREAM, None, None)

            super(UnixWSGIServer, self).__init__(
                application,
                map=map,
                _start=_start,
                _sock=_sock,
                dispatcher=dispatcher,
                adj=adj,
                sockinfo=sockinfo,
                **kw)

        def bind_server_socket(self):
            cleanup_unix_socket(self.adj.unix_socket)
            self.bind(self.adj.unix_socket)
            if os.path.exists(self.adj.unix_socket):
                os.chmod(self.adj.unix_socket, self.adj.unix_socket_perms)

        def getsockname(self):
            return ('unix', self.socket.getsockname())

        def fix_addr(self, addr):
            return ('localhost', None)

# Compatibility alias.
WSGIServer = TcpWSGIServer
