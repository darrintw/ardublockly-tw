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
            .setCheck(Blockly.Types.TEXT.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
        this.appendValueInput("PASSWORD")
            .setCheck(Blockly.Types.TEXT.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['linkit_wifi_disconnect'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkitwifi.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CATEGORY_LINKIT_WIFI_DISCONNECT);
        this.setPreviousStatement(true, Blockly.Types.TEXT.output);
        this.setNextStatement(true, Blockly.Types.TEXT.output);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};

Blockly.Blocks['linkit_wifi_getip'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
        this.setColour(Blockly.Blocks.linkitwifi.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CATEGORY_LINKIT_WIFI_GETIP);
        this.setOutput(true, Blockly.Types.TEXT.output);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
    }
};