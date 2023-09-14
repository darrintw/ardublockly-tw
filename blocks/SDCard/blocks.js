/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.SDCard');

goog.require('Blockly.Blocks');

Blockly.Blocks.SDCard.HUE = 220;

/*  */
Blockly.Blocks['SD_initial'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_SDCARD)
            .appendField(new Blockly.FieldVariable('sd_card'), "SD_VAR")
            .appendField(Blockly.Msg.ADR_SD_INITIAL);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PIN)
            .appendField(new Blockly.FieldVariable('sd_cs_pin'), "CS_VAR")
            .appendField(Blockly.Msg.ARD_CS_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "CS_PIN");
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_success'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_SDCARD);
        this.appendDummyInput()
            .appendField(Blockly.Msg.TEXT_APPEND_TO + Blockly.Msg.ARD_CS_PIN)
            .appendField(new Blockly.FieldVariable('sd_cs_pin'), "CS_VAR");
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_INITIAL_SUCCESSED);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_exists'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_SDCARD)
            .appendField(new Blockly.FieldVariable('sd_card'), "SD_VAR");
        this.appendDummyInput()
            .appendField(Blockly.Msg.TEXT_APPEND_TO + Blockly.Msg.ARD_CS_PIN)
            .appendField(new Blockly.FieldVariable('sd_cs_pin'), "CS_VAR");
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_CARD + Blockly.Msg.ADR_SD_EXISTS);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_read_type'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_SDCARD)
            .appendField(new Blockly.FieldVariable('sd_card'), "SD_VAR")
            .appendField(Blockly.Msg.ADR_SD_TYPE);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, "String");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_type'] = {
    init: function () {
        var TYPE = [
            ["SD1", "SD_CARD_TYPE_SD1"],
            ["SD2", "SD_CARD_TYPE_SD2"],
            ["SDHC/SDXC", "SD_CARD_TYPE_SDHC"]
        ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_CARD + Blockly.Msg.ADR_SD_TYPE)
            .appendField(new Blockly.FieldDropdown(TYPE), "TYPE");
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, "String");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_dir_create'] = {
    init: function () {
        this.appendValueInput("DIR_NAME")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_SDCARD)
            .appendField(Blockly.Msg.ADR_SD_DIRECTORY_CREATE);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_dir_delete'] = {
    init: function () {
        this.appendValueInput("DIR_NAME")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_SDCARD)
            .appendField(Blockly.Msg.ADR_SD_DIRECTORY_DELETE);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_remove'] = {
    init: function () {
        this.appendValueInput("FILE_NAME")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_SDCARD)
            .appendField(Blockly.Msg.ADR_SD_FILE_DELETE);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_dir_file_exist'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE);
        this.appendValueInput("DIR_FILE_NAME");
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_EXISTS);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_file_var'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_DECLARE_FILE_NAME)
            .appendField(new Blockly.FieldVariable("myFile"), "FILE_NAME");
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_file_open'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE)
            .appendField(new Blockly.FieldVariable("myFile"), "FILE_NAME");
        this.appendValueInput("DIR_FILE_NAME")
            .appendField(Blockly.Msg.ADR_SD_FILE_OPEN);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE_MODE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.ADR_SD_FILE_READ, "FILE_READ"],
                [Blockly.Msg.ADR_SD_FILE_WRITE, "FILE_WRITE"]
            ]), "TYPE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_file_opened'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE)
            .appendField(new Blockly.FieldVariable("myFile"), "FILE_NAME")
            .appendField(Blockly.Msg.ADR_SD_FILE_OPENED)
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_file_write'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE)
            .appendField(new Blockly.FieldVariable("myFile"), "FILE_NAME")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.ADR_SD_FILE_WRITE_LINE, "ln"],
                [Blockly.Msg.ADR_SD_FILE_APPEND, ""],
            ]), "TYPE");
        this.appendValueInput("INPUT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_file_available'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE)
            .appendField(new Blockly.FieldVariable("myFile"), "FILE_NAME")
            .appendField(Blockly.Msg.ADR_SD_FILE_AVAILABLE);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_file_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE)
            .appendField(new Blockly.FieldVariable("myFile"), "FILE_NAME")
            .appendField(Blockly.Msg.ADR_SD_FILE_READ);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_file_close'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE)
            .appendField(new Blockly.FieldVariable("myFile"), "FILE_NAME")
            .appendField(Blockly.Msg.ADR_SD_FILE_CLOSE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};
