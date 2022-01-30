/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.SDCard');

goog.require('Blockly.Arduino');


/** . */
Blockly.Arduino['SD_initial'] = function (block) {
    var sdName = block.getFieldValue('SD_VAR');
    var sdId = Blockly.Arduino.variableDB_.getName(
        sdName,
        Blockly.Variables.NAME_TYPE);
    var pinKey = block.getFieldValue('CS_PIN');
    var csName = block.getFieldValue('CS_VAR');
    var csId = Blockly.Arduino.variableDB_.getName(
        csName,
        Blockly.Variables.NAME_TYPE);

    Blockly.Arduino.reservePin(block, pinKey, Blockly.Arduino.pinTypes.INPUT, 'Servo Write');
    Blockly.Arduino.addInclude('SPI_inc', '#include <SPI.h>');
    Blockly.Arduino.addInclude('SD_inc', '#include <SD.h>');
    Blockly.Arduino.addVariable(sdName, 'Sd2Card ' + sdId + ';', true);
    Blockly.Arduino.addVariable(csName, 'const int ' + csId + ' = ' + pinKey + ';', true);
    return '';
};

/** . */
Blockly.Arduino['SD_success'] = function (block) {
    var csName = block.getFieldValue('CS_VAR');
    var csId = Blockly.Arduino.variableDB_.getName(
        csName,
        Blockly.Variables.NAME_TYPE);
    var code = 'SD.begin(' + csName + ')';
    return [code, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_exists'] = function (block) {
    var sdName = block.getFieldValue('SD_VAR');
    var sdId = Blockly.Arduino.variableDB_.getName(
        sdName,
        Blockly.Variables.NAME_TYPE);
    var csName = block.getFieldValue('CS_VAR');
    var csId = Blockly.Arduino.variableDB_.getName(
        csName,
        Blockly.Variables.NAME_TYPE);
    var code = sdName + '.init(SPI_HALF_SPEED, ' + csName + ')';
    return [code, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_read_type'] = function (block) {
    var sdName = block.getFieldValue('SD_VAR');
    var sdId = Blockly.Arduino.variableDB_.getName(
        sdName,
        Blockly.Variables.NAME_TYPE);
    var code = sdName + '.type()';
    return [code, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_type'] = function (block) {
    var code = block.getFieldValue('TYPE');
    return [code, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_dir_create'] = function (block) {
    var dirName = Blockly.Arduino.valueToCode(
        block, 'DIR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = 'SD.mkdir(' + dirName + ')';
    return [code, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_dir_delete'] = function (block) {
    var dirName = Blockly.Arduino.valueToCode(
        block, 'DIR_NAME', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = 'SD.rmdir(' + dirName + ')';
    return [code, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_remove'] = function (block) {
    var fileName = Blockly.Arduino.valueToCode(
        block, 'FILE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = 'SD.remove(' + fileName + ')';
    return [code, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_dir_file_exist'] = function (block) {
    var dirName = Blockly.Arduino.valueToCode(
        block, 'DIR_FILE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = 'SD.exists(' + dirName + ')';
    return [code, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_file_var'] = function (block) {
    var fileName = block.getFieldValue('FILE_NAME');
    var fileId = Blockly.Arduino.variableDB_.getName(
        fileName,
        Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.addVariable(fileName, 'File ' + fileId + ';', true);
    return '';
};

/** . */
Blockly.Arduino['SD_file_open'] = function (block) {
    var fileName = block.getFieldValue('FILE_NAME');
    var fileId = Blockly.Arduino.variableDB_.getName(
        fileName,
        Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.addVariable(fileName, 'File ' + fileId + ';', true);

    var dirfileName = Blockly.Arduino.valueToCode(
        block, 'DIR_FILE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var type = block.getFieldValue('TYPE');

    var code = fileId + ' = SD.open(' + dirfileName + ', ' + type + ');\n';
    return code;
};

/** . */
Blockly.Arduino['SD_file_opened'] = function (block) {
    var fileName = block.getFieldValue('FILE_NAME');
    var fileId = Blockly.Arduino.variableDB_.getName(
        fileName,
        Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.addVariable(fileName, 'File ' + fileId + ';', true);
    return [fileId, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_file_write'] = function (block) {
    var fileName = block.getFieldValue('FILE_NAME');
    var fileId = Blockly.Arduino.variableDB_.getName(
        fileName,
        Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.addVariable(fileName, 'File ' + fileId + ';', true);
    var type = block.getFieldValue('TYPE');
    var input = Blockly.Arduino.valueToCode(
        block, 'INPUT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = fileId + '.print' + type + '(' + input + ');\n' +
        fileId + '.flush();\n';
    return code;
};

/** . */
Blockly.Arduino['SD_file_read'] = function (block) {
    var fileName = block.getFieldValue('FILE_NAME');
    var fileId = Blockly.Arduino.variableDB_.getName(
        fileName,
        Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.addVariable(fileName, 'File ' + fileId + ';', true);

    var code = fileId + '.read()';
    return [code, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_file_available'] = function (block) {
    var fileName = block.getFieldValue('FILE_NAME');
    var fileId = Blockly.Arduino.variableDB_.getName(
        fileName,
        Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.addVariable(fileName, 'File ' + fileId + ';', true);

    var code = fileId + '.available()';
    return [code, Blockly.Arduino.ORDER_NONE];
};

/** . */
Blockly.Arduino['SD_file_close'] = function (block) {
    var fileName = block.getFieldValue('FILE_NAME');
    var fileId = Blockly.Arduino.variableDB_.getName(
        fileName,
        Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.addVariable(fileName, 'File ' + fileId + ';', true);

    var code = fileId + '.close();\n';
    return code;
};