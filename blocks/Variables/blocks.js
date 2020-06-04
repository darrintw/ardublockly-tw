/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Block for the Arduino map functionality.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 */
'use strict';
goog.provide('Blockly.Blocks.variables');
goog.provide('Blockly.Blocks.pin');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.variables.HUE = 330;

Blockly.Blocks['variables_get'] = {
    /**
     * Block for variable getter.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable(
                Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    },
    contextMenuType_: 'variables_set',
    /**
     * Add menu option to create getter/setter block for this setter/getter.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function (options) {
        var option = {enabled: true};
        var name = this.getFieldValue('VAR');
        option.text = this.contextMenuMsg_.replace('%1', name);
        var xmlField = goog.dom.createDom('field', null, name);
        xmlField.setAttribute('name', 'VAR');
        var xmlBlock = goog.dom.createDom('block', null, xmlField);
        xmlBlock.setAttribute('type', this.contextMenuType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
    },
    /**
     * @return {(*|?string)[]} Retrieves the type (stored in varType) of this block.
     * @this Blockly.Block
     */
    getBlockType: function () {
        return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
    },
    /**
     * Gets the stored type of the variable indicated in the argument. As only one
     * variable is stored in this block, no need to check input
     * @this Blockly.
     * @param {!string} varName Name of this block variable to check type.
     * @return {(*)[]} String to indicate the type of this block.
     * @this Blockly.Block
     */
    getVarType: function (varName) {
        return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
    },
};

Blockly.Blocks['variables_init'] = {
    /**
     * Block for variable setter.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.VARIABLES_INIT,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "VAR",
                    "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
                },
                {
                    "type": "input_value",
                    "name": "VALUE"
                }
            ],
            "colour": Blockly.Blocks.variables.HUE,
            "tooltip": Blockly.Msg.VARIABLES_INIT_TOOLTIP,
            "helpUrl": Blockly.Msg.VARIABLES_SET_HELPURL
        });
    },
    /**
     * Searches through the nested blocks to find a variable type.
     * @this Blockly.Block
     * @param {!string} varName Name of this block variable to check type.
     * @return {Blockly.Type} String to indicate the type of this block.
     */
    getVarType: function (varName) {
        return Blockly.Types.getChildBlockType(this);
    },
};

Blockly.Blocks['variables_set'] = {
    /**
     * Block for variable setter.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.VARIABLES_SET,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "VAR",
                    "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
                }, {
                    "type": "input_value",
                    "name": "VALUE"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.Blocks.variables.HUE,
            "tooltip": Blockly.Msg.VARIABLES_SET_TOOLTIP,
            "helpUrl": Blockly.Msg.VARIABLES_SET_HELPURL
        });
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    },
    contextMenuType_: 'variables_get',
    customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
    /**
     * Searches through the nested blocks to find a variable type.
     * @this Blockly.Block
     * @param {!string} varName Name of this block variable to check type.
     * @return {Blockly.Type} String to indicate the type of this block.
     */
    getVarType: function (varName) {
        return Blockly.Types.getChildBlockType(this);
    }
};

Blockly.Blocks['variables_set_type'] = {
    /**
     * Block for variable casting.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://arduino.cc/en/Reference/HomePage');
        this.setColour(Blockly.Blocks.variables.HUE);
        this.appendValueInput('VARIABLE_SETTYPE_INPUT');
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_VAR_AS)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Types.getValidTypeArray()),
                'VARIABLE_SETTYPE_TYPE');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.ARD_VAR_AS_TIP);
    },
    /**
     * Assigns a type to the block based on the selected type to cast.
     * @return {!string} Blockly type for this block configuration.
     * @this Blockly.Block
     */
    getBlockType: function () {
        var blocklyTypeKey = this.getFieldValue('VARIABLE_SETTYPE_TYPE');
        return Blockly.Types[blocklyTypeKey];
    }
};

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.pin.HUE = 250;

Blockly.Blocks['io_highlow'] = {
    /**
     * Block for creating a Pin state.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://arduino.cc/en/Reference/Constants');
        this.setColour(Blockly.Blocks.pin.HUE);
        this.appendDummyInput()
            .appendField(
                new Blockly.FieldDropdown([[Blockly.Msg.ARD_HIGH, 'HIGH'], [Blockly.Msg.ARD_LOW, 'LOW']]),
                'STATE');
        this.setOutput(true, Blockly.Types.BOOLEAN.output);
        this.setTooltip(Blockly.Msg.ARD_HIGHLOW_TIP);
    },
    /** @return {!string} The type of return value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['io_allpins'] = {
    init: function () {
        this.setHelpUrl('http://www.arduino.cc/en/reference/board');
        this.setColour(Blockly.Blocks.pin.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PIN)
            .appendField(
                new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins),
                'PIN');
        this.setOutput(true, Blockly.Types.NUMBER.output);
        this.setTooltip('');
    },
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    },
    /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'digitalPins');
    }
};

Blockly.Blocks['io_pwmpins'] = {
    init: function () {
        this.setHelpUrl('http://www.arduino.cc/en/reference/board');
        this.setColour(Blockly.Blocks.pin.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PWM_PIN)
            .appendField(
                new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins),
                'PIN');
        this.setOutput(true, Blockly.Types.NUMBER.output);
        this.setTooltip('');
    },
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    },
    /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'pwmPins');
    }
};

Blockly.Blocks['io_analogpins'] = {
    init: function () {
        this.setHelpUrl('http://www.arduino.cc/en/reference/board');
        this.setColour(Blockly.Blocks.pin.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_ANALOG_PIN)
            .appendField(
                new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins),
                'PIN');
        this.setOutput(true, Blockly.Types.NUMBER.output);
        this.setTooltip('');
    },
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