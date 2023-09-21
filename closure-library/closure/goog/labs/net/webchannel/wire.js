/**
 * @license
 * Copyright The Closure Library Authors.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Interface and shared data structures for implementing
 * different wire protocol versions.
 */
goog.provide('goog.labs.net.webChannel.Wire');

goog.requireType('goog.structs.Map');



/**
 * The interface class.
 *
 * @interface
 */
goog.labs.net.webChannel.Wire = function() {};


/**
 * The latest protocol version that this class supports. We request this version
 * from the server when opening the connection. Should match
 * LATEST_CHANNEL_VERSION on the server code.
 * @type {number}
 */
goog.labs.net.webChannel.Wire.LATEST_CHANNEL_VERSION = 8;


/**
 * The JSON field key for the raw data wrapper object.
 * @type {string}
 */
goog.labs.net.webChannel.Wire.RAW_DATA_KEY = '__data__';



/**
 * Simple container class for a (mapId, map) pair.
 * @param {number} mapId The id for this map.
 * @param {!Object|!goog.structs.Map} map The map itself.
 * @param {!Object=} opt_context The context associated with the map.
 * @constructor
 * @struct
 */
goog.labs.net.webChannel.Wire.QueuedMap = function(mapId, map, opt_context) {
  /**
   * The id for this map.
   * @type {number}
   */
  this.mapId = mapId;

  /**
   * The map itself.
   * @type {!Object|!goog.structs.Map}
   */
  this.map = map;

  /**
   * The context for the map.
   * @type {Object}
   */
  this.context = opt_context || null;
};


/**
 * @return {number|undefined} the size of the raw JSON message or
 * undefined if the message is not encoded as a raw JSON message
 */
goog.labs.net.webChannel.Wire.QueuedMap.prototype.getRawDataSize = function() {
  if (goog.labs.net.webChannel.Wire.RAW_DATA_KEY in this.map) {
    const data = this.map[goog.labs.net.webChannel.Wire.RAW_DATA_KEY];
    if (typeof data === 'string') {
      return data.length;
    }
  }

  return undefined;
};
