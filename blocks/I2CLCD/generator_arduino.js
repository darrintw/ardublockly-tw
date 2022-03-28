/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */
'use strict';

goog.provide('Blockly.Arduino.I2CLCD');

goog.require('Blockly.Arduino');


function initI2CLCD(block, i2cAddr, replace, row, col) {
    var i2cLCDDeclareCode =
        'LiquidCrystal_I2C I2CLCD(' + i2cAddr + ', ' + col + ', ' + row + ');';
    var i2cLCDSetupCode = 'I2CLCD.begin();';

    Blockly.Arduino.addInclude('Wire_inc', '#include <Wire.h>');
    Blockly.Arduino.addInclude('LiquidCrystal_I2C_inc', '#include <LiquidCrystal_I2C.h>');

    if (replace === true && Blockly.Arduino.definitions_['I2CLCD_tag'] !== undefined) {
        Blockly.Arduino.definitions_['I2CLCD_tag'] = i2cLCDDeclareCode;
    } else {
        Blockly.Arduino.addDeclaration('I2CLCD_tag', i2cLCDDeclareCode);
    }

    Blockly.Arduino.addSetup('I2CLCD_tag', i2cLCDSetupCode, replace);

    var i2cPins = Blockly.Arduino.Boards.selected.i2cPins.Wire;
    for (var i = 0; i < i2cPins.length; i++) {
        Blockly.Arduino.reservePin(block, i2cPins[i][1],
            Blockly.Arduino.pinTypes.I2C, 'I2C ' + i2cPins[i][0]);
    }
}

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
    initI2CLCD(block, i2cAddr, true, row, col);
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
    console.log(content);
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
    var tempoLen = 1;
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
                'delay((240000 / %toneSpeed% * ' + lastTempo + '));\n' +
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
