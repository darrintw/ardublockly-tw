/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.sensors');

goog.require('Blockly.Blocks');

goog.require('Blockly.Types');

Blockly.Blocks.sensors.HUE = 120;

Blockly.Blocks['ultrasonic_distance'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_ULTRASONIC_DISTANCE_SETUP);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TRIG)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "TRIG_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_ULTRASONIC_DISTANCE_ECHO)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "ECHO_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_ULTRASONIC_DISTANCE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARD_ULTRASONIC_DISTANCE_CM, "cm"],
            [Blockly.Msg.ARD_ULTRASONIC_DISTANCE_INCH, "inch"]]),
                "DISTANCE_UNIT");
        this.setOutput(true, "Number");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip("");
        this.setHelpUrl("https://www.itead.cc/wiki/Ultrasonic_Ranging_Module_HC-SR04");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['tcrt5000'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_TRTC5000_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "ANALOG_PIN")
            .appendField(Blockly.Msg.ARD_TRTC5000_READ);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_TRTC5000_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['tcrt5000_var'] = {
    init: function () {
        this.appendValueInput("ANALOG_PIN")
            .appendField(Blockly.Msg.ARD_TRTC5000_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_TRTC5000_READ);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_TRTC5000_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['logic_nan'] = {
    /**
     * Block for boolean data type: true and false.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("VALUE")
            .appendField(Blockly.Msg.ARD_ISNAN_TITLE);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_ISNAN_TOOLTIP);
    },
    /** Assigns a type to the boolean block. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['DHT11_readTemp'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DHT11_READTEMP_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_DHT11_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READTEMP_TIP);
        this.setHelpUrl("https://playground.arduino.cc/Main/DHT11Lib");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['DHT11_readTemp_var'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_DHT11_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DHT11_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READTEMP_TIP);
        this.setHelpUrl("https://playground.arduino.cc/Main/DHT11Lib");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['DHT11_readHumi'] = {
    /**
     * Block for DHT11 read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READHUMI_TIP);
        this.setHelpUrl("https://playground.arduino.cc/Main/DHT11Lib");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['DHT11_readHumi_var'] = {
    /**
     * Block for DHT11 read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READHUMI_TIP);
        this.setHelpUrl("https://playground.arduino.cc/Main/DHT11Lib");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['DS18B20_readTemp'] = {
    /**
     * Block for DS18B20 read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_DS18B20_READTEMP_TIP);
        this.setHelpUrl("https://create.arduino.cc/projecthub/TheGadgetBoy/ds18b20-digital-temperature-sensor-and-arduino-9cc806");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['DS18B20_readTemp_var'] = {
    /**
     * Block for DS18B20 read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_DS18B20_READTEMP_TIP);
        this.setHelpUrl("https://create.arduino.cc/projecthub/TheGadgetBoy/ds18b20-digital-temperature-sensor-and-arduino-9cc806");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['photocells_read'] = {
    /**
     * Block for photocells read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_TIP);
        this.setHelpUrl("https://learn.adafruit.com/photocells/arduino-code");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['photocells_read_var'] = {
    /**
     * Block for photocells read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_TIP);
        this.setHelpUrl("https://learn.adafruit.com/photocells/arduino-code");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['lm35_read'] = {
    /**
     * Block for LM35 read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_LM35_READTEMP_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_LM35_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_LM35_READTEMP_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['lm35_read_var'] = {
    /**
     * Block for LM35 read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_LM35_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_LM35_READTEMP_MSG);
        this.setOutput(true, "Decimal");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_LM35_READTEMP_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.DECIMAL;
    }
};

Blockly.Blocks['irrecv_setup'] = {
    /**
     * Block for IR Reciver setup analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_SETUP)
            .appendField(
                new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_SETUP_TIP);
        this.setHelpUrl('');
    },
};

Blockly.Blocks['irrecv_setup_var'] = {
    /**
     * Block for IR Reciver setup analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_SETUP);
        this.appendValueInput("DATAPIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_SETUP_TIP);
        this.setHelpUrl(Blockly.Msg.ARD_IRRECV_SETUP_TIP);
    },
};

Blockly.Blocks['irrecv_available'] = {
    /**
     * Block for IR Reciver read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_IR)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['irrecv_available_var'] = {
    /**
     * Block for IR Reciver read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_IR);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['irrecv_read'] = {
    /**
     * Block for IR Reciver read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_READ_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_READ_MSG);
        this.setOutput(true, 'Large Number');
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_READ_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.LARGE_NUMBER;
    }
};

Blockly.Blocks['irrecv_read_var'] = {
    /**
     * Block for IR Reciver read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_READ_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_READ_MSG);
        this.setOutput(true, 'Large Number');
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_READ_TIP);
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.LARGE_NUMBER;
    }
};

Blockly.Blocks['irrecv_resume'] = {
    /**
     * Block for IR Reciver read from analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_RESUME_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_RESUME_MSG);
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_RESUME_TIP);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['irrecv_resume_var'] = {
    /**
     * Block for IR Reciver read from variable analog pin.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_IRRECV_RESUME_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_IRRECV_RESUME_MSG);
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_IRRECV_RESUME_TIP);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['hx711_setup'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_HX711_SETUP);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_HX711_DATA)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "DATA_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_HX711_CLK)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "CLK_PIN");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};

Blockly.Blocks['hx711_set_scale'] = {
    init: function () {
        this.appendValueInput("HX711_SET_SCALE")
            .appendField(Blockly.Msg.ARD_HX711_SET_SCALE)
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};

Blockly.Blocks['hx711_tare'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_HX711_TARE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};

Blockly.Blocks['hx711_get_units'] = {
    init: function () {
        this.appendValueInput("HX711_GET_UNITS")
            .appendField(Blockly.Msg.ARD_HX711_GET_UNITS);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_HX711_GET_UNITS_AVERAGE);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};

Blockly.Blocks['hx711_power_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_HX711_POWER_DOWN);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
    }
};

Blockly.Blocks['hx711_power_up'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_HX711_POWER_UP);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_HX711_TIP);
        this.setHelpUrl();
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
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2C_QMC5883L_SETUP_TIP);
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

// Start read QMC5883L
Blockly.Blocks["I2C_QMC5883L_READ"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L + Blockly.Msg.ARD_I2C_QMC5883L_START_READ);
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

//
Blockly.Blocks["I2C_QMC5883L_FUN"] = {
    init: function () {
        this.setColour(Blockly.Blocks.sensors.HUE);
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
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_QMC5883L + Blockly.Msg.ARD_I2C_QMC5883L_GET + Blockly.Msg.ARD_I2C_QMC5883L_AZIUMTH);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ARD_I2C_QMC5883L_AZIUMTH_TIP);
        this.setHelpUrl("https://github.com/mprograms/QMC5883LCompass");
    }
};

Blockly.Blocks["I2C_QMC5883L_BEARING"] = {
    init: function () {
        this.setColour(Blockly.Blocks.sensors.HUE);
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
        this.setColour(Blockly.Blocks.sensors.HUE);
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
        this.setColour(Blockly.Blocks.sensors.HUE);
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
        this.setColour(Blockly.Blocks.sensors.HUE);
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
        this.setColour(Blockly.Blocks.sensors.HUE);
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
        this.setColour(Blockly.Blocks.sensors.HUE);
        this.setTooltip(Blockly.Msg.ARD_I2C_MLX90615_SETUP_TIP);
        this.setHelpUrl("https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615");
    }
};
