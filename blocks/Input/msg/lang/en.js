'use strict';

goog.require('Blockly.Msg.en');
/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_INPUT = 'Input';

/// Ardublockly name
Blockly.Msg.ARD_DIGITALREAD_MSG = "read digital %1";
Blockly.Msg.ARD_ANALOGREAD_MSG = "read analog %1";
Blockly.Msg.ARD_INPUT_PULLUP_MSG = "enable internal pullup resister at Pin %1";
Blockly.Msg.ARD_INPUT_PULLUP_TIP = "enable internal pullup resister at specified Pin";
Blockly.Msg.ARD_ANALOGREAD_TIP = 'Return value between 0 and 1024';
Blockly.Msg.ARD_HIGHLOW_TIP = 'Set a Pin state logic High or Low.';
Blockly.Msg.ARD_DIGITALREAD = 'read digital Pin#';
Blockly.Msg.ARD_DIGITALREAD_TIP = 'Read digital value on a Pin: HIGH or LOW';
Blockly.Msg.ARD_PULSE_TIP = 'Measures the duration of a pulse on the selected Pin.';
Blockly.Msg.ARD_PULSE_READ = 'measure %1 pulse on Pin #%2';
Blockly.Msg.ARD_PULSE_READ_TIMEOUT = 'measure %1 pulse on Pin #%2 (timeout after %3 μs)';
Blockly.Msg.ARD_PULSETIMEOUT_MSG = "read %1 pulse on %2 timeout after %3 ms";
Blockly.Msg.ARD_PULSETIMEOUT_TIP = 'Measures the duration of a pulse on the selected Pin, if it is within the time-out in microseconds.';