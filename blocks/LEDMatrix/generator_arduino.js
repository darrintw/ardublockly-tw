/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';

goog.provide('Blockly.Arduino.LEDMatrix');

goog.require('Blockly.Arduino');

function hex28bin(hex) {
    return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
}

function hex24bin(hex) {
    return ("0000" + (parseInt(hex, 16)).toString(2)).substr(-4);
}

//MAX7219初始化
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino["MAX7219_init"] = function (block) {
    var pin_din = Blockly.Arduino.valueToCode(this, 'DIN', Blockly.Arduino.ORDER_ATOMIC);
    var pin_cs = Blockly.Arduino.valueToCode(this, 'CS', Blockly.Arduino.ORDER_ATOMIC);
    var pin_clk = Blockly.Arduino.valueToCode(this, 'CLK', Blockly.Arduino.ORDER_ATOMIC);
    var nums = Blockly.Arduino.valueToCode(this, 'NUMS', Blockly.Arduino.ORDER_ATOMIC);
    var matrixName = block.getFieldValue('MATRIX_VAR');
    var matrixId = Blockly.Arduino.variableDB_.getName(
        matrixName,
        Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.addInclude('LedControl_inc', '#include <LedControl.h>');
    Blockly.Arduino.addInclude('binary_inc', '#include <binary.h>');
    Blockly.Arduino.addVariable(matrixId, 'LedControl ' + matrixName + ' = LedControl(' + pin_din + ', ' + pin_clk + ', ' + pin_cs + ', ' + nums + ');', true)
    var code = '  for(int index = 0; index < ' + matrixId + '.getDeviceCount(); index++) {\n' +
        '    ' + matrixName + '.shutdown(index, false); \n' +
        '  } \n';
    return code;
};

//設置亮度
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino["display_Matrix_Brightness"] = function (block) {
    var matrixName = block.getFieldValue('MATRIX_VAR');
    var matrixId = Blockly.Arduino.variableDB_.getName(
        matrixName,
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var BRIGHTNESS = block.getFieldValue('Brightness');
    var code = matrixId + '.setIntensity(' + NO + ', ' + BRIGHTNESS + ');\n';
    return code;
};

//點陣LED全暗
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino["display_Matrix_clearDisplay"] = function (block) {
    var matrixName = block.getFieldValue('MATRIX_VAR');
    var matrixId = Blockly.Arduino.variableDB_.getName(
        matrixName,
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var code = matrixId + '.clearDisplay(' + NO + ');\n';
    return code;
};

//畫某一點
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino["display_Matrix_DrawPixel"] = function (block) {
    var pos_x = Blockly.Arduino.valueToCode(this, 'XVALUE', Blockly.Arduino.ORDER_ATOMIC);
    var pos_y = Blockly.Arduino.valueToCode(this, 'YVALUE', Blockly.Arduino.ORDER_ATOMIC);
    var matrixName = block.getFieldValue('MATRIX_VAR');
    var matrixId = Blockly.Arduino.variableDB_.getName(
        matrixName,
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_type = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    var code = matrixId + '.setLed(' + NO + ', ' + pos_x + ', ' + pos_y + ', ' + dropdown_type + ');\n';
    return code;
};

//依據陣列顯示內容
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino["display_Matrix_predefarr"] = function (block) {
    var matrixName = block.getFieldValue('MATRIX_VAR');
    var matrixId = Blockly.Arduino.variableDB_.getName(
        matrixName,
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.addDefine('var_declare_LEDArray', 'byte LEDArray[8];');
    var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);
    var code = 'memcpy_P(&LEDArray, &' + dotMatrixArray + ', 8);\n';
    code += 'for(int index_i = 0; index_i < 8; index_i++)\n';
    code += '{\n';
    code += '  ' + matrixId + '.setRow(' + NO + ', index_i, LEDArray[index_i]);\n';
    code += '}\n';
    return code;
};

//依據陣列顯示半寬內容
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino["display_Matrix_half_predefarr"] = function (block) {
    var matrixName = block.getFieldValue('MATRIX_VAR');
    var matrixId = Blockly.Arduino.variableDB_.getName(
        matrixName,
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var dotMatrixArrayleft = Blockly.Arduino.valueToCode(this, 'LEDArray_left', Blockly.Arduino.ORDER_ASSIGNMENT);
    var dotMatrixArrayright = Blockly.Arduino.valueToCode(this, 'LEDArray_right', Blockly.Arduino.ORDER_ASSIGNMENT);
    var code = 'for(int index_i = 0; index_i < 8; index_i++)\n';
    code += '{\n';
    code += '  String binary_string = ' + dotMatrixArrayleft + '[index_i] + ' + dotMatrixArrayright + '[index_i];\n';
    code += '  for (int index_c = 0; index_c < 8; index_c++){\n';
    code += '    ' + matrixId + '.setLed(' + NO + ', index_i, index_c, (binary_string.substring(index_c, index_c + 1) == "0" ? LOW : HIGH));\n';
    code += '  }\n';
    code += '}\n';
    return code;
};

//發出音效順便顯示文字
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['display_Matrix_multi_tone'] = function (block) {
    var matrixName = block.getFieldValue('MATRIX_VAR');
    var matrixId = Blockly.Arduino.variableDB_.getName(
        matrixName,
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var noteTone = Blockly.Arduino.valueToCode(
        block, 'NOTE_TONE', Blockly.Arduino.ORDER_ATOMIC) || '';
    var tempo = Blockly.Arduino.valueToCode(
        block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '';
    var noteSize = 0;
    Blockly.Arduino.addDefine('var_declare_LEDArray', 'byte LEDArray[8];');
    Blockly.Arduino.addDefine('matrix_tone_0', 'const byte matrix_tone_0[8] PROGMEM = {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000};');
    Blockly.Arduino.addDefine('matrix_tone_c', 'const byte matrix_tone_c[8] PROGMEM = {B11100000, B10110000, B10010000, B10010000, B10010110, B10011001, B10111001, B11100110};');
    Blockly.Arduino.addDefine('matrix_tone_d', 'const byte matrix_tone_d[8] PROGMEM = {B11100000, B10110000, B10010000, B10110111, B11101001, B11101111, B10111000, B10010111};');
    Blockly.Arduino.addDefine('matrix_tone_e', 'const byte matrix_tone_e[8] PROGMEM = {B11110000, B11110000, B11110000, B11111111, B10011001, B10011111, B10011000, B10011111};');
    Blockly.Arduino.addDefine('matrix_tone_f', 'const byte matrix_tone_f[8] PROGMEM = {B11110000, B11110000, B10000000, B10000110, B11111001, B10001001, B10001011, B10000101};');
    Blockly.Arduino.addDefine('matrix_tone_g', 'const byte matrix_tone_g[8] PROGMEM = {B01110000, B11000000, B10000000, B11100000, B01110110, B00011001, B00111001, B11100110};');
    Blockly.Arduino.addDefine('matrix_tone_a', 'const byte matrix_tone_a[8] PROGMEM = {B10000000, B10000000, B10000000, B10000110, B10001001, B10001001, B10001011, B11110101};');
    Blockly.Arduino.addDefine('matrix_tone_b', 'const byte matrix_tone_b[8] PROGMEM = {B01110000, B11000000, B10000110, B11000000, B01100110, B00010110, B00110110, B11100110};');
    var code = '';
    var lastTempo = 0;
    var tempoLen = 0;
    console.log(tempo);
    if (tempo.indexOf(',') > -1) {
        tempo = tempo.replaceAll('"', '').split(',');
        tempoLen = tempo.length;
    } else {
        lastTempo = tempo.replaceAll('"', '');
    }
    lastTempo = (lastTempo < 1 ? 1 : lastTempo);
    var dotMatrixArray = '';
    if (noteTone.indexOf(',') > -1) {
        noteTone = noteTone.replaceAll('"', '').split(',');
        noteSize = noteTone.length;
        for (var i = 0; i < noteTone.length; i++) {
            if (tempoLen > i)
                lastTempo = tempo[i];
            dotMatrixArray = 'matrix_tone_' + noteTone[i].substring(0, 1).toLowerCase();
            code += 'tone(%toneName%, tonehashMap.valueFor("' + noteTone[i] + '"), 240000 / %toneSpeed% / ' + lastTempo + ');\n' +
                'memcpy_P(&LEDArray, &' + dotMatrixArray + ', 8);\n' +
                'for(int index_i = 0; index_i < 8; index_i++)\n' +
                '{\n' +
                '  ' + matrixId + '.setRow(' + NO + ', index_i, LEDArray[index_i]);\n' +
                '}\n' +
                'delay(240000 / %toneSpeed% / ' + lastTempo + ');\n' +
                'noTone(%toneName%);\n';
        }
    } else {
        dotMatrixArray = 'matrix_tone_' + noteTone.substring(0, 1).toLowerCase();
        code += 'tone(%toneName%, tonehashMap.valueFor("' + noteTone + '"), 240000 / %toneSpeed% / ' + lastTempo + ');\n' +
            'memcpy_P(&LEDArray, &' + dotMatrixArray + ', 8);\n' +
            'for(int index_i = 0; index_i < 8; index_i++)\n' +
            '{\n' +
            '  ' + matrixId + '.setRow(' + NO + ', index_i, LEDArray[index_i]);\n' +
            '}\n' +
            'delay(240000 / %toneSpeed% / ' + lastTempo + ');\n' +
            'noTone(%toneName%);\n';
    }
    return code;
};

//依點陣內容顯示
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {*[]} Completed code.
 */
Blockly.Arduino["display_Matrix_LedArray"] = function (block) {
    var arrayName = block.getFieldValue('ARRAY_VAR');
    var arrayId = Blockly.Arduino.variableDB_.getName(
        arrayName,
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
    Blockly.Arduino.addVariable(arrayName, "const byte " + arrayId + "[8] = " + code, true);
    return [arrayId, Blockly.Arduino.ORDER_ATOMIC];
};

//依點陣內容顯示半寬
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {*[]} Completed code.
 */
Blockly.Arduino["display_Matrix_half_LedArray"] = function (block) {
    var arrayName = block.getFieldValue('ARRAY_VAR');
    var arrayId = Blockly.Arduino.variableDB_.getName(
        arrayName,
        Blockly.Variables.NAME_TYPE);
    var a = [];
    for (var i = 1; i < 9; i++) {
        a[i] = [];
        for (var j = 1; j < 5; j++) {
            a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (var i = 1; i < 9; i++) {
        var tmp = "B"
        for (var j = 1; j < 5; j++) {
            tmp += a[i][j];
        }
        code += tmp + ((i != 8) ? ', ' : '');
    }
    code += '};';
    Blockly.Arduino.addVariable(arrayName, "const byte " + arrayId + "[8] PROGMEM = " + code, true);
    return [arrayId, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設數字字元
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|*)[]} Completed code.
 */
Blockly.Arduino["Matrix_char_digital"] = function (block) {
    var dropdown_char_digital_ = this.getFieldValue('char_digital_');
    var code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += 'B' + hex28bin(dropdown_char_digital_.substr(i, 2)) + ((i != 14) ? ', ' : '');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_char_' + dropdown_char_digital_, "const byte " + 'matrix_char_' + dropdown_char_digital_ + "[8] PROGMEM = " + code);
    return ['matrix_char_' + dropdown_char_digital_, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設大寫英文字元
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|*)[]} Completed code.
 */
Blockly.Arduino["Matrix_char_upper"] = function (block) {
    var dropdown_char_upper_ = this.getFieldValue('char_upper_');
    var code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += 'B' + hex28bin(dropdown_char_upper_.substr(i, 2)) + ((i != 14) ? ', ' : '');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_char_' + dropdown_char_upper_, "const byte " + 'matrix_char_' + dropdown_char_upper_ + "[8] PROGMEM = " + code);
    return ['matrix_char_' + dropdown_char_upper_, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設小寫英文字元
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|*)[]} Completed code.
 */
Blockly.Arduino["Matrix_char_lower"] = function (block) {
    var dropdown_char_lower_ = this.getFieldValue('char_lower_');
    var code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += 'B' + hex28bin(dropdown_char_lower_.substr(i, 2)) + ((i != 14) ? ', ' : '');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_char_' + dropdown_char_lower_, "const byte " + 'matrix_char_' + dropdown_char_lower_ + "[8] PROGMEM = " + code);
    return ['matrix_char_' + dropdown_char_lower_, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設圖案
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|*)[]} Completed code.
 */
Blockly.Arduino["Matrix_img"] = function (block) {
    var dropdown_img_ = this.getFieldValue('img_');
    var code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += 'B' + hex28bin(dropdown_img_.substr(i, 2)) + ((i != 14) ? ', ' : '');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_char_' + dropdown_img_, "const byte " + 'matrix_char_' + dropdown_img_ + "[8] PROGMEM = " + code);
    return ['matrix_char_' + dropdown_img_, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設半形數字
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|*)[]} Completed code.
 */
Blockly.Arduino["Matrix_char_digital_half"] = function (block) {
    var dropdown_char_half_ = this.getFieldValue('char_digital_half_');
    var code = '{';
    for (var i = 0; i < 8; i++) {
        code += '"' + hex24bin(dropdown_char_half_.substr(i, 1)) + ((i != 7) ? '", ' : '"');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_char_half_' + dropdown_char_half_, "const String " + 'matrix_char_half_' + dropdown_char_half_ + "[8] = " + code);
    return ['matrix_char_half_' + dropdown_char_half_, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設半型大寫英文
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|*)[]} Completed code.
 */
Blockly.Arduino["Matrix_char_upper_half"] = function (block) {
    var dropdown_char_half_ = this.getFieldValue('char_upper_half_');
    var code = '{';
    for (var i = 0; i < 8; i++) {
        code += '"' + hex24bin(dropdown_char_half_.substr(i, 1)) + ((i != 7) ? '", ' : '"');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_char_half_' + dropdown_char_half_, "const String " + 'matrix_char_half_' + dropdown_char_half_ + "[8] = " + code);
    return ['matrix_char_half_' + dropdown_char_half_, Blockly.Arduino.ORDER_ATOMIC];
};

//顯示預設半型小寫英文
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|*)[]} Completed code.
 */
Blockly.Arduino["Matrix_char_lower_half"] = function (block) {
    var dropdown_char_half_ = this.getFieldValue('char_lower_half_');
    var code = '{';
    for (var i = 0; i < 8; i++) {
        code += '"' + hex24bin(dropdown_char_half_.substr(i, 1)) + ((i != 7) ? '", ' : '"');
    }
    code += '};';
    Blockly.Arduino.addDefine('matrix_char_half_' + dropdown_char_half_, "const String " + 'matrix_char_half_' + dropdown_char_half_ + "[8] = " + code);
    return ['matrix_char_half_' + dropdown_char_half_, Blockly.Arduino.ORDER_ATOMIC];
};
