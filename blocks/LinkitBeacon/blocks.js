/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.linkit');

goog.require('Blockly.Arduino');

Blockly.Blocks.linkit.HUE = 35;

Blockly.Blocks.linkit.image = 'img/linkit_7697.png';

Blockly.Blocks['linkit_ble_ibeacon'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_IBEACON_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_IBEACON_TITLE)
            .setAlign(Blockly.ALIGN_RIGHT);
        //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
        this.appendValueInput("UUID")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_IBEACON_UUID);
        this.appendValueInput("MAJOR")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_IBEACON_MAJOR);
        this.appendValueInput("MINOR")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_IBEACON_MINOR);
        this.appendValueInput("RSSI")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_IBEACON_RSSI);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_IBEACON_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_eddy'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_EDDY);
        // this.appendDummyInput()
        //   .setAlign(Blockly.ALIGN_RIGHT)
        //   .appendField(new Blockly.FieldDropdown([
        //     [Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HTTP,"http"],
        //     [Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HTTPS,"https"]
        //   ]), "TYPE");
        this.appendValueInput("URL")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_URL);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TOOLTIP);
    }
};
