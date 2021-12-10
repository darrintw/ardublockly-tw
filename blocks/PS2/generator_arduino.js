/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.ps2');

goog.require('Blockly.Arduino');


Blockly.Arduino["PS2_init"] = function () {
    Blockly.Arduino.definitions_['define_PS2'] = '#include <PS2X_lib.h>';
    Blockly.Arduino.definitions_['define_origin'] = 'PS2X ps2x;';
    Blockly.Arduino.setups_['setup_output_1'] = 'ps2x.config_gamepad(11, 10, 13, 12, true, true);';
    return "ps2x.read_gamepad(false, 0);\n delay(30);\n";
};


//readcardnum
Blockly.Arduino["PS2_Button"] = function () {
    var bt = this.getFieldValue('psbt');
    var btstate = this.getFieldValue('btstate');
    if (btstate == "1") {
        var st = "ps2x.Button(" + bt + ")";
    } else {
        var st = "ps2x.ButtonReleased(" + bt + ")";
    }
    return [st];
};

Blockly.Arduino["PS2_stk"] = function () {
    var stk = this.getFieldValue('psstk');
    var st = "ps2x.Analog(" + stk + ")";
    return [st];
};

