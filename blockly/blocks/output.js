/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     https://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Blocks.output');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.output.HUE = 260;

Blockly.Blocks['io_output'] = {
    /**
     * Block for creating a 'set Pin' to a state.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'PIN')
            .appendField(Blockly.Msg.ARD_SET_OUTPUT);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SET_OUTPUT_TIP);
        this.setHelpUrl('https://www.arduino.cc/reference/en/language/functions/digital-io/pinmode/');
    }, /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'digitalPins');
    }
};

Blockly.Blocks['io_output_var'] = {
    /**
     * Block for creating a 'set Pin' to a state.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_PIN)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'PIN');
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SET_OUTPUT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SET_OUTPUT_TIP);
        this.setHelpUrl('https://www.arduino.cc/reference/en/language/functions/digital-io/pinmode/');
    }
};

Blockly.Blocks['io_digitalwrite'] = {
    /**
     * Block for creating a 'set Pin' to a state.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://arduino.cc/en/Reference/DigitalWrite');
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendValueInput('STATE')
            .appendField(Blockly.Msg.ARD_DIGITALWRITE)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'PIN')
            .appendField(Blockly.Msg.ARD_WRITE_TO)
            .setCheck(Blockly.Types.BOOLEAN.checkList);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_DIGITALWRITE_TIP);
    }, /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'digitalPins');
    }
};

Blockly.Blocks['io_digitalwrite_var'] = {
    /**
     * Block for creating a 'set Pin' to a state.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://arduino.cc/en/Reference/DigitalWrite');
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendValueInput('STATE')
            .appendField(Blockly.Msg.ARD_DIGITALWRITE)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'PIN')
            .appendField(Blockly.Msg.ARD_WRITE_TO)
            .setCheck(Blockly.Types.BOOLEAN.checkList);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_DIGITALWRITE_TIP);
    }
};

Blockly.Blocks['io_analogwrite'] = {
    /**
     * Block for creating a 'set Pin' to an analogue value.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://arduino.cc/en/Reference/AnalogWrite');
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendValueInput('NUM')
            .appendField(Blockly.Msg.ARD_ANALOGWRITE)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins), 'PIN')
            .appendField(Blockly.Msg.ARD_WRITE_TO)
            //.appendField(new Blockly.FieldTextInput("100"), "DEFNUM")
            .setCheck(Blockly.Types.NUMBER.output);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_ANALOGWRITE_TIP);
    }, /**
     * Updates the content of the the Pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'pwmPins');
    }, /** @return {!string} The type of input value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};


Blockly.Blocks['io_analogwrite_var'] = {
    /**
     * Block for creating a 'set Pin' to an analogue value.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('https://arduino.cc/en/Reference/AnalogWrite');
        this.setColour(Blockly.Blocks.output.HUE);
        this.appendValueInput('NUM')
            .appendField(Blockly.Msg.ARD_ANALOGWRITE)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'PIN')
            .appendField(Blockly.Msg.ARD_WRITE_TO)
            .setCheck(Blockly.Types.NUMBER.output);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_ANALOGWRITE_TIP);
    }, /** @return {!string} The type of input value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.NUMBER;
    }
};

Blockly.Blocks['io_tone'] = {
    /**
     * Block for
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SETTONE)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "TONEPIN");
        this.appendValueInput("FREQUENCY")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .appendField(Blockly.Msg.ARD_TONEFREQ);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.output.HUE);
        this.setTooltip(Blockly.Msg.ARD_TONE_TIP);
        this.setHelpUrl('https://www.arduino.cc/en/Reference/tone');
    }, /**
     * Called whenever anything on the workspace changes.
     * It checks frequency values and sets a warning if out of range.
     * @this Blockly.Block
     */
    onchange: function (event) {
        if (!this.workspace || event.type == Blockly.Events.MOVE || event.type == Blockly.Events.UI) {
            return;  // Block deleted or irrelevant event
        }
        var freq = Blockly.Arduino.valueToCode(this, "FREQUENCY", Blockly.Arduino.ORDER_ATOMIC)
        if (freq < 31 || freq > 65535) {
            this.setWarningText(Blockly.Msg.ARD_TONE_WARNING, 'io_tone');
        } else {
            this.setWarningText(null, 'io_tone');
        }
    }
};

Blockly.Blocks['io_notone'] = {
    /**
     * Block for
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_NOTONE)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "TONEPIN");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.output.HUE);
        this.setTooltip(Blockly.Msg.ARD_NOTONE_TIP);
        this.setHelpUrl('https://www.arduino.cc/en/Reference/noTone');
    }
};

var note = [["0", "0"], ["C", "C"], ["CS", "CS"], ["D", "D"], ["DS", "DS"], ["E", "E"], ["F", "F"], ["G", "G"],
    ["GS", "GS"], ["A", "A"], ["AS", "AS"], ["B", "B"]];

var tone = [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]];

var tempo = [["1", "1"], ["2", "2"], ["4", "4"], ["8", "8"], ["16", "16"]];
var speed = [["1", "1"], ["2", "0.9"], ["3", "0.8"], ["4", "0.7"], ["5", "0.6"]];

Blockly.Blocks['io_play_tone'] = {
    /**
     * Block for
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_TONE_USE)
            .appendField(new Blockly.FieldVariable("buzzer"), "TONEPIN")
            .appendField(Blockly.Msg.ARD_TONE_PLAY)
            .appendField(new Blockly.FieldDropdown(speed), "SPEED");
        this.appendStatementInput("BUZZER_PLAY")
            .setCheck(['io_single_tone', 'io_multi_tone']);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.output.HUE);
        this.setTooltip(Blockly.Msg.ARD_TONE_TIP);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['io_single_tone'] = {
    /**
     * Block for
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_NOTE)
            .appendField(new Blockly.FieldDropdown(note), "NOTE")
            .appendField(Blockly.Msg.ARD_TONE)
            .appendField(new Blockly.FieldDropdown(tone), "TONE")
            .appendField(Blockly.Msg.ARD_TEMPO)
            .appendField(new Blockly.FieldDropdown(tempo), "TEMPO");
        this.setPreviousStatement(true, ['io_single_tone', 'io_multi_tone']);
        this.setNextStatement(true, ['io_single_tone', 'io_multi_tone']);
        this.setColour(Blockly.Blocks.output.HUE);
        this.setTooltip(Blockly.Msg.ARD_TONE_TIP);
        this.setHelpUrl('https://docs.arduino.cc/built-in-examples/digital/toneMelody');
    }
};

Blockly.Blocks['io_multi_tone'] = {
    /**
     * Block for
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("NOTE_TONE")
            .setCheck(Blockly.Types.STRING.checkList)
            .appendField(Blockly.Msg.ARD_NOTE + " " + Blockly.Msg.ARD_TONE);
        this.appendValueInput("TEMPO")
            .setCheck(Blockly.Types.STRING.checkList)
            .appendField(Blockly.Msg.ARD_TEMPO);
        this.setPreviousStatement(true, ['io_single_tone', 'io_multi_tone']);
        this.setNextStatement(true, ['io_single_tone', 'io_multi_tone']);
        this.setColour(Blockly.Blocks.output.HUE);
        this.setTooltip(Blockly.Msg.ARD_TONE_TIP);
        this.setHelpUrl('buzzer-piano/index.html');
    }
};
