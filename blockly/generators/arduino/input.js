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
 * Function for reading a digital pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_input'] = function (block) {
    var pin = block.getFieldValue('PIN');
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.INPUT, 'Digital Read');

    var code = 'pinMode(' + pin + ', INPUT);\n';
    return code;
};

/**
 * Function for reading a digital pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_input_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'pinMode(' + pin + ', INPUT);\n';

    return code;
};

Blockly.Arduino['io_input_pullup'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'pinMode(' + pin + ', INPUT_PULLUP);\n';
    return code;
};

/**
 * Function for reading a digital pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_digitalread'] = function (block) {
    var pin = block.getFieldValue('PIN');
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.INPUT, 'Digital Read');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'digitalRead(' + pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Function for reading a digital pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_digitalread_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'digitalRead(' + pin + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Function for reading an analogue pin value (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { analogRead(X)      }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_analogread'] = function (block) {
    var pin = block.getFieldValue('PIN');
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.INPUT, 'Analogue Read');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'analogRead(' + pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_analogread_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'analogRead(' + pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_pulsein'] = function (block) {
    var pin = block.getFieldValue("PULSEPIN");
    var type = Blockly.Arduino.valueToCode(block, "PULSETYPE", Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.INPUT, 'Pulse pin');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'pulseIn(' + pin + ', ' + type + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_pulsetimeout'] = function (block) {
    var pin = block.getFieldValue("PULSEPIN");
    var type = Blockly.Arduino.valueToCode(block, "PULSETYPE", Blockly.Arduino.ORDER_ATOMIC);
    var timeout = Blockly.Arduino.valueToCode(block, "TIMEOUT", Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.INPUT, 'Pulse pin');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'pulseIn(' + pin + ', ' + type + ', ' + timeout + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_pulsetimeout_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var type = Blockly.Arduino.valueToCode(block, "PULSETYPE", Blockly.Arduino.ORDER_ATOMIC);
    var timeout = Blockly.Arduino.valueToCode(block, "TIMEOUT", Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.INPUT, 'Pulse pin');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);\n';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'pulseIn(' + pin + ', ' + type + ', ' + timeout + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_pin_name'] = function (block) {
    var pinName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('PIN_NAME'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.addVariable(pinName,
        'int ' + pinName + ' = ' + pin + ';', true);
    var code = '';
    return code;
};

Blockly.Arduino['io_set_name'] = function (block) {
    var pinName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('PIN_NAME'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var pin = block.getFieldValue('PIN');

    Blockly.Arduino.addVariable(pinName,
        'int ' + pinName + ' = ' + pin + ';', true);
    var code = '';
    return code;
};

/**
 * Function for reading a digital pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {null} Completed code with order of operation.
 */
Blockly.Arduino['io_i2cpins'] = function (block) {
    var pin = block.getFieldValue("PIN");
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['io_i2cpins_var'] = function (block) {
    var code = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};