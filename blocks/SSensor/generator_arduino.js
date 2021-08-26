/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.ssensor');

goog.require('Blockly.Arduino');


/**
 * @param {!Blockly.Block} block Block to generate the code from.
 */
Blockly.Arduino['hx711_setup'] = function (block) {
    var dataPin = block.getFieldValue('DATA_PIN');
    var clkPin = block.getFieldValue('CLK_PIN');
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    Blockly.Arduino.addInclude(hx711Id + '_include', '#include "HX711.h"');
    Blockly.Arduino.addDeclaration(hx711Id + '_declar', 'HX711 ' + hx711Id + ';');
    Blockly.Arduino.addSetup(hx711Id + '_setup', hx711Id + '.begin(' + dataPin + ', ' + clkPin + ');', true);

    return "";
};

/** . */
Blockly.Arduino['hx711_set_scale'] = function (block) {
    var scaleValue = Blockly.Arduino.valueToCode(
        block, 'HX711_SET_SCALE', Blockly.Arduino.ORDER_ATOMIC) || '';
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = hx711Id + '.set_scale(' + scaleValue + ');\n';

    return code;
};

/** . */
Blockly.Arduino['hx711_tare'] = function (block) {
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = hx711Id + '.tare();\n';

    return code;
};

/** . */
Blockly.Arduino['hx711_get_units'] = function (block) {
    var unitsValue = Blockly.Arduino.valueToCode(
        block, 'HX711_GET_UNITS', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = hx711Id + '.get_units(' + unitsValue + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['hx711_power_down'] = function (block) {
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = hx711Id + '.power_down();\n';

    return code;
};

/** . */
Blockly.Arduino['hx711_power_up'] = function (block) {
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = hx711Id + '.power_up();\n';

    return code;
};