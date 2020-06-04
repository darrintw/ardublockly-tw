/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */
'use strict';

goog.provide('Blockly.Arduino.I2CLCD');

goog.require('Blockly.Arduino');


function initI2CLCD(block, i2cAddr, replace, row, col) {
    var i2cLCDDeclareCode =
        'LiquidCrystal_I2C I2CLCD( ' +
        i2cAddr +
        ', 2, 1, 0, 4, 5, 6, 7, 3, POSITIVE);';
    var i2cLCDSetupCode = 'I2CLCD.begin(' + col + ',' + row + ');';

    Blockly.Arduino.addInclude('I2CLCD_tag', '#include <Wire.h>\n#include <LiquidCrystal_I2C.h>');

    if (replace === true && Blockly.Arduino.definitions_['I2CLCD_tag'] !== undefined) {
        Blockly.Arduino.definitions_['I2CLCD_tag'] = i2cLCDDeclareCode;
    } else {
        Blockly.Arduino.addDeclaration('I2CLCD_tag', i2cLCDDeclareCode);
    }

    Blockly.Arduino.addSetup('I2CLCD_tag', i2cLCDSetupCode, replace);

    var i2cPins = Blockly.Arduino.Boards.selected.i2cPins.Wire;
    for (var i = 0; i < i2cPins.length; i++) {
        Blockly.Arduino.reservePin(block, i2cPins[i][1],
            Blockly.Arduino.PinTypes.I2C, 'I2C ' + i2cPins[i][0]);
    }
}
/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {null} Completed code.
 */
Blockly.Arduino['I2CLCD_scan'] = function (block) {
    Blockly.Arduino.addInclude("I2CSCAN", "#include <Wire.h>")
    var code = '  Serial.begin(9600);\n' +
        '    while (!Serial) { } \n' +
        '    Serial.println (); \n' +
        '    Serial.println ("I2C scanner. Scanning ..."); \n' +
        '    byte count = 0; \n' +
        '    Wire.begin(); \n' +
        '    for (byte i = 8; i < 120; i++) { \n' +
        '        Wire.beginTransmission (i); \n' +
        '        if (Wire.endTransmission () == 0) { \n' +
        '          Serial.print ("Found address: "); \n' +
        '          Serial.print (i, DEC); \n' +
        '          Serial.print (" (0x"); \n' +
        '          Serial.print (i, HEX); \n' +
        '          Serial.println (")"); \n' +
        '          count++; \n' +
        '          delay (1); // maybe unneeded? \n' +
        '        } // end of good response \n' +
        '    } // end of for loop \n' +
        '    Serial.println ("Done."); \n' +
        '    Serial.print ("Found "); \n' +
        '    Serial.print (count, DEC); \n' +
        '    Serial.println (" device(s).");';
    Blockly.Arduino.addSetup("I2CSCAN", code, true);
    return null;
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
/*
Blockly.Arduino['I2CLCD_printLine'] = function (block) {
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var row = block.getFieldValue('ROW');

    var func = [];
    func.push('String ' + Blockly.Arduino.DEF_FUNC_NAME + '(String content, int width) {');
    func.push('  int len = content.length();');
    func.push('  for(int i = 0;i < (width - len);i++)');
    func.push('    content += " ";');
    func.push('  return content;');
    func.push('}');
    var funcName = Blockly.Arduino.addFunction(
        '__rightPaddingStr', func.join('\n'));

    var code =
        'I2CLCD.setCursor(0, ' + row + ');\n' +
        'I2CLCD.print(__rightPaddingStr(String(' + content + '), 16));\n';
    //initI2CLCD(block, 0x3F, false);
    return code;
};
*/

Blockly.Arduino['I2CLCD_move'] = function (block) {
    var x = Blockly.Arduino.valueToCode(
        block, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var y = Blockly.Arduino.valueToCode(
        block, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'I2CLCD.setCursor(' + x + ', ' + y + ');\n'
    //initI2CLCD(block, 0x3F, false);
    return code;
};

Blockly.Arduino['I2CLCD_clear'] = function (block) {

    var code = 'I2CLCD.clear();\n'
    //initI2CLCD(block, 0x3F, false);
    return code;
};

Blockly.Arduino['I2CLCD_print'] = function (block) {
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'I2CLCD.print(' + content + ');\n'
    //initI2CLCD(block, 0x3F, false);
    return code;
};

Blockly.Arduino['I2CLCD_backlightOn'] = function (block) {
    var code = 'I2CLCD.backlight();\n';
    //initI2CLCD(block, 0x3F, false);
    return code;
};

Blockly.Arduino['I2CLCD_backlightOff'] = function (block) {
    var code = 'I2CLCD.noBacklight();\n';
    //initI2CLCD(block, 0x3F, false);
    return code;
};
