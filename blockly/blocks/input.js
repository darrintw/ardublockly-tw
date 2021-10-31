/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     https://arduino.cc/en/Reference/HomePage
 *
 * TODO: maybe change this to a "PIN" BlocklyType
 */
'use strict';

goog.provide('Blockly.Blocks.input');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.input.HUE = 250;

Blockly.Blocks['io_input'] = {
    /**
     * Block for creating a 'read Pin'.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://arduino.cc/en/Reference/DigitalRead');
        this.setColour(Blockly.Blocks.input.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DIGITAL)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'PIN')
            .appendField(Blockly.Msg.ARD_SET_INPUT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SET_INPUT_TIP);
    },
    /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'PIN', 'digitalPins');
    }
};

Blockly.Blocks['io_input_var'] = {
    /**
     * Block for creating a 'read Pin'.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendValueInput('PIN')
            .appendField(Blockly.Msg.ARD_DIGITAL);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SET_INPUT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SET_INPUT_TIP);
        this.setHelpUrl('https://arduino.cc/en/Reference/DigitalRead');
        this.setColour(Blockly.Blocks.input.HUE);
    }
};

Blockly.Blocks['io_input_pullup'] = {
    /**
     * Block for creating a 'read Pin'.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendValueInput('PIN')
            .appendField(Blockly.Msg.ARD_DIGITAL);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_INPUT_PULLUP);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_INPUT_PULLUP_TIP);
        this.setHelpUrl('https://www.arduino.cc/reference/en/language/variables/constants/constants/');
        this.setColour(Blockly.Blocks.input.HUE);
    }
};

Blockly.Blocks['io_digitalread'] = {
    /**
     * Block for creating a 'read Pin'.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://arduino.cc/en/Reference/DigitalRead');
        this.setColour(Blockly.Blocks.input.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_DIGITALREAD)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'PIN');
        this.setOutput(true, Blockly.Types.BOOLEAN.output);
        this.setTooltip(Blockly.Msg.ARD_DIGITALREAD_TIP);
    },
    /** @return {!string} The type of return value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    },
    /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'PIN', 'digitalPins');
    }
};

Blockly.Blocks['io_digitalread_var'] = {
    /**
     * Block for creating a 'read Pin'.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_DIGITALREAD_MSG,
            "args0": [
                {
                    "type": "input_value",
                    "name": "PIN",
                    "check": "Number"
                }
            ],
            "output": Blockly.Types.BOOLEAN.output,
            "colour": Blockly.Blocks.input.HUE,
            "tooltip": Blockly.Msg.ARD_DIGITALREAD_TIP,
            "helpUrl": 'https://arduino.cc/en/Reference/DigitalRead'
        });
    },
    /** @return {!string} The type of return value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['io_analogread'] = {
    /**
     * Block for reading an analogue input.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://arduino.cc/en/Reference/AnalogRead');
        this.setColour(Blockly.Blocks.input.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_ANALOGREAD)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.analogPins), 'PIN');
        this.setOutput(true, Blockly.Types.NUMBER.output);
        this.setTooltip(Blockly.Msg.ARD_ANALOGREAD_TIP);
    },
    /** @return {!string} The type of return value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    },
    /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
    }
};

Blockly.Blocks['io_analogread_var'] = {
    /**
     * Block for reading an analogue input.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_ANALOGREAD_MSG,
            "args0": [
                {
                    "type": "input_value",
                    "name": "PIN",
                    "check": "Number"
                }
            ],
            "output": Blockly.Types.NUMBER.output,
            "colour": Blockly.Blocks.input.HUE,
            "tooltip": Blockly.Msg.ARD_ANALOGREAD_TIP,
            "helpUrl": 'https://arduino.cc/en/Reference/AnalogRead'
        });
    },
    /** @return {!string} The type of return value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['io_pulsein'] = {
    /**
     * Block for measuring the duration of a pulse in an input Pin.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "type": "math_foo",
            "message0": Blockly.Msg.ARD_PULSE_READ,
            "args0": [{
                "type": "input_value",
                "name": "PULSETYPE",
                "check": Blockly.Types.BOOLEAN.check
            }, {
                "type": "field_dropdown",
                "name": "PULSEPIN",
                "options": Blockly.Arduino.Boards.selected.digitalPins
            }
            ],
            "output": Blockly.Types.NUMBER.output,
            "inputsInline": true,
            "colour": Blockly.Blocks.input.HUE,
            "tooltip": Blockly.Msg.ARD_PULSE_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/PulseIn'
        });
    },
    /** @return {!string} The type of input value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['io_pulsetimeout'] = {
    /**
     * Block for measuring (with a time-out) the duration of a pulse in an input
     * Pin.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "type": "math_foo",
            "message0": Blockly.Msg.ARD_PULSE_READ_TIMEOUT,
            "args0": [{
                "type": "input_value",
                "name": "PULSETYPE",
                "check": Blockly.Types.BOOLEAN.check
            }, {
                "type": "field_dropdown",
                "name": "PULSEPIN",
                "options": Blockly.Arduino.Boards.selected.digitalPins
            }, {
                "type": "input_value",
                "name": "TIMEOUT",
                "check": Blockly.Types.NUMBER.check
            }
            ],
            "output": Blockly.Types.NUMBER.output,
            "inputsInline": true,
            "colour": Blockly.Blocks.input.HUE,
            "tooltip": Blockly.Msg.ARD_PULSETIMEOUT_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/PulseIn'
        });
    },
    /** @return {!string} The type of input value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['io_pulsetimeout_var'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_PULSETIMEOUT_MSG,
            "args0": [
                {
                    "type": "input_value",
                    "name": "PULSETYPE",
                    "check": ["Boolean", "Number"]
                },
                {
                    "type": "input_value",
                    "name": "PIN",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "TIMEOUT",
                    "check": Blockly.Types.NUMBER.output
                },
            ],
            "output": 'Number',
            "inputsInline": true,
            "colour": Blockly.Blocks.input.HUE,
            "tooltip": Blockly.Msg.ARD_PULSETIMEOUT_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/PulseIn'
        });
    },
    /** @return {!string} The type of input value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['io_i2cPins'] = {
    /**
     * Block for creating a 'read Pin'.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('');
        this.setColour(Blockly.Blocks.input.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2CREAD)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.i2cPins.Wire), 'PIN');
        this.setOutput(true, Blockly.Types.BOOLEAN.output);
        this.setTooltip(Blockly.Msg.ARD_I2CREAD_TIP);
    },
    /** @return {!string} The type of return value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    },
    /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'PIN', 'i2cPins.Wire');
    }
};

Blockly.Blocks['io_i2cPins_var'] = {
    /**
     * Block for creating a 'read Pin'.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_I2CREAD_MSG,
            "args0": [
                {
                    "type": "input_value",
                    "name": "PIN",
                    "options": Blockly.Arduino.Boards.selected.i2cPins.Wire
                }
            ],
            "output": Blockly.Types.BOOLEAN.output,
            "colour": Blockly.Blocks.input.HUE,
            "tooltip": Blockly.Msg.ARD_I2CREAD_TIP,
            "helpUrl": ''
        });
    },
    /** @return {!string} The type of return value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};