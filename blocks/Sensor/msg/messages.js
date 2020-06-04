/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview English strings for test blocks. All names have the postfix
 *     BLOCKS_{category} from the blocks_config.json data.
 */
'use strict';

goog.require('Blockly.Msg.en');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_SENSOR = 'Sensor';

/// Ardublockly name
Blockly.Msg.ARD_ULTRASONIC_DISTANCE = "Config Ultrasonic(HC-SR04) Pin";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TIP = "";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TRIG = "TRIG Pin";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_ECHO = "ECHO Pin";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_CM = "cm";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_INCH = "inch";
Blockly.Msg.ARD_TRTC5000_FROM = "Read Reflective Infrared Sensor value \u207B from ";
Blockly.Msg.ARD_TRTC5000_READ = "";
Blockly.Msg.ARD_TRTC5000_TIP = 'Only for TRTC5000. Value is reverse.';
Blockly.Msg.ARD_DHT11_READTEMP_FROM = "read celsius temperature from DHT11 module at ";
Blockly.Msg.ARD_DHT11_READTEMP_MSG = "";
Blockly.Msg.ARD_DHT11_READTEMP_TIP = "read celsius temperature, -1 means error";
Blockly.Msg.ARD_DHT11_READHUMI_FROM = "read relative humidity from DHT11 module at "
Blockly.Msg.ARD_DHT11_READHUMI_MSG = "";
Blockly.Msg.ARD_DHT11_READHUMI_TIP = "read relative humidity, -1 means error";
Blockly.Msg.ARD_DS18B20_READTEMP_MSG = "read celsius temperature from DS18B20 module at %1";
Blockly.Msg.ARD_DS18B20_READTEMP_TIP = "read celsius temperature, -1 means error";