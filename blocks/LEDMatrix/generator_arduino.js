/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';

goog.provide('Blockly.Arduino.LEDMatrix');

goog.require('Blockly.Arduino');

function hex2bin(hex){
    return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
}

//MAX7219初始化
Blockly.Arduino["MAX7219_init"] = function (block) {
    var pin_din = Blockly.Arduino.valueToCode(this, 'DIN', Blockly.Arduino.ORDER_ATOMIC);
    var pin_cs = Blockly.Arduino.valueToCode(this, 'CS', Blockly.Arduino.ORDER_ATOMIC);
    var pin_clk = Blockly.Arduino.valueToCode(this, 'CLK', Blockly.Arduino.ORDER_ATOMIC);
    var nums = Blockly.Arduino.valueToCode(this, 'NUMS', Blockly.Arduino.ORDER_ATOMIC);
    var matrixName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('MATRIX_VAR'),
        Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.addInclude('LedControl_inc', '#include <LedControl.h>');
    Blockly.Arduino.addInclude('binary_inc', '#include <binary.h>');
    Blockly.Arduino.addDefine('LedControl_def_' + matrixName , 'LedControl ' + matrixName + ' = LedControl(' + pin_din + ', ' + pin_clk + ', ' + pin_cs + ', ' + nums + ');');
    var code = '  for(int index = 0; index < ' + matrixName + '.getDeviceCount(); index++) {\n' +
        '    ' + matrixName + '.shutdown(index, false); \n' +
        '  } \n';
    return code;
};

//設置亮度
Blockly.Arduino["display_Matrix_Brightness"] = function (block) {
    var matrixName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('MATRIX_VAR'),
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var BRIGHTNESS = block.getFieldValue('Brightness');
    var code = matrixName + '.setIntensity(' + NO + ', ' + BRIGHTNESS + ');\n';
    return code;
};

//點陣LED全暗
Blockly.Arduino["display_Matrix_clearDisplay"] = function (block) {
    var matrixName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('MATRIX_VAR'),
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var code = matrixName + '.clearDisplay(' + NO + ');\n';
    return code;
};

//畫某一點
Blockly.Arduino["display_Matrix_DrawPixel"] = function (block) {
    var pos_x = Blockly.Arduino.valueToCode(this, 'XVALUE', Blockly.Arduino.ORDER_ATOMIC);
    var pos_y = Blockly.Arduino.valueToCode(this, 'YVALUE', Blockly.Arduino.ORDER_ATOMIC);
    var matrixName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('MATRIX_VAR'),
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_type = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    var code = matrixName + '.setLed(' + NO + ', ' + pos_x + ', ' + pos_y + ', ' + dropdown_type + ');\n';
    return code;
};

//依據陣列顯示內容
Blockly.Arduino["display_Matrix_predefarr"] = function (block) {
    var matrixName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('MATRIX_VAR'),
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.addDefine('var_declare_LEDArray', 'byte LEDArray[8];');
    var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);
    var code = 'memcpy_P(&LEDArray, &' + dotMatrixArray + ', 8);\n';
    code += 'for(int index_i = 0; index_i < 8; index_i++)\n';
    code += '{\n';
    code += '  ' + matrixName + '.setRow(' + NO + ', index_i, LEDArray[index_i]);\n';
    code += '}\n';
    return code;
};

//依點陣內容顯示
Blockly.Arduino["display_Matrix_LedArray"] = function (block) {
    var varName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('ARRAY_VAR'),
        Blockly.Variables.NAME_TYPE);
    var a = [];
    for (var i = 1; i < 9; i++) {
        a[i] = [];
        for (var j = 1; j < 9; j++) {
            a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (var i = 1; i < 9; i++) {
        var tmp = "B"
        for (var j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        code += tmp + ((i != 8) ? ',' : '');
    }
    code += '};';
    Blockly.Arduino.addDefine(varName, "const byte " + varName + "[8] PROGMEM = " + code);
    return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設數字字元
Blockly.Arduino["Matrix_char_digital"] = function (block) {
    var dropdown_char_digital_ = this.getFieldValue('char_digital_');
    var code = '"' + dropdown_char_digital_ + '"';
    code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += 'B' + hex2bin(dropdown_char_digital_.substr(i, 2)) + ((i != 14) ? ', ' : '');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_char_' + dropdown_char_digital_,  "const byte " + 'matrix_img_' + dropdown_char_digital_ + "[8] PROGMEM = " + code);
    return ['matrix_char_' + dropdown_char_digital_, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設大寫英文字元
Blockly.Arduino["Matrix_char_upper"] = function (block) {
    var dropdown_char_upper_ = this.getFieldValue('char_upper_');
    var code = '"' + dropdown_char_upper_ + '"';
    code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += 'B' + hex2bin(dropdown_char_upper_.substr(i, 2)) + ((i != 14) ? ', ' : '');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_char_' + dropdown_char_upper_,  "const byte " + 'matrix_img_' + dropdown_char_upper_ + "[8] PROGMEM = " + code);
    return ['matrix_char_' + dropdown_char_upper_, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設小寫英文字元
Blockly.Arduino["Matrix_char_lower"] = function (block) {
    var dropdown_char_lower_ = this.getFieldValue('char_lower_');
    var code = '"' + dropdown_char_lower_ + '"';
    code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += 'B' + hex2bin(dropdown_char_lower_.substr(i, 2)) + ((i != 14) ? ', ' : '');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_char_' + dropdown_char_lower_,  "const byte " + 'matrix_img_' + dropdown_char_lower_ + "[8] PROGMEM = " + code);
    return ['matrix_char_' + dropdown_char_lower_, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設圖案
Blockly.Arduino["Matrix_img"] = function (block) {
    var dropdown_img_ = this.getFieldValue('img_');
    var code = '"' + dropdown_img_ + '"';
    code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += 'B' + hex2bin(dropdown_img_.substr(i, 2)) + ((i != 14) ? ', ' : '');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_img_' + dropdown_img_,  "const byte " + 'matrix_img_' + dropdown_img_ + "[8] PROGMEM = " + code);
    return ['matrix_img_' + dropdown_img_, Blockly.Arduino.ORDER_ATOMIC];
};