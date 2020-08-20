/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Blocks.linkit');

goog.require('Blockly.Arduino');

/**
 * @fileoverview Generating Arduino for list blocks.
 * @author hi@vox.vg (Zhi-Wei Cai)
 */
'use strict';

goog.provide('Blockly.Arduino.linkit');

goog.require('Blockly.Arduino');

var controlch;

Blockly.Arduino.mcs = function () {
    var deviceid = Blockly.Arduino.valueToCode(this, 'DEVICEID', Blockly.Arduino.ORDER_ATOMIC) || ''
    var devicekey = Blockly.Arduino.valueToCode(this, 'DEVICEKEY', Blockly.Arduino.ORDER_ATOMIC) || ''

    deviceid = deviceid.replace(/\"/g, "");
    devicekey = devicekey.replace(/\"/g, "");

    Blockly.Arduino.definitions_['define_mcs_include2'] = '#include "MCS.h"\n';
    Blockly.Arduino.definitions_['set_MCS_device'] = 'MCSDevice mcs("' + deviceid + '", "' + devicekey + '");\n';
    var branch = Blockly.Arduino.statementToCode(this, 'CONTENT');
    branch = branch.replace(/(^\s+)|(\s+$)/g, "");

    var code = branch;

    code += "while(!mcs.connected()) { mcs.connect(); }\n";
    return code;
};

Blockly.Arduino.mcs_set_control_channel = function () {
    var control_channel_id = Blockly.Arduino.valueToCode(this, 'CONTROL_CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || ''
    control_channel_id = control_channel_id.replace(/\"/g, "");
    var type = this.getFieldValue('TYPE');
    Blockly.Arduino.setups_['mcs_add_channel' + control_channel_id] = 'mcs.addChannel(' + control_channel_id + ');';
    if (type == "boolean") {
        Blockly.Arduino.definitions_['set_MCS_control' + control_channel_id] = 'MCSControllerOnOff ' + control_channel_id + '("' + control_channel_id + '");';
    } else if (type == "category") {
        Blockly.Arduino.definitions_['set_MCS_control' + control_channel_id] = 'MCSControllerCategory ' + control_channel_id + '("' + control_channel_id + '");';
    } else if (type == "float") {
        Blockly.Arduino.definitions_['set_MCS_control' + control_channel_id] = 'MCSControllerFloat ' + control_channel_id + '("' + control_channel_id + '");';
    } else if (type == "String") {
        Blockly.Arduino.definitions_['set_MCS_control' + control_channel_id] = 'MCSControllerString ' + control_channel_id + '("' + control_channel_id + '");';
    } else {
        Blockly.Arduino.definitions_['set_MCS_control' + control_channel_id] = 'MCSControllerInteger ' + control_channel_id + '("' + control_channel_id + '");';
    }
    var code = '';
    return code;
};

Blockly.Arduino.mcs_set_display_channel = function () {
    var display_channel_id = Blockly.Arduino.valueToCode(this, 'DISPLAY_CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || ''
    display_channel_id = display_channel_id.replace(/\"/g, "");
    Blockly.Arduino.setups_['mcs_add_channel' + display_channel_id] = 'mcs.addChannel(' + display_channel_id + ');';
    var type = this.getFieldValue('TYPE');

    if (type == "boolean") {
        Blockly.Arduino.definitions_['set_MCS_display' + display_channel_id] = 'MCSDisplayOnOff ' + display_channel_id + '("' + display_channel_id + '");';
    } else if (type == "category") {
        Blockly.Arduino.definitions_['set_MCS_display' + display_channel_id] = 'MCSDisplayCategory ' + display_channel_id + '("' + display_channel_id + '");';
    } else if (type == "float") {
        Blockly.Arduino.definitions_['set_MCS_display' + display_channel_id] = 'MCSDisplayFloat ' + display_channel_id + '("' + display_channel_id + '");';
    } else if (type == "String") {
        Blockly.Arduino.definitions_['set_MCS_display' + display_channel_id] = 'MCSDisplayString ' + display_channel_id + '("' + display_channel_id + '");';
    } else {
        Blockly.Arduino.definitions_['set_MCS_display' + display_channel_id] = 'MCSDisplayInteger ' + display_channel_id + '("' + display_channel_id + '");';
    }
    var code = '';
    return code;
};

Blockly.Arduino.mcs_add_channel = function () {
    var add_channel = Blockly.Arduino.valueToCode(this, 'ADD_CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || ''
    add_channel = add_channel.replace(/\"/g, "");
    Blockly.Arduino.setups_['mcs_add_channel' + add_channel] = 'mcs.addChannel(' + add_channel + ');\n';
    var code = '';
    return code;
};

Blockly.Arduino.mcs_connected = function () {
    var code = "mcs.connected()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.mcs_reconnect = function () {
    var code = "mcs.connect();\n";
    return code;
};

Blockly.Arduino.mcs_wait_until_connected = function () {
    Blockly.Arduino.setups_['mcs_wait_until_connected'] = "while(!mcs.connected()) { mcs.connect(); }\n";
    var code = '';
    return code;
};

Blockly.Arduino.mcs_channel_valid = function () {
    var channel_valid = Blockly.Arduino.valueToCode(this, 'CHANNEL_VALID', Blockly.Arduino.ORDER_ATOMIC) || ''
    channel_valid = channel_valid.replace(/\"/g, "");
    var code = channel_valid + ".valid()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mcs_channel_value = function () {
    var channel_value = Blockly.Arduino.valueToCode(this, 'CHANNEL_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
    channel_value = channel_value.replace(/\"/g, "");

    controlch = channel_value;

    var code = channel_value + ".value()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mcs_channel2_value = function () {
    var channel_value = Blockly.Arduino.valueToCode(this, 'CHANNEL2_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
    channel_value = channel_value.replace(/\"/g, "");

    var channel2_value = Blockly.Arduino.valueToCode(this, 'SET_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
    channel2_value = channel2_value.replace(/\"/g, "");

    /*var n = Blockly.Arduino.valueToCode(Blockly.Arduino.mcs_channel_value, 'CHANNEL_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
    n = n.replace(/\"/g, "");*/
    var code = channel_value + '.set(' + channel2_value + ');\n';
    return code;
};

Blockly.Arduino.mcs_process = function () {
    Blockly.Arduino.setups_['add_serialport'] = 'Serial.begin(9600);';

    var code = 'while (!mcs.connected()) {\n';
    code = code + '  mcs.connect();\n';
    code = code + '  if (mcs.connected()) { Serial.println("MCS Reconnected."); }\n';
    code = code + '}\n';
    code = code + 'mcs.process(100);\n';
    return code;
};
Blockly.Arduino.mcs_channel_wait_until_read_value = function () {
    var channel = Blockly.Arduino.valueToCode(this, 'CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || ''
    channel = channel.replace(/\"/g, "");
    Blockly.Arduino.setups_['mcs_channel_wait_until_read_value' + channel] = "while(!" + channel + ".valid()) { " + channel + ".value(); }\n";
    var code = '';
    return code;
};

Blockly.Arduino.mcs_channel_updated = function () {
    var channel_updated = Blockly.Arduino.valueToCode(this, 'CHANNEL_UPDATED', Blockly.Arduino.ORDER_ATOMIC) || ''
    channel_updated = channel_updated.replace(/\"/g, "");
    var code = channel_updated + ".updated()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------- MCS Lite -----------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//

Blockly.Arduino.mcslite = function () {
    var deviceid = Blockly.Arduino.valueToCode(this, 'DEVICEIDL', Blockly.Arduino.ORDER_ATOMIC) || ''
    var devicekey = Blockly.Arduino.valueToCode(this, 'DEVICEKEYL', Blockly.Arduino.ORDER_ATOMIC) || ''
    var serv = Blockly.Arduino.valueToCode(this, 'SERV', Blockly.Arduino.ORDER_ATOMIC) || ''
    var port = Blockly.Arduino.valueToCode(this, 'PORT', Blockly.Arduino.ORDER_ATOMIC) || ''

    deviceid = deviceid.replace(/\"/g, "");
    devicekey = devicekey.replace(/\"/g, "");
    serv = serv.replace(/\"/g, "");
    Blockly.Arduino.definitions_['define_mcs_include2'] = '#include "MCS.h"\n';
    Blockly.Arduino.definitions_['set_MCS_device'] = 'MCSLiteDevice mcs("' + deviceid + '", "' + devicekey + '", "' + serv + '", ' + port.toString() + ');\n';
    var branch = Blockly.Arduino.statementToCode(this, 'CONTENT');
    branch = branch.replace(/(^\s+)|(\s+$)/g, "");

    var code = branch;

    code += "while(!mcs.connected()) { mcs.connect(); }\n";
    return code;
    /*code += 'request += "GET /deviceId/";\n'
    code += 'request += String(deviceId);\n'
    code += 'request += "/deviceKey/";\n'
    code += 'request += String(deviceKey);\n'
    code += 'request += "/viewer HTTP/1.1\\r\\n";\n'
    code += 'request += "Upgrade: websocket\\r\\n";\n'
    code += 'request += "Connection: Upgrade\\r\\n";\n'
    code += 'request += "Sec-WebSocket-Version: 13\\r\\n";\n'
    code += 'request += "Sec-WebSocket-Key: L159VM0TWUzyDxwJEIEzjw==\\r\\n";\n'
    code += 'request += "Host: ";\n'
    code += 'request += String(server);\n'
    code += 'request += "\\r\\nOrigin: null\\r\\n\\r\\n";\n'*/
};

//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------- End of MCSLite ---------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------