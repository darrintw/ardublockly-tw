/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.PS2');

goog.require('Blockly.Blocks');

Blockly.Blocks.PS2.HUE = 180;

//PS2
Blockly.Blocks["PS2_init"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_SETUP)
            .appendField(new Blockly.FieldVariable('ps2x'), 'VAR');
        this.appendValueInput("CLOCK")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_PIN1);
        this.appendValueInput("ATTENTION")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_PIN2);
        this.appendValueInput("COMMAND")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_PIN3);
        this.appendValueInput("DATA")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_PIN4);
        this.setColour(Blockly.Blocks.PS2.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

// Start read PS2
Blockly.Blocks["PS2_read"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PS2)
            .appendField(new Blockly.FieldVariable('ps2x'), 'VAR')
            .appendField(Blockly.Msg.ARD_PS2_START_READ);
        this.setColour(Blockly.Blocks.PS2.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

/*
var button_status = [[Blockly.Msg.ARD_PS2_BUTTON, "1"],
                    [Blockly.Msg.ARD_PS2_BUTTON_PRESSED, "2"],
                    [Blockly.Msg.ARD_PS2_BUTTON_RELEASED, "3"],
                    [Blockly.Msg.ARD_PS2_NEW_BUTTON_STATUS, "4"]];
*/
var button_status = [[Blockly.Msg.ARD_PS2_BUTTON_PRESSED, "4"]];

//
Blockly.Blocks["PS2_Button"] = {
    init: function () {
        var PSBUTTON = [
            ["Select", "PSB_SELECT"],
            ["Start", "PSB_START"],
            [Blockly.Msg.ARD_PS2_GREEN, "PSB_GREEN"],
            [Blockly.Msg.ARD_PS2_RED, "PSB_RED"],
            [Blockly.Msg.ARD_PS2_BLUE, "PSB_BLUE"],
            [Blockly.Msg.ARD_PS2_PINK, "PSB_PINK"],
            [Blockly.Msg.ARD_PS2_TRIANGLE, "PSB_TRIANGLE"],
            [Blockly.Msg.ARD_PS2_CIRCLE, "PSB_CIRCLE"],
            [Blockly.Msg.ARD_PS2_CROSS, "PSB_CROSS"],
            [Blockly.Msg.ARD_PS2_SQUARE, "PSB_SQUARE"],
            ["L1", "PSB_L1"],
            ["L2", "PSB_L2"],
            ["L3", "PSB_L3"],
            ["R1", "PSB_R1"],
            ["R2", "PSB_R2"],
            ["R3", "PSB_R3"],
            [Blockly.Msg.ARD_PS2_LEFT, "PSB_PAD_LEFT"],
            [Blockly.Msg.ARD_PS2_RIGHT, "PSB_PAD_RIGHT"],
            [Blockly.Msg.ARD_PS2_UP, "PSB_PAD_UP"],
            [Blockly.Msg.ARD_PS2_DOWN, "PSB_PAD_DOWN"]
        ];
        this.setColour(Blockly.Blocks.PS2.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PS2)
            .appendField(new Blockly.FieldVariable('ps2x'), 'VAR')
            .appendField(Blockly.Msg.ARD_PS2_BUT)
            .appendField(new Blockly.FieldDropdown(PSBUTTON), "psbt")
            .appendField(Blockly.Msg.ARD_PS2_STATUS)
            .appendField(new Blockly.FieldDropdown(button_status), "btstate");
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};

Blockly.Blocks["PS2_stk"] = {
    init: function () {
        this.setColour(Blockly.Blocks.PS2.HUE);
        var PSSTK = [
            [Blockly.Msg.ARD_PS2_PSS_LX, "PSS_LX"],
            [Blockly.Msg.ARD_PS2_PSS_LY, "PSS_LY"],
            [Blockly.Msg.ARD_PS2_PSS_RX, "PSS_RX"],
            [Blockly.Msg.ARD_PS2_PSS_RY, "PSS_RY"]
        ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PS2)
            .appendField(new Blockly.FieldVariable('ps2x'), 'VAR')
            .appendField(Blockly.Msg.ARD_PS2_READ)
            .appendField(new Blockly.FieldDropdown(PSSTK), "psstk")
        this.setOutput(true, "Number");
        this.setTooltip('');
    }
};



