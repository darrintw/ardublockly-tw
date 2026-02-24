/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.HUSKYLENS2');

goog.require('Blockly.Blocks');

goog.require('Blockly.Types');

Blockly.Blocks.HUSKYLENS2.HUE = 180;

/* User define block */
Blockly.Blocks['huskylens2_serial'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_INITIAL_SERIAL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_RX)
      .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "HL2_RX");
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_TX)
      .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "HL2_TX");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

/* User define block */
Blockly.Blocks['huskylens2_i2c'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_INITIAL_I2C);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_SDA);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_SCL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

/* User define block */
Blockly.Blocks['huskylens2_begin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_BEGIN)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HL2_I2C, "I2C"], [Blockly.Msg.HL2_SERIAL, "SERIAL"]]), "HUSKYLENS2_CONNTYPE")
      .appendField(Blockly.Msg.HL2_SUCCESSED);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  },
  /** @return {!string} Type of the block, text length always an integer. */
  getBlockType: function () {
    return Blockly.Types.BOOLEAN;
  }
};

/* User define block */
Blockly.Blocks['huskylens2_getresult'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_IS + Blockly.Msg.HL2_HAVE + Blockly.Msg.HL2_RETURN);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_getresultby'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_IS + Blockly.Msg.HL2_HAVE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HL2_BLOCK, "BLOCK"], [Blockly.Msg.HL2_ARROW, "ARROW"]]), "COMMAND_TYPE")
      .appendField(Blockly.Msg.HL2_OF + Blockly.Msg.HL2_RETURN);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_getresultbyid'] = {
  init: function () {
    this.appendValueInput("OBJECT_ID")
      .appendField(Blockly.Msg.HL2_IS + Blockly.Msg.HL2_HAVE)
      .appendField("ID");
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_OF + Blockly.Msg.HL2_RETURN);
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_getresult_learned'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_IS + Blockly.Msg.HL2_HAVE + Blockly.Msg.HL2_LEARNED + Blockly.Msg.HL2_OF + Blockly.Msg.HL2_RETURN);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_getresult_learnedby'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_IS + Blockly.Msg.HL2_HAVE + Blockly.Msg.HL2_LEARNED)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HL2_BLOCK, "BLOCK"], [Blockly.Msg.HL2_ARROW, "ARROW"]]), "COMMAND_TYPE")
      .appendField(Blockly.Msg.HL2_OF + Blockly.Msg.HL2_RETURN);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_learned'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_IS + Blockly.Msg.HL2_LEARNED);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_learnedbyid'] = {
  init: function () {
    this.appendValueInput("OBJECT_ID")
      .appendField(Blockly.Msg.HL2_IS + Blockly.Msg.HL2_LEARNED)
      .appendField("ID");
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_available'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_DETECTED);
    this.setOutput(true, ["Number", "Boolean"]);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_get_result'] = {
  init: function () {
    var blockresultlist = [
      ['ID', 'id'],
      [Blockly.Msg.HL2_NAME, 'name'],
      [Blockly.Msg.HL2_NUM, 'number'],
      ['X' + Blockly.Msg.HL2_CENTER, 'xCenter'],
      ['Y' + Blockly.Msg.HL2_CENTER, 'yCenter'],
      [Blockly.Msg.HL2_WIDTH, 'width'],
      [Blockly.Msg.HL2_HEIGHT, 'height']
    ];
    /*
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HL2_BLOCK, 'BLOCK'], [Blockly.Msg.HL2_ARROW, 'ARROW']]), 'COMMAND_TYPE');*/
    this.appendDummyInput('RESULT_INPUT')
      .appendField(Blockly.Msg.HL2_GET + Blockly.Msg.HL2_RESULT + Blockly.Msg.HL2_CONTANT)
      .appendField(new Blockly.FieldDropdown(blockresultlist), 'RESULT_DATA');
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  },
  onchange: function (event) {
    var blockresultlist = [
      ['X' + Blockly.Msg.HL2_CENTER, 'xCenter'],
      ['Y' + Blockly.Msg.HL2_CENTER, 'yCenter'],
      [Blockly.Msg.HL2_WIDTH, 'width'],
      [Blockly.Msg.HL2_HEIGHT, 'height'],
      ['ID', 'ID']
    ];
    var arrowresultlist = [
      ['X' + Blockly.Msg.HL2_ORIGIN, 'xOrigin'],
      ['Y' + Blockly.Msg.HL2_ORIGIN, 'yOrigin'],
      ['X' + Blockly.Msg.HL2_TARGET, 'xTarget'],
      ['Y' + Blockly.Msg.HL2_TARGET, 'yTarget'],
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
              .appendField(Blockly.Msg.HL2_CONTANT)
              .appendField(new Blockly.FieldDropdown(blockresultlist), 'RESULT_DATA');
          } else if (event.newValue == 'ARROW') {
            this.appendDummyInput('RESULT_INPUT')
              .appendField(Blockly.Msg.HL2_CONTANT)
              .appendField(new Blockly.FieldDropdown(arrowresultlist), 'RESULT_DATA');
          }
        }
      }
    }
  }
};

/* User define block */
Blockly.Blocks['huskylens2_get'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_GET + Blockly.Msg.HL2_RETURN + Blockly.Msg.HL2_TO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_getbyindex'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_getbyid'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_show_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_count'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_countby'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_countbyid'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
  }
};

/* User define block */
Blockly.Blocks['huskylens2_algorithm'] = {
  init: function () {
    funclist = [
      [Blockly.Msg.HL2_ALGORITHM_FACE_RECOGNITION, 'ALGORITHM_FACE_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_OBJECT_TRACKING, 'ALGORITHM_OBJECT_TRACKING'],
      [Blockly.Msg.HL2_ALGORITHM_OBJECT_RECOGNITION, 'ALGORITHM_OBJECT_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_LINE_TRACKING, 'LINE_TRALGORITHM_LINE_TRACKINGACKING'],
      [Blockly.Msg.HL2_ALGORITHM_COLOR_RECOGNITION, 'ALGORITHM_COLOR_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_TAG_RECOGNITION, 'ALGORITHM_TAG_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_SELF_LEARNING_CLASSIFICATION, 'ALGORITHM_SELF_LEARNING_CLASSIFICATION'],
      [Blockly.Msg.HL2_ALGORITHM_OBJECT_CLASSIFICATION, 'ALGORITHM_OBJECT_CLASSIFICATION'],
      [Blockly.Msg.HL2_ALGORITHM_SEGMENT, 'ALGORITHM_SEGMENT'],
      [Blockly.Msg.HL2_ALGORITHM_HAND_RECOGNITION, 'ALGORITHM_HAND_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_LICENSE_RECOGNITION, 'ALGORITHM_LICENSE_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_OCR_RECOGNITION, 'ALGORITHM_OCR_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_EMOTION_RECOGNITION, 'ALGORITHM_EMOTION_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_GAZE_RECOGNITION, 'ALGORITHM_GAZE_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_FACE_ORIENTATION, 'ALGORITHM_FACE_ORIENTATION'],
      [Blockly.Msg.HL2_ALGORITHM_QRCODE_RECOGNITION, 'ALGORITHM_QRCODE_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_BARCODE_RECOGNITION, 'ALGORITHM_BARCODE_RECOGNITION'],
      [Blockly.Msg.HL2_ALGORITHM_FALLDOWN_RECOGNITION, 'ALGORITHM_FALLDOWN_RECOGNITION']
    ];
    this.appendDummyInput()
      .appendField(Blockly.Msg.HL2_CHANGE + Blockly.Msg.HL2_ALGORITHM)
      .appendField(new Blockly.FieldDropdown(funclist), "HL2_FUNC_SELECTOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.HUSKYLENS2.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};