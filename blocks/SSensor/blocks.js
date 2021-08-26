/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.ssensor');

goog.require('Blockly.Blocks');

goog.require('Blockly.Types');

Blockly.Blocks.ssensor.HUE = 130;


Blockly.Blocks['hx711_setup'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_HX711_SETUP);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_HX711_DATA)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "DATA_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_HX711_CLK)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "CLK_PIN");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.ssensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};

Blockly.Blocks['hx711_set_scale'] = {
    init: function () {
        this.appendValueInput("HX711_SET_SCALE")
            .appendField(Blockly.Msg.ARD_HX711_SET_SCALE)
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.ssensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};

Blockly.Blocks['hx711_tare'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_HX711_TARE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.ssensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};

Blockly.Blocks['hx711_get_units'] = {
    init: function () {
        this.appendValueInput("HX711_GET_UNITS")
            .appendField(Blockly.Msg.ARD_HX711_GET_UNITS);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.ssensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};

Blockly.Blocks['hx711_power_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_HX711_POWER_DOWN);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.ssensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};

Blockly.Blocks['hx711_power_up'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_HX711_POWER_UP);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.ssensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};