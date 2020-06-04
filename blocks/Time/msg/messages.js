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
Blockly.Msg.BLOCKS_CATEGORY_TIME = 'Time';

/// Ardublockly name
Blockly.Msg.ARD_TIME_DELAY = "wait";
Blockly.Msg.ARD_TIME_DELAY_MICROS = "microseconds";
Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = "Wait specific time in microseconds";
Blockly.Msg.ARD_TIME_DELAY_TIP = "Wait specific time in milliseconds";
Blockly.Msg.ARD_TIME_INF = "wait forever (end program)";
Blockly.Msg.ARD_TIME_INF_TIP = "Wait indefinitely, stopping the program.";
Blockly.Msg.ARD_TIME_MICROS = "current elapsed Time (microseconds)";
Blockly.Msg.ARD_TIME_MICROS_TIP = "Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer";
Blockly.Msg.ARD_TIME_MILLIS = "current elapsed Time (milliseconds)";
Blockly.Msg.ARD_TIME_MILLIS_TIP = "Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer";
Blockly.Msg.ARD_TIME_MS = "milliseconds";

