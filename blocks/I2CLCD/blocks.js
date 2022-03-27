/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.I2CLCD');

goog.require('Blockly.Blocks');

Blockly.Blocks.I2CLCD.HUE = 180;

Blockly.Blocks['I2CLCD_scan'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_SCAN);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['I2CLCD_setup'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_SETUP_MSG1)
            .appendField(new Blockly.FieldTextInput("0x27"), "I2C_ADDR")
            .appendField(new Blockly.FieldDropdown([["16", "16"], ["20", "20"]]), "COL")
            .appendField("x")
            .appendField(new Blockly.FieldDropdown([["2", "2"], ["4", "4"]]), "ROW")
            .appendField(Blockly.Msg.ARD_I2CLCD_SETUP_MSG2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_SETUP_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

/*
Blockly.Blocks['I2CLCD_printLine'] = {
    /!**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     *!/
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG1)
            .appendField(new Blockly.FieldDropdown([["1", "0"], ["2", "1"]]), "ROW")
            .appendField(Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG2);
        this.appendValueInput("CONTENT")
            .appendField(Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG3)
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_PRINTLINE_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};
*/

Blockly.Blocks['I2CLCD_move'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_MOVE_MSG1);
        this.appendValueInput("X")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_MOVE_MSG2);
        this.appendValueInput("Y")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_MOVE_MSG3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_MOVE_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

Blockly.Blocks['I2CLCD_clear'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_CLEAR_MSG);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_CLEAR_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

Blockly.Blocks['I2CLCD_clear_y'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_CLEAR);
        this.appendValueInput("Y")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_CLEAR_ROW);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_CLEAR_ROW_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

Blockly.Blocks['I2CLCD_print'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("CONTENT")
            .setCheck(null)
            .appendField(Blockly.Msg.ARD_I2CLCD_PRINT_MSG1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_PRINT_MSG2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_PRINT_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

Blockly.Blocks['I2CLCD_createChar'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("CONTENT")
            .setCheck(null)
            .appendField(Blockly.Msg.ARD_I2CLCD_CREATE_CHAR_MSG1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_CREATE_CHAR_MSG2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_CREATE_CHAR_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

var lcd_img_list = [
    ["↑", "040e150404040404"],
    ["↓", "0404040404150e04"],
    ["←", "0004081f1f080400"],
    ["→", "0004021f1f020400"],
    ["°c", "1818070808080807"]
];

//點陣LED預設圖案
Blockly.Blocks["I2CLCD_img"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_IMG)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(lcd_img_list), "img_");
        this.setOutput(true);
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_PREDEFARR_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['I2CLCD_backlightOn'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_MSG);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

Blockly.Blocks['I2CLCD_backlightOff'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_MSG);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_TIP);
        this.setHelpUrl("https://github.com/marcmerlin/NewLiquidCrystal");
    }
};

Blockly.Blocks['I2CLCD_multi_tone'] = {
    /**
     * Block for
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CLCD_SHOW_TONE);
        this.appendValueInput("NOTE_TONE")
            .setCheck(Blockly.Types.STRING.checkList)
            .appendField(Blockly.Msg.ARD_NOTE + " " + Blockly.Msg.ARD_TONE);
        this.appendValueInput("TEMPO")
            .setCheck(Blockly.Types.STRING.checkList)
            .appendField(Blockly.Msg.ARD_TEMPO);
        this.setPreviousStatement(true, ['io_single_tone', 'io_multi_tone']);
        this.setNextStatement(true, ['io_single_tone', 'io_multi_tone']);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_TONE_TIP);
        this.setHelpUrl('buzzer-piano/index.html');
    }
};
