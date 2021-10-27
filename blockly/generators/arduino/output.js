/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.require('Blockly.Arduino');

/**
 * Function for 'set pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_digitalwrite'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

    Blockly.Arduino.reservepin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Digital Write');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

Blockly.Arduino['io_digitalwrite_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

/**
 * Function for setting the state (Y) of a built-in LED (X).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_builtin_led'] = function (block) {
    var pin = block.getFieldValue('BUILT_IN_LED');
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

    Blockly.Arduino.reservepin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Set LED');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

/**
 * Function for setting the state (Y) of an analogue output (X).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { analogWrite(X, Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_analogwrite'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';

    Blockly.Arduino.reservepin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Analogue Write');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    // Warn if the input value is out of range
    if ((stateOutput < 0) || (stateOutput > 255)) {
        block.setWarningText('The analogue value set must be between 0 and 255',
            'pwm_value');
    } else {
        block.setWarningText(null, 'pwm_value');
    }

    var code = 'analogWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

Blockly.Arduino['io_analogwrite_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'analogWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

/**
 * Function for turning the tone library on on a given pin (X).
 * Arduino code: setup { pinMode(X, OUTPUT) }
 *               loop  { tone(X, frequency) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['io_tone'] = function (block) {
    var pin = block.getFieldValue('TONEPIN');
    var freq = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.reservepin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Tone pin');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'tone(' + pin + ',' + freq + ');\n';
    return code;
};

Blockly.Arduino['io_notone'] = function (block) {
    var pin = block.getFieldValue("TONEPIN");
    Blockly.Arduino.reservepin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Tone pin');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'noTone(' + pin + ');\n';
    return code;
};