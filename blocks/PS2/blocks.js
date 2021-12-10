/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.ps2');

goog.require('Blockly.Blocks');

goog.require('Blockly.Types');

Blockly.Blocks.ps2.HUE = 180;

/* User define block */
Blockly.Blocks['user_block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_USER_MSG);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.user.HUE);
    }
};
//PS2
Blockly.Blocks["PS2_init"] = {
    init: function () {
        this.setColour(Blockly.Blocks.ps2.HUE);
        this.appendDummyInput("")
            .appendTitle("初始化PS2為")
            .appendTitle(new Blockly.FieldDropdown([["Uno", "Uno"], ["Mega2560", "Mega2560"]]), "board");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');

    }
};

//
Blockly.Blocks["PS2_Button"] = {
    init: function () {
        this.setColour(Blockly.Blocks.ps2.HUE);
        var PSBUTTON = [
            ["PSB_GREEN", "4096"],
            ["PSB_RED", "8192"],
            ["PSB_BLUE", "16384"],
            ["PSB_PINK", "32768"],
            ["PSB_L1", "1024"],
            ["PSB_L2", "256"],
            ["PSB_L3", "2"],
            ["PSB_R1", "2048"],
            ["PSB_R2", "512"],
            ["PSB_R3", "4"],
            ["PSB_PAD_UP", "16"],
            ["PSB_PAD_RIGHT", "32"],
            ["PSB_PAD_DOWN", "64"],
            ["PSB_PAD_LEFT", "128"],
            ["PSB_SELECT", "1"],
            ["PSB_START", "8"]
        ];
        this.appendDummyInput("")
            .appendTitle("PS2按钮")
            .appendTitle(new Blockly.FieldDropdown(PSBUTTON), "psbt")
            .appendTitle("狀態")
            .appendTitle(new Blockly.FieldDropdown([["按下", "1"], ["鬆開", "0"]]), "btstate");
        this.setOutput(true, Boolean);
        this.setTooltip('');

    }
};

Blockly.Blocks["PS2_stk"] = {
    init: function () {
        this.setColour(Blockly.Blocks.ps2.HUE);
        var PSSTK = [
            ["PSS_RX", "5"],
            ["PSS_RY", "6"],
            ["PSS_LX", "7"],
            ["PSS_LY", "8"],
        ];
        this.appendDummyInput("")
            .appendTitle("PS2搖桿")
            .appendTitle(new Blockly.FieldDropdown(PSSTK), "psstk")
        this.setOutput(true, Number);
        this.setTooltip('');

    }
};



