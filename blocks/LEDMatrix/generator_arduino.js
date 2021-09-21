/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.LEDMatrix');

goog.require('Blockly.Arduino');

//Max7219点阵初始化
Blockly.Arduino["MAX7219_init"] = function () {
    var pin_cs = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var hDisplays = Blockly.Arduino.valueToCode(this, 'hDisplays', Blockly.Arduino.ORDER_ATOMIC);
    var vDisplays = Blockly.Arduino.valueToCode(this, 'vDisplays', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
    Blockly.Arduino.definitions_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
    Blockly.Arduino.definitions_['include_Max72xxPanel'] = '#include <Max72xxPanel.h>';
    Blockly.Arduino.definitions_['var_declare_Max72xxPanel'] = 'Max72xxPanel ' + matrixName + ' = Max72xxPanel(' + pin_cs + ',' + hDisplays + ',' + vDisplays + ');';
    var code = '';
    return code;
};

//HT16K33点阵初始化
Blockly.Arduino["HT16K33_Init"] = function () {
    var SDA = this.getFieldValue('SDA');
    var SCL = this.getFieldValue('SCL');
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    Blockly.Arduino.definitions_['include_Matrix'] = '#include <Matrix.h>';
    Blockly.Arduino.definitions_['var_declare' + matrixName] = 'Matrix ' + matrixName + '(' + SDA + ',' + SCL + ');';
    Blockly.Arduino.setups_['setup_' + matrixName] = matrixName + '.begin(0x70);';
    var code = matrixName + '.clear();\n';
    return code;
};

//点阵屏画点
Blockly.Arduino["display_Matrix_DrawPixel"] = function () {
    var matrixType = this.getFieldValue('TYPE');
    var pos_x = Blockly.Arduino.valueToCode(this, 'XVALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    var pos_y = Blockly.Arduino.valueToCode(this, 'YVALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var dropdown_type = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    if (matrixType == "HT16K33") {
        var code = matrixName + '.drawPixel(' + pos_x + ',7-' + pos_y + ',' + dropdown_type + ');\n'
    } else {
        var code = matrixName + '.drawPixel(' + pos_x + ',' + pos_y + ',' + dropdown_type + ');\n'
    }
    code += matrixName + '.write();\n';
    return code;
};

//点阵屏滚动显示文本
Blockly.Arduino["display_Matrix_TEXT"] = function () {
    var matrixType = this.getFieldValue('TYPE');
    var matrixName = "myMatrix";
    var textString = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ASSIGNMENT);
    var speed = Blockly.Arduino.valueToCode(this, 'Speed', Blockly.Arduino.ORDER_ATOMIC);
    var code = matrixName + '.scrollMessage(' + textString + ',' + speed + ');\n'
    return code;
};

//点阵屏显示文本
Blockly.Arduino["display_Matrix_print"] = function () {
    var matrixType = this.getFieldValue('TYPE');
    var matrixName = "myMatrix";
    var textString = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ASSIGNMENT);
    var code = matrixName + '.setCursor(0, 0);\n'
    code += matrixName + '.print(' + textString + ');\n'
    code += matrixName + '.write();\n'
    return code;
};

//点阵屏显示_显示图案
Blockly.Arduino["display_Matrix_DisplayChar"] = function () {
    var matrixType = this.getFieldValue('TYPE');
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.definitions_['var_declare_LEDArray'] = 'uint8_t  LEDArray[8];';
    var code = '';
    code += 'memcpy_P(&LEDArray, &' + dotMatrixArray + ', 8);\n';
    code += 'for(int index_i=0; index_i<8; index_i++)\n';
    code += '{\n'
    //code+='  LEDArray[index_i]='+dotMatrixArray+'[index_i];\n';
    code += '  for(int index_j=' + (NO) + '*8; index_j<' + (NO) + '*8+8; index_j++)\n'
    //code+='  for(int index_j=7; index_j>=0; index_j--)\n'
    code += '  {\n'
    code += '    if((LEDArray[index_i]&0x01)>0)\n';
    if (matrixType == "HT16K33") {
        code += '      ' + matrixName + '.drawPixel(index_j, index_i,1);\n';
        code += '    else\n      ' + matrixName + '.drawPixel(index_j, index_i,0);\n';
    } else {
        code += '      ' + matrixName + '.drawPixel(index_j, 7-index_i,1);\n';
        code += '    else\n      ' + matrixName + '.drawPixel(index_j, 7-index_i,0);\n';
    }
    code += '    LEDArray[index_i] = LEDArray[index_i]>>1;\n';
    code += '  }  \n'
    code += '}\n'
    code += matrixName + '.write();\n'
    return code;
};

//点阵屏显示_点阵数组
Blockly.Arduino["display_Matrix_LedArray"] = function () {
    var varName = this.getFieldValue('VAR');
    var a = [];
    for (var i = 1; i < 9; i++) {
        a[i] = [];
        for (var j = 1; j < 9; j++) {
            a[i][9 - j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (var i = 1; i < 9; i++) {
        var tmp = ""
        for (var j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 8) ? ',' : '');
    }
    code += '};';
    //Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
    Blockly.Arduino.definitions_[varName] = "const uint8_t " + varName + "[8] PROGMEM =" + code;
    return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

//点阵设置亮度
Blockly.Arduino["display_Matrix_Brightness"] = function () {
    var matrixType = this.getFieldValue('TYPE');
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var BRIGHTNESS = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
    if (matrixType == "HT16K33") {
        var code = matrixName + '.setBrightness(' + BRIGHTNESS + ');\n';
    } else {
        var code = matrixName + '.setIntensity(' + BRIGHTNESS + ');\n';
    }
    return code;
};

//点阵 全亮/全灭/关闭/开启
Blockly.Arduino["display_Matrix_fillScreen"] = function () {
    var matrixType = this.getFieldValue('TYPE');
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var FILLSCREEN_TYPE = this.getFieldValue('FILLSCREEN_TYPE');
    var code = matrixName + '.' + FILLSCREEN_TYPE + ';\n'
    code += matrixName + '.write();\n';
    return code;
};

//点阵屏旋转
Blockly.Arduino["display_Max7219_Rotation"] = function () {
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var dropdown_type = this.getFieldValue('Rotation_TYPE');
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var code = matrixName + '.setRotation(' + NO + ',' + dropdown_type + ');\n'
    return code;
};

//点阵屏位置
Blockly.Arduino["display_Max7219_setPosition"] = function () {
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    var X = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
    var Y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);
    var code = matrixName + '.setPosition(' + NO + ',' + X + ',' + Y + ');\n'
    return code;
};

//点阵屏旋转
Blockly.Arduino["display_HT16K33_Rotation"] = function () {
    //var matrixName = this.getFieldValue('matrixName');
    var matrixName = "myMatrix";
    var dropdown_type = this.getFieldValue('Rotation_TYPE');
    var code = matrixName + '.setRotation(4-' + dropdown_type + ');\n'
    return code;
};

//点阵屏 图案数组
Blockly.Arduino["LedArray"] = function () {
    var varName = this.getFieldValue('VAR');
    var a = [];
    for (var i = 1; i < 9; i++) {
        a[i] = [];
        for (var j = 1; j < 9; j++) {
            a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (var i = 1; i < 9; i++) {
        var tmp = ""
        for (var j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 8) ? ',' : '');
    }
    code += '};\n';
    Blockly.Arduino.definitions_[varName] = "byte " + varName + "[]=" + code;
    return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

//点阵屏预设图案
Blockly.Arduino["Matrix_img"] = function () {
    var dropdown_img_ = this.getFieldValue('img_');
    var code = '"' + dropdown_img_ + '"';
    code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += '0x' + dropdown_img_.substr(i, 2) + ((i != 14) ? ',' : '');
    }
    code += '};\n';
    Blockly.Arduino.definitions_['matrix_img_' + dropdown_img_] = "const uint8_t " + 'matrix_img_' + dropdown_img_ + "[8] PROGMEM=" + code;
    return ['matrix_img_' + dropdown_img_, Blockly.Arduino.ORDER_ATOMIC];
};
