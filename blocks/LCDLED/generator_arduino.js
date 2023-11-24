/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.I2CLCD');
goog.provide('Blockly.Arduino.LEDMatrix');
goog.provide('Blockly.Arduino.WS2812Leds');

goog.require('Blockly.Arduino');

// LCD
/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['I2CLCD_scan'] = function (block) {
    Blockly.Arduino.addInclude("Wire_inc", "#include <Wire.h>")
    var setup = 'Wire.begin();\n' +
        '  Serial.begin(9600);\n' +
        '  while (!Serial);\n' +
        '  Serial.println("\\nI2C 掃描器");\n' +
        '  Serial.print("SDA腳位: ");\n' +
        '  Serial.println(SDA);\n' +
        '  Serial.print("SCL腳位: ");\n' +
        '  Serial.println(SCL);';
    Blockly.Arduino.addSetup("I2CSCAN", setup, true);
    var code = '  byte error, address;\n' +
        '  int nDevices;\n' +
        '\n' +
        '  Serial.println("掃描中...");\n' +
        '\n' +
        '  nDevices = 0;\n' +
        '  for (address = 1; address < 127; address++ )\n' +
        '  {\n' +
        '    /*\n' +
        '      使用 Wire.endTransmission(addreee)確認在該位址是否有資料\n' +
        '    */\n' +
        '    Wire.beginTransmission(address);\n' +
        '    error = Wire.endTransmission();\n' +
        '\n' +
        '    if (error == 0)\n' +
        '    {\n' +
        '      Serial.print("在 0x");\n' +
        '      if (address < 16)\n' +
        '        Serial.print("0");\n' +
        '      Serial.print(address, HEX);\n' +
        '      Serial.println(" 找到I2C設備！");\n' +
        '\n' +
        '      nDevices++;\n' +
        '    }\n' +
        '    else if (error == 4)\n' +
        '    {\n' +
        '      Serial.print("0x");\n' +
        '      if (address < 16)\n' +
        '        Serial.print("0");\n' +
        '      Serial.print(address, HEX);\n' +
        '      Serial.println(" 發生未知錯誤");\n' +
        '    }\n' +
        '  }\n' +
        '  if (nDevices == 0)\n' +
        '  {\n' +
        '    Serial.println("未找到任何I2C設備\\n");\n' +
        '  }\n' +
        '  else\n' +
        '  {\n' +
        '    Serial.println("完成\\n");\n' +
        '  }\n' +
        '\n' +
        '  delay(5000); // 每5秒掃描一次';
    return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['I2CLCD_setup'] = function (block) {
    var i2cAddr = block.getFieldValue('I2C_ADDR');
    var row = block.getFieldValue('ROW');
    var col = block.getFieldValue('COL');
    var i2cLCDDeclareCode =
        'LiquidCrystal_I2C I2CLCD(' + i2cAddr + ', ' + col + ', ' + row + ');';
    var i2cLCDSetupCode = 'I2CLCD.begin();';

    Blockly.Arduino.addInclude('Wire_inc', '#include <Wire.h>');
    Blockly.Arduino.addInclude('LiquidCrystal_I2C_inc', '#include <LiquidCrystal_I2C.h>');

    if (Blockly.Arduino.definitions_['I2CLCD_tag'] !== undefined) {
        Blockly.Arduino.definitions_['I2CLCD_tag'] = i2cLCDDeclareCode;
    } else {
        Blockly.Arduino.addDeclaration('I2CLCD_tag', i2cLCDDeclareCode);
    }

    Blockly.Arduino.addSetup('I2CLCD_tag', i2cLCDSetupCode, true);

    var i2cPins = Blockly.Arduino.Boards.selected.i2cPins.Wire;
    for (var i = 0; i < i2cPins.length; i++) {
        Blockly.Arduino.reservePin(block, i2cPins[i][1],
            Blockly.Arduino.pinTypes.I2C, 'I2C ' + i2cPins[i][0]);
    }
    var code = '';
    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */

Blockly.Arduino['I2CLCD_move'] = function (block) {
    var x = Blockly.Arduino.valueToCode(
        block, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var y = Blockly.Arduino.valueToCode(
        block, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'I2CLCD.setCursor(' + x + ', ' + y + ');\n'
    return code;
};

Blockly.Arduino['I2CLCD_clear'] = function (block) {

    var code = 'I2CLCD.clear();\n'
    return code;
};

Blockly.Arduino['I2CLCD_clear_y'] = function (block) {
    var y = Blockly.Arduino.valueToCode(
        block, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = 'I2CLCD.setCursor(0, ' + y + ');\n' +
        'I2CLCD.print("                    ");\n'
    return code;
};

Blockly.Arduino['I2CLCD_print'] = function (block) {
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'I2CLCD.print(' + content + ');\n'
    return code;
};

var lcd_img_map = [
    ["0", "040e150404040404"],
    ["1", "0404040404150e04"],
    ["2", "0004081f1f080400"],
    ["3", "0004021f1f020400"],
    ["4", "1818070808080807"]
]

Blockly.Arduino['I2CLCD_createChar'] = function (block) {
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var img_index = 0;
    for (var i = 0; i < lcd_img_map.length; i++) {
        if (lcd_img_map[i][1] === content) {
            img_index = lcd_img_map[i][0];
            break;
        }
    }
    var code = 'I2CLCD.write(byte(' + img_index + '));\n'
    return code;
};

//顯示預設圖案
Blockly.Arduino["I2CLCD_img"] = function (block) {
    var dropdown_img_ = this.getFieldValue('img_');
    var code = '"' + dropdown_img_ + '"';
    code = '{';
    for (var i = 0; i < 15; i += 2) {
        code += 'B' + hex28bin(dropdown_img_.substr(i, 2)).substr(3, 5) + ((i != 14) ? ', ' : '');
    }
    code += '};';
    Blockly.Arduino.addDefine('I2CLCD_img_' + dropdown_img_, "byte " + 'I2CLCD_img_' + dropdown_img_ + "[8] = " + code);
    var img_index = 0;
    for (var i = 0; i < lcd_img_map.length; i++) {
        if (lcd_img_map[i][1] === dropdown_img_) {
            img_index = lcd_img_map[i][0];
            break;
        }
    }
    code = 'I2CLCD.createChar(' + img_index + ', I2CLCD_img_' + dropdown_img_ + ');\n'
    Blockly.Arduino.addSetup('I2CLCD_img_' + dropdown_img_, code, true);
    return [dropdown_img_, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['I2CLCD_backlightOn'] = function (block) {
    var code = 'I2CLCD.backlight();\n';
    return code;
};

Blockly.Arduino['I2CLCD_backlightOff'] = function (block) {
    var code = 'I2CLCD.noBacklight();\n';
    return code;
};

Blockly.Arduino['I2CLCD_scroll'] = function (block) {
    var code = '';
    var scroll_dir = this.getFieldValue('SCROLL_DIR');
    if (scroll_dir == 'RIGHT') {
        code = 'I2CLCD.scrollDisplayRight();\n';
    }
    if (scroll_dir == 'LEFT') {
        code = 'I2CLCD.scrollDisplayLeft();\n';
    }
    return code;
};

/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['I2CLCD_multi_tone'] = function (block) {
    var noteTone = Blockly.Arduino.valueToCode(
        block, 'NOTE_TONE', Blockly.Arduino.ORDER_ATOMIC) || '';
    var tempo = Blockly.Arduino.valueToCode(
        block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '';
    var noteSize = 0;
    var code = '';
    var lastTempo = 0;
    var tempoLen = 0;
    if (tempo.indexOf(',') > -1) {
        tempo = tempo.replaceAll('"', '').split(',');
        tempoLen = tempo.length;
    } else {
        lastTempo = tempo.replaceAll('"', '');
    }
    lastTempo = (lastTempo < 1 ? 1 : lastTempo);

    if (noteTone.indexOf(',') > -1) {
        noteTone = noteTone.replaceAll('"', '').split(',');
        noteSize = noteTone.length;
        for (var i = 0; i < noteTone.length; i++) {
            if (tempoLen > i)
                lastTempo = tempo[i];
            code += 'tone(%toneName%, tonehashMap.valueFor("' + noteTone[i] + '"), 240000 / %toneSpeed% / ' + lastTempo + ');\n' +
                'I2CLCD.setCursor(0, 0);\n' +
                'I2CLCD.print("' + noteTone[i] + '");\n' +
                'delay(240000 / %toneSpeed% / ' + lastTempo + ');\n' +
                'noTone(%toneName%);\n';
        }
    } else {
        code += 'tone(%toneName%, tonehashMap.valueFor("' + noteTone + '"), (240000 / %toneSpeed% / ' + lastTempo + ');\n' +
            'I2CLCD.setCursor(0, 0);\n' +
            'I2CLCD.print("' + noteTone + '");\n' +
            'delay(240000 / %toneSpeed% / ' + lastTempo + ');\n' +
            'noTone(%toneName%);\n';
    }
    return code;
};

// LED Matrix
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

//依據陣列顯示半寬內容
/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino["display_Matrix_two_digital"] = function (block) {
    var matrixName = block.getFieldValue('MATRIX_VAR');
    var matrixId = Blockly.Arduino.variableDB_.getName(
        matrixName,
        Blockly.Variables.NAME_TYPE);
    var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.addDefine('matrix_char_half_69999996', 'const String matrix_char_half_69999996[8] = {"0110", "1001", "1001", "1001", "1001", "1001", "1001", "0110"};');
    Blockly.Arduino.addDefine('matrix_char_half_26222227', 'const String matrix_char_half_26222227[8] = {"0010", "0110", "0010", "0010", "0010", "0010", "0010", "0111"};');
    Blockly.Arduino.addDefine('matrix_char_half_6911124F', 'const String matrix_char_half_6911124F[8] = {"0110", "1001", "0001", "0001", "0001", "0010", "0100", "1111"};');
    Blockly.Arduino.addDefine('matrix_char_half_69161196', 'const String matrix_char_half_69161196[8] = {"0110", "1001", "0001", "0110", "0001", "0001", "1001", "0110"};');
    Blockly.Arduino.addDefine('matrix_char_half_137D9F11', 'const String matrix_char_half_137D9F11[8] = {"0001", "0011", "0111", "1101", "1001", "1111", "0001", "0001"};');
    Blockly.Arduino.addDefine('matrix_char_half_F88E1196', 'const String matrix_char_half_F88E1196[8] = {"1111", "1000", "1000", "1110", "0001", "0001", "1001", "0110"};');
    Blockly.Arduino.addDefine('matrix_char_half_698E9996', 'const String matrix_char_half_698E9996[8] = {"0110", "1001", "1000", "1110", "1001", "1001", "1001", "0110"};');
    Blockly.Arduino.addDefine('matrix_char_half_F1124888', 'const String matrix_char_half_F1124888[8] = {"1111", "0001", "0001", "0010", "0100", "1000", "1000", "1000"};');
    Blockly.Arduino.addDefine('matrix_char_half_69969996', 'const String matrix_char_half_69969996[8] = {"0110", "1001", "1001", "0110", "1001", "1001", "1001", "0110"};');
    Blockly.Arduino.addDefine('matrix_char_half_69997196', 'const String matrix_char_half_69997196[8] = {"0110", "1001", "1001", "1001", "0111", "0001", "1001", "0110"};');

    var ledStart = block.getFieldValue('LED_START');
    var ledEnd = block.getFieldValue('LED_END');

    Blockly.Arduino.addVariable('matrix_countdown', 'const bool countdown = ' + (ledStart > ledEnd ? 'true' : 'false') + ';');
    Blockly.Arduino.addVariable('matrix_start_num', 'int matrix_start_num = ' + ledStart + ';', false);
    Blockly.Arduino.addVariable('matrix_end_num', 'int matrix_end_num = ' + ledEnd + ';', false);
    var fCode = 'void ledCountDown(int now) {\n' +
        '  int secTen = now / 10;\n' +
        '  int sec = now % 10;\n' +
        '  for (int index_i = 0; index_i < 8; index_i++)\n' +
        '  {\n' +
        '    String binary_string;\n' +
        '    switch (secTen) {\n' +
        '      case 0 :\n' +
        '        binary_string = matrix_char_half_69999996[index_i];\n' +
        '        break;\n' +
        '      case 1 :\n' +
        '        binary_string = matrix_char_half_26222227[index_i];\n' +
        '        break;\n' +
        '      case 2 :\n' +
        '        binary_string = matrix_char_half_6911124F[index_i];\n' +
        '        break;\n' +
        '      case 3 :\n' +
        '        binary_string = matrix_char_half_69161196[index_i];\n' +
        '        break;\n' +
        '      case 4 :\n' +
        '        binary_string = matrix_char_half_137D9F11[index_i];\n' +
        '        break;\n' +
        '      case 5 :\n' +
        '        binary_string = matrix_char_half_F88E1196[index_i];\n' +
        '        break;\n' +
        '      case 6 :\n' +
        '        binary_string = matrix_char_half_698E9996[index_i];\n' +
        '        break;\n' +
        '      case 7 :\n' +
        '        binary_string = matrix_char_half_F1124888[index_i];\n' +
        '        break;\n' +
        '      case 8 :\n' +
        '        binary_string = matrix_char_half_69969996[index_i];\n' +
        '        break;\n' +
        '      case 9 :\n' +
        '        binary_string = matrix_char_half_69997196[index_i];\n' +
        '        break;\n' +
        '    }\n' +
        '    switch (sec) {\n' +
        '      case 0 :\n' +
        '        binary_string += matrix_char_half_69999996[index_i];\n' +
        '        break;\n' +
        '      case 1 :\n' +
        '        binary_string += matrix_char_half_26222227[index_i];\n' +
        '        break;\n' +
        '      case 2 :\n' +
        '        binary_string += matrix_char_half_6911124F[index_i];\n' +
        '        break;\n' +
        '      case 3 :\n' +
        '        binary_string += matrix_char_half_69161196[index_i];\n' +
        '        break;\n' +
        '      case 4 :\n' +
        '        binary_string += matrix_char_half_137D9F11[index_i];\n' +
        '        break;\n' +
        '      case 5 :\n' +
        '        binary_string += matrix_char_half_F88E1196[index_i];\n' +
        '        break;\n' +
        '      case 6 :\n' +
        '        binary_string += matrix_char_half_698E9996[index_i];\n' +
        '        break;\n' +
        '      case 7 :\n' +
        '        binary_string += matrix_char_half_F1124888[index_i];\n' +
        '        break;\n' +
        '      case 8 :\n' +
        '        binary_string += matrix_char_half_69969996[index_i];\n' +
        '        break;\n' +
        '      case 9 :\n' +
        '        binary_string += matrix_char_half_69997196[index_i];\n' +
        '        break;\n' +
        '    }\n' +
        '    for (int index_c = 0; index_c < 8; index_c++) {\n' +
        '      lc_matrix.setLed(0, index_i, index_c, (binary_string.substring(index_c, index_c + 1) == "0" ? LOW : HIGH));\n' +
        '    }\n' +
        '  }\n' +
        '}\n';
    Blockly.Arduino.addFunction('ledCountDown_func', fCode);
    var code = '  ledCountDown(matrix_start_num);\n' +
        '  if (countdown) {\n' +
        '    if (matrix_start_num > matrix_end_num) {\n' +
        '      matrix_start_num--;\n' +
        '    }\n' +
        '    else {\n' +
        '      matrix_start_num = 0;\n' +
        '    }\n' +
        '  }\n' +
        '  else\n' +
        '  {\n' +
        '    if (matrix_start_num < matrix_end_num) {\n' +
        '      matrix_start_num++;\n' +
        '    }\n' +
        '    else {\n' +
        '      matrix_start_num = 99;\n' +
        '    }\n' +
        '  }\n';
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
        var tmp = 'B'
        for (var j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        code += tmp + ((i != 8) ? ',' : '');
    }
    code += '};';
    Blockly.Arduino.addVariable(arrayName, 'const byte ' + arrayId + '[8] PROGMEM = ' + code, true);
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
        var tmp = '"'
        for (var j = 1; j < 5; j++) {
            tmp += a[i][j];
        }
        code += tmp + ((i != 8) ? '", ' : '"');
    }
    code += '};';
    Blockly.Arduino.addVariable(arrayName, "const String " + arrayId + "[8] PROGMEM = " + code, true);
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

//WS2812 LED

Blockly.Arduino["pixel_init_var"] = function (block) {
    var pixelName = block.getFieldValue('PIXEL_VAR');
    var pixelId = Blockly.Arduino.variableDB_.getName(
        pixelName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    /*
    var pixel_var = Blockly.Arduino.valueToCode(
        block, 'PIXEL_VAR', Blockly.Arduino.ORDER_ATOMIC) || '0';*/
    var pixel_pin = Blockly.Arduino.valueToCode(
        block, 'PIXEL_PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var pixel_number = Blockly.Arduino.valueToCode(
        block, 'PIXEL_NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';

    Blockly.Arduino.addInclude('Adafruit_NeoPixel_inc', '#include <Adafruit_NeoPixel.h>');
    var dec = 'Adafruit_NeoPixel ' + pixelId +
        ' = Adafruit_NeoPixel(' + pixel_number + ', ' + pixel_pin + ', NEO_GRB + NEO_KHZ800);'
    //Blockly.Arduino.addDeclaration(pixel_var + '_tag', dec);
    Blockly.Arduino.addVariable(pixelId, dec, true);
    var code = pixelId + '.begin();\n' +
        pixelId + '.clear();\n' +
        pixelId + '.show();\n';

    return code;
};

Blockly.Arduino["pixel_single_color"] = function (block) {
    var pixelName = block.getFieldValue('PIXEL_VAR');
    var pixelId = Blockly.Arduino.variableDB_.getName(
        pixelName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var pixel_numth = Blockly.Arduino.valueToCode(
        block, 'PIXEL_NUMTH', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var pixel_red = Blockly.Arduino.valueToCode(
        block, 'PIXEL_RED', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var pixel_green = Blockly.Arduino.valueToCode(
        block, 'PIXEL_GREEN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var pixel_blue = Blockly.Arduino.valueToCode(
        block, 'PIXEL_BLUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = pixelId + '.setPixelColor(' +
        pixel_numth + ', ' + pixelId + '.Color(' +
        pixel_red + ', ' + pixel_green + ', ' + pixel_blue + '));\n' +
        pixelId + '.show();\n';

    return code;
};

Blockly.Arduino["pixel_single_off"] = function (block) {
    var pixelName = block.getFieldValue('PIXEL_VAR');
    var pixelId = Blockly.Arduino.variableDB_.getName(
        pixelName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var pixel_numth = Blockly.Arduino.valueToCode(
        block, 'PIXEL_NUMTH', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = pixelId + '.setPixelColor(' +
        pixel_numth + ', ' + pixelId + '.Color(0, 0, 0));\n' +
        pixelId + '.show();\n';

    return code;
};

Blockly.Arduino["pixel_all_off"] = function (block) {
    var pixelName = block.getFieldValue('PIXEL_VAR');
    var pixelId = Blockly.Arduino.variableDB_.getName(
        pixelName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixelId + '.clear();\n' +
        pixelId + '.show();\n';

    return code;
};
