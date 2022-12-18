/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.I2CSensors');

goog.require('Blockly.Arduino');

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['I2C_SCAN'] = function (block) {
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
Blockly.Arduino['I2C_QMC5883L_SETUP'] = function (block) {
    var i2cAddr = block.getFieldValue('QMC5883L_ADDR');
    var i2cQMC5883LDeclareCode =
        'QMC5883LCompass compass;';
    var i2cQMC5883LSetupCode = 'compass.setADDR(' + i2cAddr + ');\n  compass.init();';

    Blockly.Arduino.addInclude('QMC5883L_inc', '#include <QMC5883LCompass.h>');

    if (Blockly.Arduino.definitions_['QMC5883L_tag'] !== undefined) {
        Blockly.Arduino.definitions_['QMC5883L_tag'] = i2cQMC5883LDeclareCode;
    } else {
        Blockly.Arduino.addDeclaration('QMC5883L_tag', i2cQMC5883LDeclareCode);
    }

    Blockly.Arduino.addSetup('QMC5883L_tag', i2cQMC5883LSetupCode, true);

    var i2cPins = Blockly.Arduino.Boards.selected.i2cPins.Wire;
    for (var i = 0; i < i2cPins.length; i++) {
        Blockly.Arduino.reservePin(block, i2cPins[i][1],
            Blockly.Arduino.pinTypes.I2C, 'I2C ' + i2cPins[i][0]);
    }
    var code = '';
    return code;
};

//
Blockly.Arduino["I2C_QMC5883L_READ"] = function (block) {
    var code = 'compass.read();\n';
    return code;
}

//
Blockly.Arduino["I2C_QMC5883L_FUN"] = function (block) {
    var fun = this.getFieldValue('FUN');
    var code = 'compass.get' + fun + '()';
    return code;
}

//
Blockly.Arduino["I2C_QMC5883L_AZIUMTH"] = function (block) {
    var code = 'compass.getAzimuth()';
    return code;
}

//
Blockly.Arduino["I2C_QMC5883L_BEARING"] = function (block) {
    var azimuthVar = this.getFieldValue('AZIMUTH');
    var code = 'compass.getBearing(' + azimuthVar + ')';
    return code;
}

//
Blockly.Arduino["I2C_QMC5883L_DIRECTION"] = function (block) {
    var azimuthVar = this.getFieldValue('AZIMUTH');
    var arrayVar = Blockly.Arduino.valueToCode(
        block, 'ARRAY', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = 'compass.getDirection(' + arrayVar + ', ' + azimuthVar + ');\n';
    return code;
}

//
Blockly.Arduino["I2C_QMC5883L_SMOOTHING"] = function (block) {
    var steps = this.getFieldValue('STEPS');
    var advanced = this.getFieldValue('ADVANCED');
    var code = 'compass.setSmoothing(' + steps + ', ' + advanced + ');\n';
    return code;
}

//
Blockly.Arduino["I2C_QMC5883L_SETUP_MODE"] = function (block) {
    var mode = this.getFieldValue('MODE');
    var odr = this.getFieldValue('ODR');
    var rng = this.getFieldValue('RNG');
    var osr = this.getFieldValue('OSR');
    var code = 'compass.setMode(' + mode + ', ' + odr + ', ' + rng + ', ' + osr + ');\n';
    return code;
}
