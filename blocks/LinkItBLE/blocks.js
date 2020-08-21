/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.linkitble');

goog.require('Blockly.Arduino');

Blockly.Blocks.linkitble.HUE = 35;

Blockly.Blocks.linkitble.image = 'img/linkit_7697.png';

Blockly.Blocks['linkit_ble_periphral'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TITLE)
        //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkitble.image, 64, 43));
        this.appendValueInput("NAME")
            .setCheck(Blockly.Types.TEXT.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_NAME);
        this.appendValueInput("SERVICE")
            .setCheck(Blockly.Types.TEXT.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SERVICE);
        this.appendStatementInput("BLE_CONTENT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_get_address'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_GET_ADDRESS_TITLE);
        this.setOutput(true, 'String');
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_Characteristic'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC);
        this.appendValueInput("CHARACTERISTIC")
            .setCheck(Blockly.Types.TEXT.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SEC);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TYPE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VARIABLES_TYPE_NUMBER, "LBLECharacteristicInt"], [Blockly.Msg.VARIABLES_TYPE_STRING, "LBLECharacteristicString"]]), 'CHARACTERISTIC_TYPE');
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_LBLE_ATTRIBUTE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_SET_LBLE_READ_WRITE, "LBLE_READ | LBLE_WRITE"], [Blockly.Msg.LINKIT_SET_LBLE_READ, "LBLE_READ"], [Blockly.Msg.LINKIT_SET_LBLE_WRITE, "LBLE_WRITE"]]), 'TYPE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_periphral_is_written'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.appendValueInput("CHARACTERISTIC")
            .setCheck(Blockly.Types.TEXT.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN_TAIL);
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_periphral_get_value'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.appendValueInput("CHARACTERISTIC")
            .setCheck(Blockly.Types.TEXT.output)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE_TAIL);
        this.setInputsInline(true);
        this.setOutput(true, ["Number", "String"]);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_periphral_write'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_WRITE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.VARIABLES_TYPE_NUMBER, "int"],
                [Blockly.Msg.VARIABLES_TYPE_STRING, "String"]
            ]), "TYPE");
        this.appendValueInput("CHARACTERISTIC")
            .setCheck(Blockly.Types.TEXT.output)
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN);
        this.appendValueInput("VALUE")
            .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE_TAIL);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_central_get_peripheral_with_index'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.interpolate_(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_GET_PERIPHERAL_WITH_INDEX,
            ['INDEX', 'Number', Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
        this.setOutput(true, 'String');
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_central_scan_count'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_COUNT);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_central_scan'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_wait_until_ready'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_UNTIL_READY_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP);
    }
};

Blockly.Blocks['linkit_ble_ready'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);
        this.setColour(Blockly.Blocks.linkitble.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINKIT_SET_BLE_READY_TITLE);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP);
    }
};