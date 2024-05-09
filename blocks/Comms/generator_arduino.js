'use strict';

goog.provide('Blockly.Arduino.serial');

goog.require('Blockly.Arduino');

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['serial_setup'] = function (block) {
    var serialId = block.getFieldValue('SERIAL_ID');
    var serialSpeed = block.getFieldValue('SPEED');
    var serialSetupCode = serialId + '.begin(' + serialSpeed + ');';
    Blockly.Arduino.addSetup('serial_' + serialId, serialSetupCode, true);
    return '';
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['serial_available'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = serialId + '.available()';

    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.pinTypes.SERIAL, 'SERIAL ' + serialPins[i][0]);
    }

    //Blockly.Arduino.addSetup('serial_' + serialId, 'Serial.begin(9600);', false);

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['serial_read_string'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.pinTypes.SERIAL, 'SERIAL ' + serialPins[i][0]);
    }

    var func = [];
    func.push('String ' + Blockly.Arduino.DEF_FUNC_NAME + '(HardwareSerial *serial) {');
    func.push('  String content = "";');
    func.push('  content += (char)serial->read();');
    func.push('  return content;');
    func.push('}');
    var funcName = Blockly.Arduino.addFunction('getSerialChar', func.join('\n'));

    var code = funcName + '(&' + serialId + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['serial_read_char'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.pinTypes.SERIAL, 'SERIAL ' + serialPins[i][0]);
    }
    var code = serialId + '.read()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['serial_print'] = function (block) {
    var serialId = block.getFieldValue('SERIAL_ID');
    var new_line = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.pinTypes.SERIAL, 'SERIAL_' + serialPins[i][0]);
    }
    var code;
    if (new_line) {
        code = serialId + '.println(' + content + ');\n';
    } else {
        code = serialId + '.print(' + content + ');\n';
    }
    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['serial_print_hex'] = function (block) {
    var serialId = block.getFieldValue('SERIAL_ID');
    var decimal = block.getFieldValue('STAT');
    var new_line = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.pinTypes.SERIAL, 'SERIAL_' + serialPins[i][0]);
    }

    var code;
    if (new_line) {
        code = serialId + '.println(' + content + ', ' + decimal + ');\n';
    } else {
        code = serialId + '.print(' + content + ', ' + decimal + ');\n';
    }

    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['serial_write'] = function (block) {
    var serialId = block.getFieldValue('SERIAL_ID');
    var new_line = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var serialPins = Blockly.Arduino.Boards.selected.serialPins[serialId];
    for (var i = 0; i < serialPins.length; i++) {
        Blockly.Arduino.reservePin(block, serialPins[i][1],
            Blockly.Arduino.pinTypes.SERIAL, 'SERIAL_' + serialPins[i][0]);
    }
    var code = serialId + '.write(' + content + ');\n';

    return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {null} Completed code.
 */
Blockly.Arduino['bluetooth'] = function (block) {
    var rx_pin = block.getFieldValue('RX_PIN');
    var tx_pin = block.getFieldValue('TX_PIN');
    var baudrate = block.getFieldValue('BAUDRATE');
    var bluetoothCode = 'BT.begin(' + baudrate + ');';

    Blockly.Arduino.addInclude('SoftwareSerial_inc', '#include <SoftwareSerial.h>');
    Blockly.Arduino.addDeclaration('SoftwareSerial_bt', 'SoftwareSerial BT(' + tx_pin + ', ' + rx_pin + '); //藍芽端接收腳對應Arduino傳送腳, 藍芽端傳送腳對應Arduino接收腳');
    Blockly.Arduino.addSetup('SoftwareSerial_bt', bluetoothCode, true);

    return '';
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['bluetooth_available'] = function () {
    var code = 'BT.available()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['bluetooth_read_string'] = function (block) {
    var func = [];
    func.push('String ' + Blockly.Arduino.DEF_FUNC_NAME + '(SoftwareSerial *serial) {');
    func.push('  String content = "";');
    func.push('  content += (char)serial->read();');
    func.push('  return content;');
    func.push('}');
    var funcName = Blockly.Arduino.addFunction(
        'getSoftwareSerialChar', func.join('\n'));

    var code = funcName + '(&BT)';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['bluetooth_read'] = function () {
    /*var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
        Blockly.Arduino.ORDER_NONE) || '""';*/
    var code = 'BT.read()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['bluetooth_print'] = function (block) {
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var checkbox_name = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var code;
    if (checkbox_name) {
        code = 'BT.println(' + content + ');\n';
    } else {
        code = 'BT.print(' + content + ');\n';
    }
    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['bluetooth_print_hex'] = function (block) {
    var decimal = block.getFieldValue('STAT');
    var new_line = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code;
    if (new_line) {
        code = 'BT.println(' + content + ', ' + decimal + ');\n';
    } else {
        code = 'BT.print(' + content + ', ' + decimal + ');\n';
    }

    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['bluetooth_write'] = function (block) {
    var new_line = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'BT.write(' + content + ');\n';

    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['bluetooth_at_command'] = function (block) {
    var hc_type = block.getFieldValue("HC_TYPE");
    var at_command = block.getFieldValue("CMD");
    var value = block.getFieldValue("VALUE");
    var conn = "";
    if (hc_type === "HC-05") {
        conn = "="
    }
    var code = "\"AT+" + at_command + conn + value + "\"";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['bluetooth_at_cmd'] = function (block) {
    var cmd = block.getFieldValue("CMD");

    var code = "\"" + cmd + "\"";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['softwareserial_setup'] = function (block) {
    var serialName = block.getFieldValue('SERIAL_ID');
    var serialId = Blockly.Arduino.variableDB_.getName(
        serialName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var baudrate = block.getFieldValue('BAUDRATE');
    var rx_pin = block.getFieldValue('RX_PIN');
    var tx_pin = block.getFieldValue('TX_PIN');
    var serialVarCode = 'SoftwareSerial ' + serialId + '(' + rx_pin + ',' + tx_pin + ');';
    var serialSetupCode = serialId + '.begin(' + baudrate + ');';

    Blockly.Arduino.reservePin(block, rx_pin,
        Blockly.Arduino.pinTypes.SERIAL, 'SOFTWARE SERIAL');
    Blockly.Arduino.reservePin(block, tx_pin,
        Blockly.Arduino.pinTypes.SERIAL, 'SOFTWARE SERIAL');

    Blockly.Arduino.addInclude('SoftwareSerial_inc', '#include <SoftwareSerial.h>');
    Blockly.Arduino.addVariable(serialName, serialVarCode, true);
    Blockly.Arduino.addSetup('SoftwareSerial_' + serialId, serialSetupCode, true);

    return '';
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['softwareserial_available'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = serialId + '.available()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['softwareserial_read_string'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var func = [];
    func.push('String ' + Blockly.Arduino.DEF_FUNC_NAME + '(SoftwareSerial *serial) {');
    func.push('  String content = "";');
    func.push('  content += (char)serial->read();');
    func.push('  return content;');
    func.push('}');
    var funcName = Blockly.Arduino.addFunction(
        'getSoftwareSerialChar', func.join('\n'));

    var code = funcName + '(&' + serialId + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['softwareserial_read_char'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    /*var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
        Blockly.Arduino.ORDER_NONE) || '""';*/
    var code = serialId + '.read()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['softwareserial_print'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var newline = (block.getFieldValue('NEW_LINE') === 'TRUE');

    var code = newline ?
        (serialId + '.println(' + content + ');\n') :
        (serialId + '.print(' + content + ');\n');

    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['softwareserial_print_hex'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var decimal = block.getFieldValue('STAT');
    var new_line = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code;
    if (new_line) {
        code = serialId + '.println(' + content + ', ' + decimal + ');\n';
    } else {
        code = serialId + '.print(' + content + ', ' + decimal + ');\n';
    }

    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['softwareserial_write'] = function (block) {
    var serialId = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('SERIAL_ID'),
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var new_line = (block.getFieldValue('NEW_LINE') === 'TRUE');
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = serialId + '.write(' + content + ');\n';

    return code;
};

//PS2
Blockly.Arduino["PS2_init"] = function (block) {
    var ps2Name = block.getFieldValue('VAR');
    var ps2Id = Blockly.Arduino.variableDB_.getName(
        ps2Name,
        Blockly.Variables.NAME_TYPE);
    var ps2ErrorCode = block.getFieldValue('VAR_ERROR');
    var ps2ErrorCodeId = Blockly.Arduino.variableDB_.getName(
        ps2ErrorCode,
        Blockly.Variables.NAME_TYPE);
    var clock = Blockly.Arduino.valueToCode(block, 'CLOCK', Blockly.Arduino.ORDER_ATOMIC);
    var attention = Blockly.Arduino.valueToCode(block, 'ATTENTION', Blockly.Arduino.ORDER_ATOMIC);
    var command = Blockly.Arduino.valueToCode(block, 'COMMAND', Blockly.Arduino.ORDER_ATOMIC);
    var data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.addInclude('PS2_inc', '#include <PS2X_lib.h>');
    Blockly.Arduino.addVariable(ps2Name, 'PS2X ' + ps2Id + ';', true);
    Blockly.Arduino.addVariable(ps2ErrorCode, 'int ' + ps2ErrorCodeId + ';', true);
    var setup_code = 'do { \n' +
        '    //GamePad(clock, command, attention, data, Pressures?, Rumble?)\n' +
        '    ' + ps2ErrorCodeId + ' = ' + ps2Id + ".config_gamepad(" + clock + ", " + command + ", " + attention + ", " + data + ", true, true);\n" +
        '    if (' + ps2ErrorCodeId + ' == 0) {\n' +
        '      //Serial.print(\"Gamepad found!\");\n' +
        '      break;\n' +
        '    }\n' +
        '    else {\n' +
        '      delay(100);\n' +
        '    }\n' +
        '  } while (1);\n';
    Blockly.Arduino.addSetup(ps2Name, setup_code, true);
    return '';
};

//
Blockly.Arduino["PS2_read"] = function (block) {
    var ps2Name = block.getFieldValue('VAR');
    var ps2Id = Blockly.Arduino.variableDB_.getName(
        ps2Name,
        Blockly.Variables.NAME_TYPE);
    var ps2ErrorCode = block.getFieldValue('VAR_ERROR');
    var ps2ErrorCodeId = Blockly.Arduino.variableDB_.getName(
        ps2ErrorCode,
        Blockly.Variables.NAME_TYPE);
    return ps2ErrorCodeId + ' = ' + ps2Id + ".read_gamepad(false, 0);\n";
}

//
Blockly.Arduino["PS2_Button"] = function (block) {
    var ps2Name = block.getFieldValue('VAR');
    var ps2Id = Blockly.Arduino.variableDB_.getName(
        ps2Name,
        Blockly.Variables.NAME_TYPE);
    var bt = this.getFieldValue('psbt');
    var btstate = this.getFieldValue('btstate');
    var code = ps2Id;
    if (btstate === "1") {
        code = code + ".Button(" + bt + ")";
    } else if (btstate === "2") {
        code = code + ".NewButtonState(" + bt + ")";
    } else if (btstate === "3") {
        code = code + ".ButtonReleased(" + bt + ")";
    } else if (btstate === "4") {
        code = code + ".ButtonPressed(" + bt + ")";
    }
    return [code, Blockly.Arduino.ORDER_NONE];
};

//
Blockly.Arduino["PS2_stk"] = function (block) {
    var ps2Name = block.getFieldValue('VAR');
    var ps2Id = Blockly.Arduino.variableDB_.getName(
        ps2Name,
        Blockly.Variables.NAME_TYPE);
    var stk = this.getFieldValue('psstk');
    var code = ps2Id + ".Analog(" + stk + ")";
    return [code, Blockly.Arduino.ORDER_NONE];
};

//I2C
/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['I2C_scan'] = function (block) {
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

Blockly.Arduino["I2C_init"] = function (block) {
    Blockly.Arduino.addInclude("Wire_inc", "#include <Wire.h>")
    var i2c_addr = Blockly.Arduino.valueToCode(
        block, 'I2C_ADDR', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var i2c_rec_func = Blockly.Arduino.valueToCode(block, 'REC_FUNCTION', Blockly.Arduino.ORDER_NONE);
    var i2c_req_func = Blockly.Arduino.valueToCode(block, 'REQ_FUNCTION', Blockly.Arduino.ORDER_NONE);
    var code = "Wire.begin(" + i2c_addr + ");\n" +
        "Wire.setClock(100000);\n";
    if (i2c_rec_func != "")
        code = code + "Wire.onReceive(" + i2c_rec_func + ");\n";
    if (i2c_req_func != "")
        code = code + "Wire.onRequest(" + i2c_req_func + ");\n";
    Blockly.Arduino.addSetup("Wire_begin", code, true);
    return '';
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['I2C_available'] = function () {
    var code = 'Wire.available()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['I2C_read'] = function () {
    var code = 'Wire.read()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//
Blockly.Arduino["I2C_requestFrom"] = function (block) {
    var i2c_addr = Blockly.Arduino.valueToCode(
        block, 'I2C_ADDR', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var i2c_byte = Blockly.Arduino.valueToCode(
        block, 'I2C_BYTE', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = "Wire.requestFrom(" + i2c_addr + ", " + i2c_byte + ");\n";
    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['I2C_write'] = function (block) {
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'Wire.write(' + content + ');\n';
    return code;
};

Blockly.Arduino["I2C_beginTrans"] = function (block) {
    var i2c_addr = Blockly.Arduino.valueToCode(
        block, 'I2C_ADDR', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = "Wire.beginTransmission(" + i2c_addr + ");\n";
    return code;
};


/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @return {(string)} Completed code.
 */
Blockly.Arduino['I2C_endTrans'] = function () {
    var code = 'Wire.endTransmission();\n';
    return code;
};
