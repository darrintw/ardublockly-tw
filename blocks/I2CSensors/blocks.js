/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.I2CSensors');

goog.require('Blockly.Blocks');

Blockly.Blocks.I2CSensors.HUE = 120;

Blockly.Blocks['I2C_scan'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_SCAN);
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['I2C_QMC5883L_setup'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MSG1)
            .appendField(new Blockly.FieldTextInput("0x27"), "I2C_ADDR")
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MSG2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_SETUP_TIP);
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

Blockly.Blocks['I2C_MAX30100_setup'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_MAX30100_SETUP_MSG1)
            .appendField(new Blockly.FieldTextInput("0x27"), "I2C_ADDR")
            .appendField(Blockly.Msg.ARD_I2C_MAX30100_SETUP_MSG2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_SETUP_TIP);
        this.setHelpUrl("https://github.com/kontakt/MAX30100");
    }
};

Blockly.Blocks['I2C_MLX90615_setup'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_MLX90615_SETUP_MSG1)
            .appendField(new Blockly.FieldTextInput("0x27"), "I2C_ADDR")
            .appendField(Blockly.Msg.ARD_I2C_MLX90615_SETUP_MSG2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2CLCD_SETUP_TIP);
        this.setHelpUrl("https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615");
    }
};
