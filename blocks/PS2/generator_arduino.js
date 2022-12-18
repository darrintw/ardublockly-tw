/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.PS2');

goog.require('Blockly.Arduino');

//
Blockly.Arduino["PS2_init"] = function (block) {
    var ps2Name = block.getFieldValue('VAR');
    var ps2Id = Blockly.Arduino.variableDB_.getName(
        ps2Name,
        Blockly.Variables.NAME_TYPE);
    var clock = Blockly.Arduino.valueToCode(block, 'CLOCK', Blockly.Arduino.ORDER_ATOMIC);
    var attention = Blockly.Arduino.valueToCode(block, 'ATTENTION', Blockly.Arduino.ORDER_ATOMIC);
    var command = Blockly.Arduino.valueToCode(block, 'COMMAND', Blockly.Arduino.ORDER_ATOMIC);
    var data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.addInclude('PS2_inc', '#include <PS2X_lib.h>');
    Blockly.Arduino.addVariable(ps2Name, 'PS2X ' + ps2Id + ';', true);
    var setup_code = 'do { \n' +
        '    //GamePad(clock, command, attention, data, Pressures?, Rumble?)\n' +
        '    int error = ' + ps2Id + ".config_gamepad(" + clock + ", " + command + ", " + attention + ", " + data + ", true, true);\n" +
        '    if (error == 0) {\n' +
        //'      Serial.print(\"Gamepad found!\");\n' +
        '      break;\n' +
        '    }\n' +
        '    else {\n' +
        '      delay(100);\n' +
        '    }\n' +
        '  } while (1);\n';
    Blockly.Arduino.addSetup(ps2Name, setup_code, true);
    return '';
};

//
Blockly.Arduino["PS2_read"] = function (block) {
    var ps2Name = block.getFieldValue('VAR');
    var ps2Id = Blockly.Arduino.variableDB_.getName(
        ps2Name,
        Blockly.Variables.NAME_TYPE);
    return ps2Id + ".read_gamepad(false, 0);\n";
}

//
Blockly.Arduino["PS2_Button"] = function (block) {
    var ps2Name = block.getFieldValue('VAR');
    var ps2Id = Blockly.Arduino.variableDB_.getName(
        ps2Name,
        Blockly.Variables.NAME_TYPE);
    var bt = this.getFieldValue('psbt');
    var btstate = this.getFieldValue('btstate');
    var code = ps2Id;
    if (btstate === "1") {
        code = code + ".Button(" + bt + ")";
    } else if (btstate === "2") {
        code = code + ".NewButtonState(" + bt + ")";
    } else if (btstate === "3") {
        code = code + ".ButtonReleased(" + bt + ")";
    } else if (btstate === "4") {
        code = code + ".ButtonPressed(" + bt + ")";
    }
    return [code, Blockly.Arduino.ORDER_NONE];
};

//
Blockly.Arduino["PS2_stk"] = function (block) {
    var ps2Name = block.getFieldValue('VAR');
    var ps2Id = Blockly.Arduino.variableDB_.getName(
        ps2Name,
        Blockly.Variables.NAME_TYPE);
    var stk = this.getFieldValue('psstk');
    var code = ps2Id + ".Analog(" + stk + ")";
    return [code, Blockly.Arduino.ORDER_NONE];
};

