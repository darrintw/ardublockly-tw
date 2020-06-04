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
Blockly.Msg.BLOCKS_CATEGORY_VARIABLES = 'Variables';

/// Ardublockly name
Blockly.Msg.ARD_VAR_AS = 'as';
Blockly.Msg.ARD_VAR_AS_TIP = 'Sets a value to a specific type';
Blockly.Msg.VARIABLES_INIT = "initialize %1 to %2";
Blockly.Msg.VARIABLES_INIT_TOOLTIP = "assign an initial value for a variable.";
Blockly.Msg.VARIABLES_INIT_NOT_IN_SETUP_WARNING = "Warning: This block may only be used within SETUP.";
Blockly.Msg.VARIABLES_INIT_REDEFINED_WARNING = "Warning: The variable %1 can not be redefined.";
Blockly.Msg.ARD_PIN = "Pin";
Blockly.Msg.ARD_PWM_PIN = "PWM Pin";
Blockly.Msg.ARD_ANALOG_PIN = "Analog Pin";
Blockly.Msg.ARD_HIGH = 'HIGH';
Blockly.Msg.ARD_LOW = 'LOW';
