#!/usr/bin/env python3
# -*- coding: utf-8 -*- #
#
# Creates a zip file of the self executable Ardublockly application.
#
# Copyright (c) 2021 darrin https://github.com/darrintw/
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# IMPORTANT: This script is designed to be located one directory level under
#            the project root folder.
#
# This script file will create a copy of the project folder in its parent dir.
# So if the project folder is located in ~/projects/ardublockly it will create
# a copy in ~/projects/ardublockly_release/ardublockly_<timestamp>_<tag>.
# It will then delete unnecessary files for a working version of the self
# executable application and zip the contents of the folder.
#
import os
import platform
import re
import shutil
import subprocess
import sys
import time
import zipfile

from bs4 import BeautifulSoup

script_tag = "[Ardublockly pack] "
script_tab = "                   "

# The project_root_dir depends on this file location, assumed to be two levels
# below project root, so it cannot be moved without updating this variable
project_root_dir = \
    os.path.dirname(  # going up 1 level
        os.path.dirname(os.path.realpath(__file__)))  # folder dir of this

# This script copies the ardublockly folder with a different name on the same 
# directory level to easily filter what to included in the packed version
copy_dir_name = None
release_dir_name = None
copied_project_dir = None
copied_project_up_dir = None
exec_folder_name = "arduexec"


def set_tag(tag):
    """
    Sets the packaged zip file and copied folder tag to the input argument. So,
    the copied folder will be names "ardublockly_<tag>" and the zip file
    "ardublockly_<tag>.zip.
    If Mac OS X the folder is packed in ardublockly_tag.app/Contents
    :tag: String to indicate the tag to use.
    """
    print(script_tag + "Setting the Ardublockly package tag to '%s'" % tag)
    global copy_dir_name
    global release_dir_name
    global copied_project_dir
    global copied_project_up_dir
    release_dir_name = "ardublockly_releases"
    copy_dir_name = "%s\\ardublockly_%s" % (release_dir_name, tag)
    # In OSX everything goes into the folder path Ardublockly.app/Contents/
    if platform.system() == "Darwin":
        copy_dir_name = os.path.join(
            copy_dir_name, 'Ardublockly.app', 'Contents')
        print(script_tab + 'Packing for Mac OS X, final folder structure: %s' %
              copy_dir_name)
    # copied_project_dir = os.path.join(os.path.dirname(project_root_dir), copy_dir_name)
    copied_project_dir = os.path.join(os.path.dirname(project_root_dir), copy_dir_name + '\\ardublockly')
    copied_project_up_dir = os.path.join(os.path.dirname(project_root_dir), copy_dir_name)


def replace_title_version(tag):
    path = copied_project_dir + '\\ardublockly\\index.html'
    with open(path, 'r', encoding='UTF-8') as html_doc:
        soup = BeautifulSoup(html_doc.read(), 'lxml')
        title = soup.find('title')
        print(script_tab + "Replace title string from %s" % title.string)
        print(script_tab + "                       to %s" % "Ardublockly  v" + tag)
        title.string = "Ardublockly  v" + tag
        html_doc.close()
    with open(path, 'w', encoding='UTF-8') as fp:
        fp.write(soup.prettify())
        fp.close()


def get_commit_tag():
    """
    Get Build tag from commit number.
    :return: String with the final tag.
    """
    path = '..\\ardublockly\\ardublockly\\build_number'
    with open(path, 'r', encoding='UTF-8') as version:
        arch_time_stamp = version.read()
    print(arch_time_stamp.replace('\n', ''))
    return arch_time_stamp.replace('\n', '')


def get_build_tag():
    """
    The tag will always contain the timestamp and platform architecture.
    If provided as a command line argument it will add an additional string,
    if not it will check for environmental variables set in build servers to
    create an identification tag.
    :return: String with the final tag.
    """
    # All tags begging with architecture type (based on the Python version) and
    # the current time stamp
    arch_time_stamp = "%s" % (time.strftime("%Y%m%d_%H%M"))
    '''
    arch_time_stamp = "%s%s_%s" % (platform.system(),
                                   (struct.calcsize('P') * 8),
                                   time.strftime("%Y%m%d_%H%M"))
    '''
    # Check if a command line argument has been given
    if len(sys.argv) > 1:
        # Take the first argument and use it as a tag appendage
        print(script_tab + "Command line argument '%s' found and will be used "
                           "for package tag." % sys.argv[1])
        return "%s_%s" % (arch_time_stamp, sys.argv[1])
    else:
        print(script_tab + "No command line argument found")

    # Check for Travis-CI environmental variables to create tag appendage
    print(script_tab + "Checking Travis-CI environment variables for tag:")
    travis_tag = tag_from_ci_env_vars(ci_name="Travis-CI",
                                      pull_request_var="TRAVIS_PULL_REQUEST",
                                      branch_var="TRAVIS_BRANCH",
                                      commit_var="TRAVIS_COMMIT")
    if travis_tag:
        return "%s_%s" % (arch_time_stamp, travis_tag)

    # Check for AppVeyor environmental variables to create tag appendage
    print(script_tab + "Checking AppVeyor environment variables for tag:")
    appveyor_tag = tag_from_ci_env_vars(
        ci_name="AppVeyor",
        pull_request_var="APPVEYOR_PULL_REQUEST_NUMBER",
        branch_var="APPVEYOR_REPO_BRANCH",
        commit_var="APPVEYOR_REPO_COMMIT")
    if appveyor_tag:
        return "%s_%s" % (arch_time_stamp, appveyor_tag)

    # Check for Circle CI environmental variables to create tag appendage
    print(script_tab + "Checking Circleci environment variables for tag:")
    circleci_tag = tag_from_ci_env_vars(
        ci_name="Circleci",
        pull_request_var="CI_PULL_REQUEST",
        branch_var="CIRCLE_BRANCH",
        commit_var="CIRCLE_SHA1")
    if circleci_tag:
        return "%s_%s" % (arch_time_stamp, circleci_tag)

    return arch_time_stamp


def tag_from_ci_env_vars(ci_name, pull_request_var, branch_var, commit_var):
    """
    Checks if the CI environmental variables to check for a pull request,
    commit id and band commit branch are present.
    :return: String with the CI build information, or None if the CI
             environmental variables could not be found.
    """
    pull_request = os.environ.get(pull_request_var)
    branch = os.environ.get(branch_var)
    commit = os.environ.get(commit_var)

    if pull_request and pull_request != "false":
        try:
            pr_number = int(re.findall("\\d+", pull_request)[0])
            print(script_tab + "Pull request valid '%s' variable found: %s" %
                  (ci_name, pr_number))
            return "pull_%s" % pr_number
        except (ValueError, TypeError):
            print(script_tab + "The pull request environmental variable " +
                  "'%s' value '%s' from %s is not a valid number." %
                  (pull_request_var, pull_request, ci_name))

    if branch and commit:
        print(script_tab + "\tBranch and commit valid," +
              "'%s' variables found: %s %s" % (ci_name, branch, commit))
        # We only return first 10 digits from the commit ID (normal length 40)
        commit = "%s" % commit
        return "%s_%s" % (branch, commit[:5])

    print(script_tab + "\tThe environmental variables for %s " % ci_name +
          "were deemed invalid.\n" +
          script_tab + "\t%s: %s\n" % (pull_request_var, pull_request) +
          script_tab + "\t%s: %s\n" % (branch_var, branch) +
          script_tab + "\t%s: %s" % (commit_var, commit))
    return None


def remove_directory(dir_to_remove):
    """ Removes the a given directory. """
    if os.path.exists(dir_to_remove):
        # print(script_tab + "Removing directory %s" % dir_to_remove)
        shutil.rmtree(dir_to_remove)
    else:
        print(script_tab + "Directory %s was not found." % dir_to_remove)


def copy_ardublockly_folder():
    """
    Copies all the contents of the project root directory into a new folder on
    the same level.
    The copy operation ignores a list of directories.
    :return: Boolean indicating the success state of the operation.
    """
    ignore_pat = (".idea*", ".svn*", ".travis*", ".appveyor*", "circle.yml", "notepad++", "CNAME",
                  ".ruby-version", "TestTemp_*", "package", ".coverage's", "ardublockly.iml",
                  "ardublockly.log", "run.bat", "run_dev.bat", "ServerCompilerSettings.ini",
                  "pack.bat", "buildBlockly.cmd", "build.bat", "test.py", "update.bat", ".git*",
                  "sync.ffs_db", "FETCH_HEAD", "*.pack", "start.py")
    if not os.path.exists(copied_project_dir):
        print(script_tab + "Copying contents of %s" % project_root_dir)
        print(script_tab + "               into %s" % copied_project_dir)
        shutil.copytree(project_root_dir,
                        copied_project_dir,
                        symlinks=True,
                        ignore=shutil.ignore_patterns(*ignore_pat))
        # shutil.rmtree(copied_project_dir + "\\.git\\lfs\\objects")
        # Add by darrin 20190602 - Start
        print(script_tab + "Creating run.bat to %s" % copied_project_up_dir)
        shell_text = "@echo off\n" + \
                     "del %s" % os.path.join("ardublockly\\", exec_folder_name, "appdata\\Cache\\*.* /Q\n") + \
                     "del %s" % os.path.join("ardublockly\\", exec_folder_name, "appdata\\GPUCache\\*.* /Q\n") + \
                     "start %s" % os.path.join("ardublockly\\", exec_folder_name, "ardublockly.exe")
        shell_location = os.path.join("ardublockly\\", copied_project_up_dir, "run.bat")

        print(script_tab + "Creating shell file into %s" % shell_location)
        '''
        print(script_tab + "Moving blockfactory of %s\\blockfactory" % copied_project_dir)
        print(script_tab + "                  into %s" % copied_project_up_dir)
        shutil.move(copied_project_dir + "\\blockfactory", copied_project_up_dir)
        '''
        print(script_tab + "Moving CH341SER of %s\\Tools\\CH341SER" % copied_project_dir)
        print(script_tab + "              into %s" % copied_project_up_dir)
        shutil.move(copied_project_dir + "\\Tools\\CH341SER", copied_project_up_dir)

        print(script_tab + "Moving CP210x of %s\\Tools\\CP210x" % copied_project_dir)
        print(script_tab + "              into %s" % copied_project_up_dir)
        shutil.move(copied_project_dir + "\\Tools\\CP210x", copied_project_up_dir)

        print(script_tab + "Moving DigisparkWindowsDriver of %s\\Tools\\DigisparkWindowsDriver" % copied_project_dir)
        print(script_tab + "              into %s" % copied_project_up_dir)
        shutil.move(copied_project_dir + "\\Tools\\DigisparkWindowsDriver", copied_project_up_dir)
        '''
        print(script_tab + "Moving notepad++ of %s\\Tools\\notepad++" % copied_project_dir)
        print(script_tab + "               into %s" % copied_project_up_dir)
        shutil.move(copied_project_dir + "\\Tools\\notepad++", copied_project_up_dir)
        
        print(script_tab + "Moving update.bat of %s" % copied_project_dir)
        print(script_tab + "                  into %s" % copied_project_up_dir)
        shutil.move(copied_project_dir + "\\update.bat", copied_project_up_dir)
        
        print(script_tab + "Moving MinGit of %s\\Tools\\MinGit" % copied_project_dir)
        print(script_tab + "                  into %s" % copied_project_up_dir)
        shutil.move(copied_project_dir + "\\Tools\\MinGit", copied_project_up_dir)
        '''
        print(script_tag + "Removing Tools directory after move to top folder")
        remove_directory(os.path.join(copied_project_dir, "Tools"))

        print(script_tab + "Reset Arduino preferences %s\\Arduino\\portable\\preferences.txt" % copied_project_dir)
        shutil.copyfile(copied_project_dir + "\\Arduino\\portable\\preferences.bak",
                        copied_project_dir + "\\Arduino\\portable\\preferences.txt")

        try:
            with open(shell_location, "w") as bash_file:
                bash_file.write(shell_text)
            print(script_tab + "Created shell file into %s" % shell_location)
        except Exception as e:
            print(script_tab + "%s" % e)
            print(script_tab + "ERROR: Shell file to launch the Ardublockly "
                               "application could not be created.")
            return

        print(script_tab + "Creating ServerCompilerSettings.ini to %s" % copied_project_dir)
        shell_text = "[Arduino_IDE]\n" + \
                     "arduino_exec_path = arduino\\arduino_debug.exe\n" + \
                     "arduino_board = uno\n" + \
                     "arduino_board_flag = arduino:avr:uno\n" + \
                     "arduino_serial_port = none\n" + \
                     "\n" + \
                     "[Arduino_Sketch]\n" + \
                     "sketch_name = Sketch_Name\n" + \
                     "sketch_directory = ArdublocklySketch\n" + \
                     "examples_directory = examples\n" + \
                     "\n" + \
                     "[Ardublockly]\n" + \
                     "ide_load = upload\n" + \
                     "baud_rate = 9600\n" + \
                     "end_of_line = nlcr\n" + \
                     "serialtimestamp = 1\n" + \
                     "load_delay = 2000\n"
        print(shell_text)
        shell_location = os.path.join(copied_project_dir, "ServerCompilerSettings.ini")

        print(script_tab + "Creating shell file into %s" % shell_location)

        try:
            with open(shell_location, "w") as bash_file:
                bash_file.write(shell_text)
            print(script_tab + "Created shell file into %s" % shell_location)
        except Exception as e:
            print(script_tab + "%s" % e)
            print(script_tab + "ERROR: Shell file to launch the Ardublockly "
                               "application could not be created.")
            return
        """
        print(script_tab + "Moving run.bat of %s" % project_root_dir)
        print(script_tab + "               into %s" % copied_project_up_dir)
        shutil.move(project_root_dir + "\\run.bat", copied_project_up_dir)
        """
        # Add by darrin 20190602 - End
    else:
        print(script_tab + "ERROR: %s directory already exists!" %
              copied_project_dir)
        return False
    return True


def remove_unnecessary_blockly():
    """ Removes unnecessary files from the blockly library. """
    # The demos folder contains Blockly applications
    remove_directory(os.path.join(copied_project_dir, "blockly", "demos"))
    # Only for setting Blockly on Google's service
    remove_directory(os.path.join(copied_project_dir, "blockly", "appengine"))
    # Unit tests
    remove_directory(os.path.join(copied_project_dir, "blockly", "tests"))


def remove_file_type_from(file_extension, scan_path):
    """
    Removes all files with an specific extension from a given directory.
    :param file_extension: File extension of the files to remove
    :param scan_path: Directory to scan for file removal.
    """
    for root, dirs, files in os.walk(scan_path, topdown=False):
        for file_ in files:
            if file_.endswith("." + file_extension):
                file_path = os.path.join(root, file_)
                # print(script_tab + "Deleting file: %s" % file_path)
                os.remove(file_path)


def remove_pycache_dirs(scan_path):
    """
    Removes all folders named "__pycache__" from the given directory tree.
    :param scan_path: Directory to scan for __pycache__ removal.
    :return:
    """
    for root, dirs, files in os.walk(scan_path, topdown=False):
        for name in dirs:
            if name == "__pycache__":
                remove_directory(os.path.join(root, name))


def zip_ardublockly_copy(name_append):
    """
    Zips the contents of the copied project folder into a subdirectory of
    the original project folder.
    There is some weird zip module magic numbers:
        zipfile.ZipInfo().create_system: Defines the system creating the zip
            file set to 0 for Windows and to 3 for anything else (unix-y as
            described by the Python source code).
        zipfile.ZipInfo().external_attr: Is the External file attributes, the
            value 2716663808L is the long representation of '0xA1ED0000L', some
            symlink attribute magic...
    """
    # zip_file_dir = os.path.join(project_root_dir, "releases")
    zip_file_dir = os.path.join(os.path.dirname(project_root_dir), "ardublockly_releases")
    zip_file_location = os.path.join(
        zip_file_dir, "ardublockly_%s.zip" % name_append)

    # First ensure the releases folder exists
    if not os.path.exists(zip_file_dir):
        os.makedirs(zip_file_dir)

    # app_folder = copied_project_dir
    app_folder = copied_project_up_dir
    # In OS X copied_project_dir is ardublockly_tag/Ardublockly.app/Contents/
    # and we need to zip the .app folder
    if platform.system() == "Darwin":
        app_folder = os.path.dirname(os.path.dirname(app_folder))

    old_cwd = os.getcwd()
    os.chdir(zip_file_dir)
    new_cwd = os.getcwd()
    print(script_tab + "Changing cwd from %s" % old_cwd)
    print(script_tab + "               to %s" % new_cwd)
    print(script_tab + "Zipping %s" % app_folder)
    print(script_tab + "   into %s" % zip_file_location)

    if platform.system() == "Darwin":
        # There are issues with zipfile and symlinks, so use zip command line
        # pack_dir_name = copy_dir_name
        pack_dir_name = "ardublockly_%s" % name_append
        zip_process = subprocess.Popen(
            ["zip", "--symlinks", "-r", zip_file_location, pack_dir_name],
            stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        std_op, std_err_op = zip_process.communicate()
        if std_err_op:
            print(script_tab + "Error using zip command:\n%s" % std_err_op)
    else:
        pack_dir_name = "ardublockly_%s" % name_append
        zip_file = zipfile.ZipFile(zip_file_location, "w",
                                   zipfile.ZIP_DEFLATED)
        for root_dir, sub_dirs, files in os.walk(pack_dir_name):
            # print('Zipping dir', root_dir)
            zip_file.write(root_dir)
            for filename in files:
                try:
                    zip_file.write(os.path.join(root_dir, filename))
                except Exception as e:
                    print('Zipping file', os.path.join(root_dir, filename))
        zip_file.close()


def pack_ardublockly(tag):
    """
    Copies the Ardublockly folder, removes unnecessary files and creates a
    zipped version of this copied folder into the releases folder of the
    project directory.
    :param tag: String tag to be attached to the zip file, used to distinguish
                versions for archiving.
    """
    # Set the copied folder name to the stamp
    set_tag(tag)

    print(script_tag + "Copying the project root folder:")
    success = copy_ardublockly_folder()
    if not success:
        raise SystemExit(script_tab + "Exit: Project root copy error.")

    print(script_tag + "Removing unnecessary Blockly files:")
    remove_unnecessary_blockly()

    print(script_tag + "Removing any already zipped Ardublockly version:")
    remove_directory(os.path.join(copied_project_dir, "releases"))

    print(script_tag + "Removing Electron session app data files:")
    remove_directory(os.path.join(copied_project_dir, "arduexec", "appdata"))

    print(script_tag + "Removing Python .pyc files:")
    remove_file_type_from(file_extension="pyc", scan_path=copied_project_dir)

    print(script_tag + "Removing Python 3 pycache directories:")
    remove_pycache_dirs(scan_path=copied_project_dir)
    '''
    print(script_tag + "Add version tag to index.html title tag:")
    replace_title_version(tag)
    '''
    print(script_tag + "Creating zip file of the new Ardublockly folder:")
    zip_ardublockly_copy(tag)


def main():
    print(script_tag + "Pack Ardublockly script started.")
    print(script_tag + "Checking for tag to attach to zip file:")
    # build_tag = get_build_tag()
    build_tag = get_commit_tag()
    pack_ardublockly(build_tag)


if __name__ == "__main__":
    main()
