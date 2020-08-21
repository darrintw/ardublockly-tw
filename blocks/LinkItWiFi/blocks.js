/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.linkitwifi');

goog.require('Blockly.Arduino');

Blockly.Blocks.linkitwifi.HUE = 35;

Blockly.Blocks.linkitwifi.image = 'img/linkit_7697.png';

Blockly.Blocks['linkit_wifi_wait_until_ready'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkitwifi.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_UNTIL_READY_TITLE);
        this.appendValueInput("SSID")
            .setCheck([Blockly.Types.TEXT.output, Blockly.Types.CHARACTER.output, null])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
        this.appendValueInput("PASSWORD")
            .setCheck([Blockly.Types.TEXT.output,  Blockly.Types.CHARACTER.output, null])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['linkit_wifi_disconnect'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkitwifi.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CATEGORY_LINKIT_WIFI_DISCONNECT);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['linkit_wifi_ready_advanced'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkitwifi.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_READY_TITLE)
        //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkitwifi.image, 64, 43));
        this.appendValueInput("SSID")
            .setCheck(Blockly.Types.TEXT.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
        this.appendValueInput("PASSWORD")
            .setCheck(Blockly.Types.TEXT.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['linkit_wifi_ready'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkitwifi.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_READY_TITLE);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['linkit_wifi'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkitwifi.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_TITLE)
        //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkitwifi.image, 64, 43));
        this.appendValueInput("SSID")
            .setCheck(Blockly.Types.TEXT.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
        this.appendValueInput("PASSWORD")
            .setCheck(Blockly.Types.TEXT.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['linkit_wifi_ignore_result'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkitwifi.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_TITLE)
        //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkitwifi.image, 64, 43));
        this.appendValueInput("SSID")
            .setCheck(Blockly.Types.TEXT.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
        this.appendValueInput("PASSWORD")
            .setCheck(Blockly.Types.TEXT.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['linkit_wifi_status'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkitwifi.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_SET_WIFI_STATUS_NO_SHIELD, "WL_NO_SHIELD"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_IDLE, "WL_IDLE_STATUS"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_NO_SSID_AVAIL, "WL_NO_SSID_AVAIL"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_SCAN_COMPLETED, "WL_SCAN_COMPLETED"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECTED, "WL_CONNECTED"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECT_FAILED, "WL_CONNECT_FAILED"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECTION_LOST, "WL_CONNECTION_LOST"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_DISCONNECTED, "WL_DISCONNECTED"]]), 'String');
        this.setOutput(true, 'String');
        this.setTooltip("");
    }
};
