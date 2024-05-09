/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.HUSKYLENS');

goog.require('Blockly.Blocks');

goog.require('Blockly.Types');

Blockly.Blocks.HUSKYLENS.HUE = 180;

/* User define block */
Blockly.Blocks['huskylens_serial'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_INITIAL_SERIAL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_RX)
      .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "HL_RX");
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_TX)
      .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "HL_TX");
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_RETURN + Blockly.Msg.HL_VARIABLE)
      .appendField(new Blockly.FieldVariable("huskylens_result"), "HL_RESULT_NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

/* User define block */
Blockly.Blocks['huskylens_i2c'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_INITIAL_I2C);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_SDA);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_SCL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_RETURN + Blockly.Msg.HL_VARIABLE)
      .appendField(new Blockly.FieldVariable("huskylens_result"), "HL_RESULT_NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

/* User define block */
Blockly.Blocks['huskylens_begin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_BEGIN)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HL_I2C, "I2C"], [Blockly.Msg.HL_SERIAL, "SERIAL"]]), "HUSKYLENS_CONNTYPE")
      .appendField(Blockly.Msg.HL_SUCCESSED);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function () {
    return Blockly.Types.BOOLEAN;
  }
};

/* User define block */
Blockly.Blocks['huskylens_request'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_IS + Blockly.Msg.HL_HAVE + Blockly.Msg.HL_RETURN);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_requestby'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_IS + Blockly.Msg.HL_HAVE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HL_BLOCK, "BLOCK"], [Blockly.Msg.HL_ARROW, "ARROW"]]), "COMMAND_TYPE")
      .appendField(Blockly.Msg.HL_OF + Blockly.Msg.HL_RETURN);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_requestbyid'] = {
  init: function () {
    this.appendValueInput("OBJECT_ID")
      .appendField(Blockly.Msg.HL_IS + Blockly.Msg.HL_HAVE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HL_BLOCK, "BLOCK"], [Blockly.Msg.HL_ARROW, "ARROW"]]), "COMMAND_TYPE")
      .appendField("ID");
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_OF + Blockly.Msg.HL_RETURN);
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_request_learned'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_IS + Blockly.Msg.HL_HAVE + Blockly.Msg.HL_LEARNED + Blockly.Msg.HL_OF + Blockly.Msg.HL_RETURN);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_request_learnedby'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_IS + Blockly.Msg.HL_HAVE + Blockly.Msg.HL_LEARNED)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HL_BLOCK, "BLOCK"], [Blockly.Msg.HL_ARROW, "ARROW"]]), "COMMAND_TYPE")
      .appendField(Blockly.Msg.HL_OF + Blockly.Msg.HL_RETURN);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_learned'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_IS + Blockly.Msg.HL_LEARNED);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_learnedbyid'] = {
  init: function () {
    this.appendValueInput("OBJECT_ID")
      .appendField(Blockly.Msg.HL_IS + Blockly.Msg.HL_LEARNED)
      .appendField("ID");
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_available'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_DETECTED);
    this.setOutput(true, ["Number", "Boolean"]);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_get_result'] = {
  init: function () {
    var blockresultlist = [
      ['X' + Blockly.Msg.HL_CENTER, 'xCenter'],
      ['Y' + Blockly.Msg.HL_CENTER, 'yCenter'],
      [Blockly.Msg.HL_WIDTH, 'width'],
      [Blockly.Msg.HL_HEIGHT, 'height'],
      ['ID', 'ID']
    ];
    this.appendDummyInput()
    .appendField(Blockly.Msg.HL_FROM)
      .appendField(new Blockly.FieldVariable("huskylens_result"), "HL_RESULT_NAME");
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HL_BLOCK, 'BLOCK'], [Blockly.Msg.HL_ARROW, 'ARROW']]), 'COMMAND_TYPE');
    this.appendDummyInput('RESULT_INPUT')
      .appendField(Blockly.Msg.HL_CONTANT)
      .appendField(new Blockly.FieldDropdown(blockresultlist), 'RESULT_DATA');
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  },
  onchange: function (event) {
    var blockresultlist = [
      ['X' + Blockly.Msg.HL_CENTER, 'xCenter'],
      ['Y' + Blockly.Msg.HL_CENTER, 'yCenter'],
      [Blockly.Msg.HL_WIDTH, 'width'],
      [Blockly.Msg.HL_HEIGHT, 'height'],
      ['ID', 'ID']
    ];
    var arrowresultlist = [
      ['X' + Blockly.Msg.HL_ORIGIN, 'xOrigin'],
      ['Y' + Blockly.Msg.HL_ORIGIN, 'yOrigin'],
      ['X' + Blockly.Msg.HL_TARGET, 'xTarget'],
      ['Y' + Blockly.Msg.HL_TARGET, 'yTarget'],
      ['ID', 'ID']
    ];
    if (event.blockId === this.id) {
      if (event.type === Blockly.Events.CHANGE || event.type === Blockly.Events.CREATE) {
        if (event.name === 'COMMAND_TYPE') {
          if (this.getInput('RESULT_INPUT')) {
            this.removeInput('RESULT_INPUT');
          }
          if (event.newValue == 'BLOCK') {
            this.appendDummyInput('RESULT_INPUT')
              .appendField(Blockly.Msg.HL_CONTANT)
              .appendField(new Blockly.FieldDropdown(blockresultlist), 'RESULT_DATA');
          } else if (event.newValue == 'ARROW') {
            this.appendDummyInput('RESULT_INPUT')
              .appendField(Blockly.Msg.HL_CONTANT)
              .appendField(new Blockly.FieldDropdown(arrowresultlist), 'RESULT_DATA');
          }
        }
      }
    }
  }
};

/* User define block */
Blockly.Blocks['huskylens_get'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_GET + Blockly.Msg.HL_RETURN + Blockly.Msg.HL_TO)
      .appendField(new Blockly.FieldVariable("huskylens_result"), "HL_RESULT_NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_getbyindex'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_getbyid'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_show_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_count'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_countby'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_countbyid'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens_algorithm'] = {
  init: function () {
    funclist = [
      [Blockly.Msg.HL_ALGORITHM_FACE_RECOGNITION, 'FACE_RECOGNITION'],
      [Blockly.Msg.HL_ALGORITHM_OBJECT_TRACKING, 'OBJECT_TRACKING'],
      [Blockly.Msg.HL_ALGORITHM_OBJECT_RECOGNITION, 'OBJECT_RECOGNITION'],
      [Blockly.Msg.HL_ALGORITHM_LINE_TRACKING, 'LINE_TRACKING'],
      [Blockly.Msg.HL_ALGORITHM_COLOR_RECOGNITION, 'COLOR_RECOGNITION'],
      [Blockly.Msg.HL_ALGORITHM_TAG_RECOGNITION, 'TAG_RECOGNITION'],
      [Blockly.Msg.HL_ALGORITHM_OBJECT_CLASSIFICATION, 'OBJECT_CLASSIFICATION']
    ];
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL_CHANGE + Blockly.Msg.HL_ALGORITHM)
      .appendField(new Blockly.FieldDropdown(funclist), "HL_FUNC_SELECTOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.HUSKYLENS.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};