/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.linkitmcs');

goog.require('Blockly.Arduino');

Blockly.Blocks.linkitmcs.HUE = 35;

Blockly.Blocks.linkitmcs.image = 'img/linkit_7697.png';

Blockly.Blocks['mcs'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkitmcs.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_MCS_WIFI)
        this.appendValueInput("DEVICEID")
            .setCheck(Blockly.Types.TEXT.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_MCS_DEVICEID);
        this.appendValueInput("DEVICEKEY")
            .setCheck(Blockly.Types.TEXT.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_MCS_DEVICEKEY);
        this.appendStatementInput("CONTENT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    }
};

Blockly.Blocks['mcslite'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkitmcs.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_WIFI)
    this.appendValueInput("DEVICEIDL")
      .setCheck(Blockly.Types.TEXT.output)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_DEVICEID);
    this.appendValueInput("DEVICEKEYL")
      .setCheck(Blockly.Types.TEXT.output)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_DEVICEKEY);
    this.appendValueInput("SERV")
      .setCheck(Blockly.Types.TEXT.output)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_SERV);
    this.appendValueInput("PORT")
      .setCheck(Blockly.Types.NUMBER.output)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_PORT);
    this.appendStatementInput("CONTENT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};

Blockly.Blocks['mcs_set_control_channel'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkitmcs.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TITLE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.VARIABLES_TYPE_ONOFF, "boolean"],
                [Blockly.Msg.VARIABLES_TYPE_CATEGORY, "category"],
                [Blockly.Msg.VARIABLES_TYPE_NUMBER, "int"],
                [Blockly.Msg.VARIABLES_TYPE_FLOAT, "float"],
                [Blockly.Msg.VARIABLES_TYPE_STRING, "String"]
            ]), "TYPE")
            .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TAIL);
        this.appendValueInput("CONTROL_CHANNEL")
            .setCheck(Blockly.Types.TEXT.output);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    }
};

Blockly.Blocks['mcs_set_display_channel'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkitmcs.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TITLE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.VARIABLES_TYPE_ONOFF, "boolean"],
                [Blockly.Msg.VARIABLES_TYPE_CATEGORY, "category"],
                [Blockly.Msg.VARIABLES_TYPE_NUMBER, "int"],
                [Blockly.Msg.VARIABLES_TYPE_FLOAT, "float"],
                [Blockly.Msg.VARIABLES_TYPE_STRING, "String"]
            ]), "TYPE")
            .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL2_TAIL);
        this.appendValueInput("DISPLAY_CHANNEL")
            .setCheck(Blockly.Types.TEXT.output);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    }
};

Blockly.Blocks['mcs_process'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkitmcs.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_MCS_PROCESS_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    }
};

Blockly.Blocks['mcs_channel_value'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkitmcs.HUE);
        this.appendValueInput("CHANNEL_VALUE")
            .appendField(Blockly.Msg.LINKIT_CHECK_MCS_LED_VALUE_TITLE)
            .setCheck(Blockly.Types.TEXT.output);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_CHECK_MCS_LED_VALUE_TAIL);
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['mcs_channel2_value'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkitmcs.HUE);
        this.appendValueInput("CHANNEL2_VALUE")
            .appendField(Blockly.Msg.LINKIT_CHECK_MCS_REMOTE_VALUE_TITLE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Blockly.Types.TEXT.output);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_CHECK_MCS_REMOTE_VALUE_TAIL);
        this.appendValueInput("SET_VALUE");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['mcs_channel_updated'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
        this.setColour(Blockly.Blocks.linkitmcs.HUE);
        this.appendValueInput("CHANNEL_UPDATED")
            .setCheck(Blockly.Types.TEXT.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.CATEGORY_LINKIT_MCS);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_MCS_LED_UPDATED);
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
    }
};