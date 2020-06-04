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
Blockly.Msg.BLOCKS_CATEGORY_OUTPUT = 'Output';

/// Ardublockly name
Blockly.Msg.ARD_ANALOGWRITE = 'set analog Pin#';
Blockly.Msg.ARD_ANALOGWRITE_TIP = 'Write analog value between 0 and 255 to a specific PWM Port';
Blockly.Msg.ARD_HIGHLOW_TIP = 'Set a Pin state logic High or Low.';
Blockly.Msg.ARD_WRITE_TO = 'to';
Blockly.Msg.ARD_DIGITALWRITE = 'set digital Pin#';
Blockly.Msg.ARD_DIGITALWRITE_TIP = 'Write digital value HIGH or LOW to a specific Port';
Blockly.Msg.ARD_SETTONE = "Set tone on Pin #";
Blockly.Msg.ARD_NOTONE = "Turn off tone on Pin #";
Blockly.Msg.ARD_TONEFREQ = "at frequency";
Blockly.Msg.ARD_TONE_FREQ = "frequency";
Blockly.Msg.ARD_TONE_PIN = "Tone PIN#";
Blockly.Msg.ARD_TONE_PIN_TIP = "Generate audio tones on a Pin";
Blockly.Msg.ARD_TONE_TIP = "Sets tone on Pin to specified frequency within range 31 - 65535";
Blockly.Msg.ARD_TONE_WARNING = "Frequency must be in range 31 - 65535";
Blockly.Msg.ARD_NOTONE_PIN = "No tone PIN#";
Blockly.Msg.ARD_NOTONE_PIN_TIP = "Stop generating a tone on a Pin";
Blockly.Msg.ARD_NOTONE_TIP = "Turns the tone off on the selected Pin";