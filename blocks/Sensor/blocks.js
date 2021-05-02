/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.sensor');
goog.provide('Blockly.Blocks.ud');
goog.require('Blockly.Blocks');

Blockly.Blocks.sensor.HUE = 120;

Blockly.Blocks.ud.HUE = 230;

Blockly.Blocks['ultrasonic_distance'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage("../blocks/Sensor/img/hcsr04.png", 60, 60, "*"))
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
        this.setColour(Blockly.Blocks.ud.HUE);
        this.setTooltip("");
        this.setHelpUrl("https://www.itead.cc/wiki/Ultrasonic_Ranging_Module_HC-SR04");
    }
};

Blockly.Blocks['tcrt5000'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_TRTC5000_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "ANALOG_PIN")
            .appendField(Blockly.Msg.ARD_TRTC5000_READ);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_TRTC5000_TIP);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['tcrt5000_var'] = {
    init: function () {
        this.appendValueInput("ANALOG_PIN")
            .appendField(Blockly.Msg.ARD_TRTC5000_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_TRTC5000_READ);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_TRTC5000_TIP);
        this.setHelpUrl("");
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
        this.setOutput(true, Blockly.Types.DECIMAL.output);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READTEMP_TIP);
        this.setHelpUrl("http://playground.arduino.cc/Main/DHT11Lib");
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
        this.setOutput(true, Blockly.Types.DECIMAL.output);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READTEMP_TIP);
        this.setHelpUrl("http://playground.arduino.cc/Main/DHT11Lib");
    }
};

Blockly.Blocks['DHT11_readHumi'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_MSG);
        this.setOutput(true, Blockly.Types.DECIMAL.output);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READHUMI_TIP);
        this.setHelpUrl("http://playground.arduino.cc/Main/DHT11Lib");
    }
};

Blockly.Blocks['DHT11_readHumi_var'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DHT11_READHUMI_MSG);
        this.setOutput(true, Blockly.Types.DECIMAL.output);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DHT11_READHUMI_TIP);
        this.setHelpUrl("http://playground.arduino.cc/Main/DHT11Lib");
    }
};

Blockly.Blocks['DS18B20_readTemp'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_MSG);
        this.setOutput(true, Blockly.Types.DECIMAL.output);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DS18B20_READTEMP_TIP);
        this.setHelpUrl("https://create.arduino.cc/projecthub/TheGadgetBoy/ds18b20-digital-temperature-sensor-and-arduino-9cc806");
    }
};

Blockly.Blocks['DS18B20_readTemp_var'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DS18B20_READTEMP_MSG);
        this.setOutput(true, Blockly.Types.DECIMAL.output);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_DS18B20_READTEMP_TIP);
        this.setHelpUrl("https://create.arduino.cc/projecthub/TheGadgetBoy/ds18b20-digital-temperature-sensor-and-arduino-9cc806");
    }
};

Blockly.Blocks['photocells_read'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_FROM)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "DATAPIN")
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_MSG);
        this.setOutput(true, Blockly.Types.DECIMAL.output);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_TIP);
        this.setHelpUrl("https://learn.adafruit.com/photocells/arduino-code");
    }
};

Blockly.Blocks['photocells_read_var'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_MSG);
        this.setOutput(true, Blockly.Types.DECIMAL.output);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_PHOTOCELLS_READTEMP_TIP);
        this.setHelpUrl("https://learn.adafruit.com/photocells/arduino-code");
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
        this.setOutput(true, Blockly.Types.DECIMAL.output);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_LM35_READTEMP_TIP);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lm35_read_var'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("DATAPIN")
            .appendField(Blockly.Msg.ARD_LM35_READTEMP_FROM);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_LM35_READTEMP_MSG);
        this.setOutput(true, Blockly.Types.DECIMAL.output);
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.setTooltip(Blockly.Msg.ARD_LM35_READTEMP_TIP);
        this.setHelpUrl("");
    }
};