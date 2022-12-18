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

Blockly.Blocks['I2C_SCAN'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_SCAN);
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_I2C_HELP);
        this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/wire/");
    }
};

//QMC5883L
Blockly.Blocks['I2C_QMC5883L_SETUP'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MSG1)
            .appendField(new Blockly.FieldTextInput("0x0D"), "QMC5883L_ADDR")
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MSG2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2C_QMC5883L_SETUP_TIP);
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

// Start read QMC5883L
Blockly.Blocks["I2C_QMC5883L_READ"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L + Blockly.Msg.ARD_I2C_QMC5883L_START_READ);
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

//
Blockly.Blocks["I2C_QMC5883L_FUN"] = {
    init: function () {
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        var QMC5883L_FUN = [
            [Blockly.Msg.ARD_I2C_QMC5883L_X, "X"],
            [Blockly.Msg.ARD_I2C_QMC5883L_Y, "Y"],
            [Blockly.Msg.ARD_I2C_QMC5883L_Z, "Z"]
        ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L + Blockly.Msg.ARD_I2C_QMC5883L_GET)
            .appendField(new Blockly.FieldDropdown(QMC5883L_FUN), "FUN");
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ARD_I2C_QMC5883L_XYZ_TIP);
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

Blockly.Blocks["I2C_QMC5883L_AZIUMTH"] = {
    init: function () {
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L + Blockly.Msg.ARD_I2C_QMC5883L_GET + Blockly.Msg.ARD_I2C_QMC5883L_AZIUMTH);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ARD_I2C_QMC5883L_AZIUMTH_TIP);
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

Blockly.Blocks["I2C_QMC5883L_BEARING"] = {
    init: function () {
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.appendValueInput("AZIMUTH")
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L + Blockly.Msg.ARD_I2C_QMC5883L_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_GET + Blockly.Msg.ARD_I2C_QMC5883L_BEARING);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ARD_I2C_QMC5883L_BEARING_TIP);
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

Blockly.Blocks["I2C_QMC5883L_DIRECTION"] = {
    init: function () {
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L);
        this.appendValueInput("AZIMUTH")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_FROM);
        this.appendValueInput("ARRAY")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_GET + Blockly.Msg.ARD_I2C_QMC5883L_DIRECTION + Blockly.Msg.ARD_I2C_QMC5883L_ARRAY);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_I2C_QMC5883L_DIRECTION_TIP);
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

Blockly.Blocks["I2C_QMC5883L_SMOOTHING"] = {
    init: function () {
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L + Blockly.Msg.ARD_I2C_QMC5883L_SET + Blockly.Msg.ARD_I2C_QMC5883L_SMOOTHING)
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_STEPS)
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"],
                ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]]), 'STEPS');
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_ADVANCED)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LOGIC_BOOLEAN_TRUE, "TRUE"],
                [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "FALSE"]]), 'ADVANCED');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_I2C_QMC5883L_SMOOTHING_TIP);
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

Blockly.Blocks['I2C_QMC5883L_SETUP_MODE'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MODE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_CONTROL)
            .appendField(new Blockly.FieldDropdown([["0x00", "0x00"], ["0x01", "0x01"]]), "MODE");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_DATA_RATE)
            .appendField(new Blockly.FieldDropdown([["10Hz", "0x00"], ["50Hz", "0x04"], ["100Hz", "0x08"], ["200Hz", "0x0C"]]), "ODR");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_FULL_SCALE)
            .appendField(new Blockly.FieldDropdown([["2G", "0x00"], ["8G", "0x10"]]), "RNG");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L_OVER_SAMPLE_RATIO)
            .appendField(new Blockly.FieldDropdown([["64", "0xC0"], ["128", "0x80"], ["256", "0x40"], ["512", "0x00"]]), "OSR");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.I2CSensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MODE_TIP);
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

//MAX30100
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
        this.setTooltip(Blockly.Msg.ARD_I2C_MAX30100_SETUP_TIP);
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
        this.setTooltip(Blockly.Msg.ARD_I2C_MLX90615_SETUP_TIP);
        this.setHelpUrl("https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615");
    }
};
