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
            .appendField(Blockly.Msg.ADR_SD_INITIAL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_success'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_INITIAL_SUCCESSED);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_create_dir'] = {
    init: function () {
        this.appendValueInput("DIR_NAME")
            .appendField(Blockly.Msg.ADR_SD_CREATE_DIRECTORY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
                this.setInputsInline(true);
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_delete_dir'] = {
    init: function () {
        this.appendValueInput("DIR_NAME")
            .appendField(Blockly.Msg.ADR_SD_CREATE_DIRECTORY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
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
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
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
                [Blockly.Msg.ADR_SD_FILE_READ_ONLY, "READONLY"],
                [Blockly.Msg.ADR_SD_FILE_OVERWRITE, "OVERWRITE"],
                [Blockly.Msg.ADR_SD_FILE_ADD, "ADD"]
            ]), "DIR_FILE_NAME");
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
                [Blockly.Msg.ADR_SD_FILE_WRITE_LINE, "LINE"],
                [Blockly.Msg.ADR_SD_FILE_WRITE, "APPEND"],
            ]), "TYPE");
        this.appendValueInput("INPUT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_file_read_eof'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE)
            .appendField(new Blockly.FieldVariable("myFile"), "FILE_NAME")
            .appendField(Blockly.Msg.ADR_SD_FILE_EOF);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_file_read_until'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE)
            .appendField(new Blockly.FieldVariable("myFile"), "INPUT")
            .appendField(Blockly.Msg.ADR_SD_FILE_READ_UNTIL);
        this.appendValueInput("CHAR");
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.SDCard.HUE);
    }
};

/*  */
Blockly.Blocks['SD_file_read_line'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADR_SD_FILE)
            .appendField(new Blockly.FieldVariable("myFile"), "FILE_NAME")
            .appendField(Blockly.Msg.ADR_SD_FILE_READ_LINE);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setOutput(true, null);
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