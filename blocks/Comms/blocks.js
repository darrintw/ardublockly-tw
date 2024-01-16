/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Blocks for the Arduino serial communication functions.
 *     The Arduino built in functions syntax can be found at:
 *     https://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Blocks.comms');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.comms.HUE = 120;

Blockly.Blocks['serial_setup'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://arduino.cc/en/Serial/Begin');
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_SETUP)
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Arduino.Boards.selected.serial), 'SERIAL_ID');
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_SPEED)
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Arduino.Boards.selected.serialSpeed), 'SPEED');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_SETUP_TIP);
    },
    /**
     * Returns the serial instance name.
     * @return {?string} Serial instance name.
     * @this Blockly.Block
     */
    /*
    getSerialSetupInstance: function () {
        return this.getFieldValue('SERIAL_ID');
    },
    */
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SPEED', 'serialSpeed');
    }
};

Blockly.Blocks['serial_available'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SERIAL_AVAILABLE_MSG,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "SERIAL_ID",
                    "options": Blockly.Arduino.Boards.selected.serial
                }
            ],
            "output": Blockly.Types.BOOLEAN.output,
            "colour": Blockly.Blocks.comms.HUE,
            "tooltip": Blockly.Msg.ARD_SERIAL_AVAILABLE_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    },
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};

Blockly.Blocks['serial_read_string'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SERIAL_READ_STRING_MSG,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "SERIAL_ID",
                    "options": Blockly.Arduino.Boards.selected.serial
                }
            ],
            "output": Blockly.Types.STRING.output,
            "colour": Blockly.Blocks.comms.HUE,
            "tooltip": Blockly.Msg.ARD_SERIAL_READ_STRING_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType:
        function () {
            return Blockly.Types.STRING;
        },
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};


Blockly.Blocks['serial_read_char'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SERIAL_READ_CHAR_MSG,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "SERIAL_ID",
                    "options": Blockly.Arduino.Boards.selected.serial
                }
            ],
            "output": Blockly.Types.STRING.output,
            "colour": Blockly.Blocks.comms.HUE,
            "tooltip": Blockly.Msg.ARD_SERIAL_READ_CHAR_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType:
        function () {
            return Blockly.Types.CHARACTER;
        },
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};


Blockly.Blocks['serial_print'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://www.arduino.cc/en/Serial/Print');
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.serial), 'SERIAL_ID')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT);
        this.appendValueInput('CONTENT');
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_TIP);
    },
    /**
     * Called whenever anything on the workspace changes.
     * It checks the instances of serial_setup and attaches a warning to this
     * block if not valid data is found.
     * @this Blockly.Block
     */
    /*
    onchange: function (event) {
        if (!this.workspace || event.type === Blockly.Events.MOVE ||
            event.type === Blockly.Events.UI) {
            return;  // Block deleted or irrelevant event
        }

        // Get the Serial instance from this block
        var thisInstanceName = this.getFieldValue('SERIAL_ID');
        console.log(thisInstanceName);
        // Iterate through top level blocks to find setup instance for the serial id
        var blocks = Blockly.mainWorkspace.getTopBlocks();
        var setupInstancePresent = false;
        for (var x = 0; x < blocks.length; x++) {
            var func = blocks[x].getSerialSetupInstance;
            console.log(func);
            if (func) {
                var setupBlockInstanceName = func.call(blocks[x]);
                if (thisInstanceName === setupBlockInstanceName) {
                    setupInstancePresent = true;
                    break;
                }
            }
        }

        if (!setupInstancePresent) {
            this.setWarningText(Blockly.Msg.ARD_SERIAL_PRINT_WARN.replace('%1',
                thisInstanceName), 'serial_setup');
        } else {
            this.setWarningText(null, 'serial_setup');
        }
    },
    */
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};

Blockly.Blocks['serial_print_hex'] = {
    init: function () {
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.serial), 'SERIAL_ID')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT);
        this.appendValueInput("CONTENT", Number);
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.ARD_MATH_HEX, "HEX"],
                [Blockly.Msg.ARD_MATH_BIN, "BIN"],
                [Blockly.Msg.ARD_MATH_OCT, "OCT"],
                [Blockly.Msg.ARD_MATH_DEC, "DEC"]
            ]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_HEX_TOOLTIP);
    },
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};

Blockly.Blocks['serial_write'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://www.arduino.cc/en/Serial/write');
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.serial), 'SERIAL_ID')
            .appendField(Blockly.Msg.ARD_SERIAL_WRITE);
        this.appendValueInput('CONTENT');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_TIP);
    },
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};

Blockly.Blocks['bluetooth'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_BLUETOOTH)
            .appendField(Blockly.Msg.ARD_SERIAL_RX_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "RX_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_TX_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "TX_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_BAUDRATE)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.serialSpeed), "BAUDRATE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['bluetooth_available'] = {
    /**
     * Block for check bluetooth.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_AVAILABLE_MSG);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['bluetooth_read_string'] = {
    /**
     * Block for bluetooth read data.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_READ_STRING_MSG);
        this.setOutput(true, "String");
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['bluetooth_read'] = {
    /**
     * Block for bluetooth read data.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_READ_MSG);
        this.setOutput(true, "String");
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.CHARACTER;
    }
};

Blockly.Blocks['bluetooth_print'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://www.arduino.cc/en/Serial/Print');
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_WRITE_MSG);
        this.appendValueInput('CONTENT');
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_TIP);
    }
};

Blockly.Blocks['bluetooth_print_hex'] = {
    init: function () {
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_WRITE_MSG);
        this.appendValueInput("CONTENT", Number);
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.ARD_MATH_HEX, "HEX"],
                [Blockly.Msg.ARD_MATH_BIN, "BIN"],
                [Blockly.Msg.ARD_MATH_OCT, "OCT"],
                [Blockly.Msg.ARD_MATH_DEC, "DEC"]
            ]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_HEX_TOOLTIP);
    },
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};

Blockly.Blocks['bluetooth_write'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://www.arduino.cc/en/Serial/write');
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_WRITE);
        this.appendValueInput('CONTENT');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_WRITE_TIP);
    },
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};

var at_command_list = [["版本", "VERSION"], ["更名", "NAME"], ["MAC位址", "ADDR"]];

Blockly.Blocks['bluetooth_at_command'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["HC-05", "HC-05"], ["HC-06", "HC-06"]]), "HC_TYPE")
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_AT_CMD_MSG)
            .appendField(new Blockly.FieldDropdown(at_command_list), "CMD")
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_AT_CMD_AS)
            .appendField(new Blockly.FieldTextInput(""), "VALUE");
        this.setOutput(true, "String");
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['bluetooth_at_cmd'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERIAL_BLE_AT_CMD_MSG)
            .appendField(new Blockly.FieldTextInput(""), "CMD");
        this.setOutput(true, "String");
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['softwareserial_setup'] = {
    /**
     * Block for setting the speed of the serial connection.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_MSG)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "SERIAL_ID");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_RX_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "RX_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_TX_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "TX_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SERIAL_BAUDRATE)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.serialSpeed), "BAUDRATE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setTooltip(Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_TIP);
        this.setHelpUrl("https://www.arduino.cc/en/Reference/SoftwareSerial");
    }
};

Blockly.Blocks['softwareserial_available'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_MSG,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "SERIAL_ID",
                    "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
                }
            ],
            "output": Blockly.Types.BOOLEAN.output,
            "colour": Blockly.Blocks.comms.HUE,
            "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['softwareserial_read_string'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SOFTWARESERIAL_READ_STRING_MSG,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "SERIAL_ID",
                    "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
                }
            ],
            "output": Blockly.Types.STRING.output,
            "colour": Blockly.Blocks.comms.HUE,
            "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_READ_STRING_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['softwareserial_read_char'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SOFTWARESERIAL_READ_MSG,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "SERIAL_ID",
                    "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
                }
            ],
            "output": Blockly.Types.STRING.output,
            "colour": Blockly.Blocks.comms.HUE,
            "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_READ_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialAvailable'
        });
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['softwareserial_print'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_MSG,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "SERIAL_ID",
                    "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
                },
                {
                    "type": "input_value",
                    "name": "CONTENT"
                },
                {
                    "type": "field_checkbox",
                    "name": "NEW_LINE",
                    "checked": true
                }
            ],
            "inputsInline": true,
            "previousStatement": true,
            "nextStatement": true,
            "colour": Blockly.Blocks.comms.HUE,
            "tooltip": Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_TIP,
            "helpUrl": 'https://www.arduino.cc/en/Reference/SoftwareSerialPrint'
        });
    }
};

Blockly.Blocks['softwareserial_print_hex'] = {
    init: function () {
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_SOFTWARESERIAL)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'SERIAL_ID')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT);
        this.appendValueInput("CONTENT", Number);
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
            .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.ARD_MATH_HEX, "HEX"],
                [Blockly.Msg.ARD_MATH_BIN, "BIN"],
                [Blockly.Msg.ARD_MATH_OCT, "OCT"],
                [Blockly.Msg.ARD_MATH_DEC, "DEC"]
            ]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_HEX_TOOLTIP);
    },
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};

Blockly.Blocks['softwareserial_write'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://www.arduino.cc/en/Serial/write');
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_SOFTWARESERIAL)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'SERIAL_ID')
            .appendField(Blockly.Msg.ARD_SERIAL_WRITE);
        this.appendValueInput('CONTENT');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_TIP);
    },
    /**
     * Updates the content of the the serial related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERIAL_ID', 'serial');
    }
};

//PS2
Blockly.Blocks["PS2_init"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_SETUP)
            .appendField(new Blockly.FieldVariable('ps2x'), 'VAR');
        this.appendValueInput("CLOCK")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_PIN1);
        this.appendValueInput("ATTENTION")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_PIN2);
        this.appendValueInput("COMMAND")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_PIN3);
        this.appendValueInput("DATA")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_PIN4);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_ERROR_CODE)
            .appendField(new Blockly.FieldVariable('ps2_error_code'), 'VAR_ERROR');
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

// Start read PS2
Blockly.Blocks["PS2_read"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PS2)
            .appendField(new Blockly.FieldVariable('ps2x'), 'VAR')
            .appendField(Blockly.Msg.ARD_PS2_START_READ);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_ERROR_CODE)
            .appendField(new Blockly.FieldVariable('ps2_error_code'), 'VAR_ERROR');
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//
Blockly.Blocks["PS2_Button"] = {
    init: function () {
        /*
        var button_status = [[Blockly.Msg.ARD_PS2_BUTTON, "1"],
                            [Blockly.Msg.ARD_PS2_BUTTON_PRESSED, "2"],
                            [Blockly.Msg.ARD_PS2_BUTTON_RELEASED, "3"],
                            [Blockly.Msg.ARD_PS2_NEW_BUTTON_STATUS, "4"]];
        */
        var button_status = [[Blockly.Msg.ARD_PS2_BUTTON, "1"],
            [Blockly.Msg.ARD_PS2_BUTTON_RELEASED, "3"],
            [Blockly.Msg.ARD_PS2_BUTTON_PRESSED, "4"]];
        var PSBUTTON = [
            ["Select", "PSB_SELECT"],
            ["Start", "PSB_START"],
            [Blockly.Msg.ARD_PS2_GREEN, "PSB_GREEN"],
            [Blockly.Msg.ARD_PS2_RED, "PSB_RED"],
            [Blockly.Msg.ARD_PS2_BLUE, "PSB_BLUE"],
            [Blockly.Msg.ARD_PS2_PINK, "PSB_PINK"],
            [Blockly.Msg.ARD_PS2_TRIANGLE, "PSB_TRIANGLE"],
            [Blockly.Msg.ARD_PS2_CIRCLE, "PSB_CIRCLE"],
            [Blockly.Msg.ARD_PS2_CROSS, "PSB_CROSS"],
            [Blockly.Msg.ARD_PS2_SQUARE, "PSB_SQUARE"],
            ["L1", "PSB_L1"],
            ["L2", "PSB_L2"],
            ["L3", "PSB_L3"],
            ["R1", "PSB_R1"],
            ["R2", "PSB_R2"],
            ["R3", "PSB_R3"],
            [Blockly.Msg.ARD_PS2_LEFT, "PSB_PAD_LEFT"],
            [Blockly.Msg.ARD_PS2_RIGHT, "PSB_PAD_RIGHT"],
            [Blockly.Msg.ARD_PS2_UP, "PSB_PAD_UP"],
            [Blockly.Msg.ARD_PS2_DOWN, "PSB_PAD_DOWN"]
        ];
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PS2)
            .appendField(new Blockly.FieldVariable('ps2x'), 'VAR')
            .appendField(Blockly.Msg.ARD_PS2_BUT)
            .appendField(new Blockly.FieldDropdown(PSBUTTON), "psbt")
            .appendField(Blockly.Msg.ARD_PS2_STATUS)
            .appendField(new Blockly.FieldDropdown(button_status), "btstate");
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};

Blockly.Blocks["PS2_stk"] = {
    init: function () {
        this.setColour(Blockly.Blocks.comms.HUE);
        var PSSTK = [
            [Blockly.Msg.ARD_PS2_PSS_LX, "PSS_LX"],
            [Blockly.Msg.ARD_PS2_PSS_LY, "PSS_LY"],
            [Blockly.Msg.ARD_PS2_PSS_RX, "PSS_RX"],
            [Blockly.Msg.ARD_PS2_PSS_RY, "PSS_RY"]
        ];
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PS2)
            .appendField(new Blockly.FieldVariable('ps2x'), 'VAR')
            .appendField(Blockly.Msg.ARD_PS2_READ)
            .appendField(new Blockly.FieldDropdown(PSSTK), "psstk")
        this.setOutput(true, "Number");
        this.setTooltip('');
    }
};

//I2C
Blockly.Blocks["I2C_init"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_INIT)
            .appendField(Blockly.Msg.ARD_I2C_ADDR)
            .appendField(new Blockly.FieldTextInput("8"), "I2C_ADDR");
        this.appendValueInput("REC_FUNCTION")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Blockly.Types.FUNCTION.checkList)
            .appendField(Blockly.Msg.ARD_I2C_FUNC);
        this.appendValueInput("REQ_FUNCTION")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Blockly.Types.FUNCTION.checkList)
            .appendField(Blockly.Msg.ARD_I2C_FUNC);
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks['I2C_available'] = {
    /**
     * Block for check bluetooth.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_AVAILABLE_MSG);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['I2C_read'] = {
    /**
     * Block for bluetooth read data.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_READ_MSG);
        this.setOutput(true, "String");
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.CHARACTER;
    }
};

Blockly.Blocks['I2C_requestFrom'] = {
    /**
     * Block for bluetooth read data.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_REQUEST_MSG)
            .appendField(Blockly.Msg.ARD_I2C_ADDR)
            .appendField(new Blockly.FieldTextInput("8"), "I2C_ADDR")
            .appendField(Blockly.Msg.ARD_I2C_REQUEST)
            .appendField(new Blockly.FieldNumber(7), "I2C_BYTE")
            .appendField(Blockly.Msg.ARD_I2C_BYTE);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.STRING;
    }
};

Blockly.Blocks['I2C_write'] = {
    /**
     * Block for creating a write to serial com function.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.comms.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_WRITE_MSG);
        this.appendValueInput('CONTENT');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERIAL_WRITE_TIP);
    },
};

Blockly.Blocks["I2C_beginTrans"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_I2C_START_TRANS)
            .appendField(Blockly.Msg.ARD_I2C_ADDR)
            .appendField(new Blockly.FieldTextInput(""), "I2C_ADDR");
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks["I2C_endTrans"] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_I2C_END_TRANS);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.comms.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
