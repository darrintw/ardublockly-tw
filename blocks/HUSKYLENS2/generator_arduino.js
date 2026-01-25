/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the Huskylens blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.HUSKYLENS2');

goog.require('Blockly.Arduino');

/** . */
Blockly.Arduino['huskylens2_serial'] = function (block) {
  var rxPin = block.getFieldValue('HL2_RX');
  var txPin = block.getFieldValue('HL2_TX');
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens2serial = Blockly.Arduino.variableDB_.getName(
    'hl2_serial',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  Blockly.Arduino.addInclude('HL2_inc', '#include <DFRobot_HuskylensV2.h>');
  Blockly.Arduino.addVariable(huskylens2var, 'HuskylensV2 ' + huskylens2var + ';', true);
  Blockly.Arduino.addInclude('SoftwareSerial_inc', '#include <SoftwareSerial.h>');
  Blockly.Arduino.addVariable(huskylens2serial, 'SoftwareSerial ' + huskylens2serial + '(' + rxPin + ', ' + txPin + ');', true);
  var setup = huskylens2serial + '.begin(9600);\n';
  Blockly.Arduino.addSetup("hl2_serial_begin", setup, true);

  return '';
};

/** . */
Blockly.Arduino['huskylens2_i2c'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  Blockly.Arduino.addInclude('Wire_inc', '#include <Wire.h>')
  Blockly.Arduino.addInclude('HL2_inc', '#include <DFRobot_HuskylensV2.h>');
  Blockly.Arduino.addVariable(huskylens2var, 'HuskylensV2 ' + huskylens2var + ';', true);
  var setup = 'Wire.begin();\n';
  Blockly.Arduino.addSetup("Wire_begin", setup, true);

  return '';
};

/** . */
Blockly.Arduino['huskylens2_begin'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens2_conntype = block.getFieldValue('HUSKYLENS2_CONNTYPE');
  var code = huskylens2var;
  if (huskylens2_conntype == 'I2C') {
    code = code + '.begin(Wire)';
  }
  if (huskylens2_conntype == 'SERIAL') {
    code = code + '.begin(hl2_serial)';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens2_getresult'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = huskylens2var + '.getResult(ALGORITHM_ANY)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens2_getresultby'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens2_commtype = block.getFieldValue('COMMAND_TYPE');
  var code = huskylens2var;
  if (huskylens2_commtype == 'BLOCK') {
    code = code + '.getresultBlocks()';
  }
  if (huskylens2_commtype == 'ARROW') {
    code = code + '.getresultArrows()';
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens2_getresultbyid'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens2_objid = Blockly.Arduino.valueToCode(
    block, 'OBJECT_ID', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = huskylens2var + '.getCachedResultByID(ALGORITHM_ANY, ' + huskylens2_objid + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens2_getresult_learned'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = huskylens2var + '.getresultLearned()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens2_getresult_learnedby'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens2_commtype = block.getFieldValue('COMMAND_TYPE');
  var code = huskylens2var;
  if (huskylens2_commtype == 'BLOCK') {
    code = code + '.getresultBlocksLearned()';
  }
  if (huskylens2_commtype == 'ARROW') {
    code = code + '.getresultArrowsLearned()';
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens2_learned'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = huskylens2var + '.isLearned()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens2_learnedbyid'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens2_objid = Blockly.Arduino.valueToCode(
    block, 'OBJECT_ID', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = huskylens2var + '.isLearned(' + huskylens2_objid + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens2_available'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = huskylens2var + '.available(ALGORITHM_ANY)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens2_get'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens2resName = block.getFieldValue('HL2_RESULT_NAME');
  var huskylens2resId = Blockly.Arduino.variableDB_.getName(
    huskylens2resName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  Blockly.Arduino.addVariable(huskylens2resName, 'HUSKYLENSResult ' + huskylens2resId + ';', true);
  var code = huskylens2resId + ' = ' + huskylens2var + '.read();\r\n';
  return code;
};

/** . */
Blockly.Arduino['huskylens2_get_result'] = function (block) {
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code;
  var huskylens2resData = block.getFieldValue('RESULT_DATA');
  switch (huskylens2resData) {
    case 'id':
      code = '(RET_ITEM_NUM(' + huskylens2var + '.getCachedCenterResult(ALGORITHM_ANY), Result, ID))';
      break;
    case 'name':
      code = '(RET_ITEM_STR(' + huskylens2var + '.getCachedCenterResult(ALGORITHM_ANY), Result, name))';
      break;
    case 'number':
      code = '(' + huskylens2var + '.getCachedResultNum(ALGORITHM_ANY))';
      break;      
    case 'xCenter':
      code = '(RET_ITEM_NUM(' + huskylens2var + '.getCachedCenterResult(ALGORITHM_ANY), Result, xCenter))';
      break;
    case 'yCenter':
      code = '(RET_ITEM_NUM(' + huskylens2var + '.getCachedCenterResult(ALGORITHM_ANY), Result, yCenter))';
      break;
    case 'width':
      code = '(RET_ITEM_NUM(' + huskylens2var + '.getCachedCenterResult(ALGORITHM_ANY), Result, width))';
      break;
    case 'height':
      code = '(RET_ITEM_NUM(' + huskylens2var + '.getCachedCenterResult(ALGORITHM_ANY), Result, height))';
      break;
    default:
      code = '0';
      break;
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens2_getbyindex'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens2_getbyid'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens2_getinfo'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens2_learnid'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens2_learnname'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens2_setname'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens2_write'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens2_save'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens2_algorithm'] = function (block) {
  var huskylens2Func = block.getFieldValue('HL2_FUNC_SELECTOR');
  var huskylens2var = Blockly.Arduino.variableDB_.getName(
    'huskylens2',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = huskylens2var + '.switchAlgorithm(' + huskylens2Func + ');\n';

  return code;
};