/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the Huskylens blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.HUSKYLENS');

goog.require('Blockly.Arduino');


/** . */
Blockly.Arduino['huskylens_serial'] = function (block) {
  var rxPin = block.getFieldValue('HL_RX');
  var txPin = block.getFieldValue('HL_TX');
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylensresName = block.getFieldValue('HL_RESULT_NAME');
  var huskylensresId = Blockly.Arduino.variableDB_.getName(
    huskylensresName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylensserial = Blockly.Arduino.variableDB_.getName(
    'hl_serial',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

  Blockly.Arduino.addInclude('hl_inc', '#include <HUSKYLENS.h>');
  Blockly.Arduino.addVariable(huskylensvar, 'HUSKYLENS ' + huskylensvar + ';', true);
  Blockly.Arduino.addVariable(huskylensresName, 'HUSKYLENSResult ' + huskylensresId + ';', true);
  Blockly.Arduino.addInclude('SoftwareSerial_inc', '#include <SoftwareSerial.h>');
  Blockly.Arduino.addVariable(huskylensserial, 'SoftwareSerial ' + huskylensserial + '(' + rxPin + ', ' + txPin + ');', true);
  var setup = huskylensserial + '.begin(9600);\n';
  Blockly.Arduino.addSetup("hl_serial_begin", setup, true);

  return '';
};

/** . */
Blockly.Arduino['huskylens_i2c'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylensresName = block.getFieldValue('HL_RESULT_NAME');
  var huskylensresId = Blockly.Arduino.variableDB_.getName(
    huskylensresName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  Blockly.Arduino.addInclude('Wire_inc', '#include <Wire.h>')
  Blockly.Arduino.addInclude('hl_inc', '#include <HUSKYLENS.h>');
  Blockly.Arduino.addVariable(huskylensvar, 'HUSKYLENS ' + huskylensvar + ';', true);
  Blockly.Arduino.addVariable(huskylensresName, 'HUSKYLENSResult ' + huskylensresId + ';', true);
  var setup = 'Wire.begin();\n';
  Blockly.Arduino.addSetup("Wire_begin", setup, true);

  return '';
};

/** . */
Blockly.Arduino['huskylens_begin'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens_conntype = block.getFieldValue('HUSKYLENS_CONNTYPE');
  var code = huskylensvar;
  if (huskylens_conntype == 'I2C') {
    code = code + '.begin(Wire)';
  }
  if (huskylens_conntype == 'SERIAL') {
    code = code + '.begin(hl_serial)';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens_request'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = huskylensvar + '.request()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens_requestby'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens_commtype = block.getFieldValue('COMMAND_TYPE');
  var code = huskylensvar;
  if (huskylens_commtype == 'BLOCK') {
    code = code + '.requestBlocks()';
  }
  if (huskylens_commtype == 'ARROW') {
    code = code + '.requestArrows()';
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens_requestbyid'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens_commtype = block.getFieldValue('COMMAND_TYPE');
  var huskylens_objid = Blockly.Arduino.valueToCode(
    block, 'OBJECT_ID', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = huskylensvar;
  if (huskylens_commtype == 'BLOCK') {
    code = code + '.requestBlocks(' + huskylens_objid + ')';
  }
  if (huskylens_commtype == 'ARROW') {
    code = code + '.requestArrows(' + huskylens_objid + ')';
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens_request_learned'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = huskylensvar + '.requestLearned()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens_request_learnedby'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens_commtype = block.getFieldValue('COMMAND_TYPE');
  var code = huskylensvar;
  if (huskylens_commtype == 'BLOCK') {
    code = code + '.requestBlocksLearned()';
  }
  if (huskylens_commtype == 'ARROW') {
    code = code + '.requestArrowsLearned()';
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens_learned'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = huskylensvar + '.isLearned()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens_learnedbyid'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylens_objid = Blockly.Arduino.valueToCode(
    block, 'OBJECT_ID', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = huskylensvar + '.isLearned(' + huskylens_objid + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens_available'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = huskylensvar + '.available()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens_get'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylensresName = block.getFieldValue('HL_RESULT_NAME');
  var huskylensresId = Blockly.Arduino.variableDB_.getName(
    huskylensresName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  Blockly.Arduino.addVariable(huskylensresName, 'HUSKYLENSResult ' + huskylensresId + ';', true);
  var code = huskylensresId + ' = ' + huskylensvar + '.read();\r\n';
  return code;
};

/** . */
Blockly.Arduino['huskylens_get_result'] = function (block) {
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    'huskylens',
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var huskylensresName = block.getFieldValue('HL_RESULT_NAME');
  var huskylensresId = Blockly.Arduino.variableDB_.getName(
    huskylensresName,
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  Blockly.Arduino.addVariable(huskylensresName, 'HUSKYLENSResult ' + huskylensresId + ';', true);
  var huskylensresData = block.getFieldValue('RESULT_DATA');
  var code = huskylensresId + '.' + huskylensresData;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['huskylens_getbyindex'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens_getbyid'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens_getinfo'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens_learnid'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens_learnname'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens_setname'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens_write'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens_save'] = function (block) {
  return '';
};

/** . */
Blockly.Arduino['huskylens_algorithm'] = function (block) {
  var huskylensFunc = block.getFieldValue('HL_FUNC_SELECTOR');
  var huskylensvar = Blockly.Arduino.variableDB_.getName(
    "huskylens",
    Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
  var code = huskylensvar + '.writeAlgorithm(' + huskylensFunc + ');\n';

  return code;
};