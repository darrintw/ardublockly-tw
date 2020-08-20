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

Blockly.Arduino['linkit_wifi_wait_until_ready'] = function () {

    var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
    var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
    ssid = ssid.replace(/\"/g, "");
    password = password.replace(/\"/g, "");

    Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
    Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
    Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

    var code = 'while (WiFi.begin(_lwifi_ssid, _lwifi_pass) != WL_CONNECTED) { delay(1000); }\n';

    return code;
};

Blockly.Arduino['linkit_wifi_ready_advanced'] = function () {

    var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
    var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
    ssid = ssid.replace(/\"/g, "");
    password = password.replace(/\"/g, "");

    Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
    Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
    Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

    var code = "(WiFi.begin(_lwifi_ssid, _lwifi_pass) == WL_CONNECTED)";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['linkit_wifi_ready'] = function () {
    var code = "(WiFi.begin(_lwifi_ssid, _lwifi_pass) == WL_CONNECTED)";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['linkit_wifi'] = function () {

    var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
    var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
    ssid = ssid.replace(/\"/g, "");
    password = password.replace(/\"/g, "");

    Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
    Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
    Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

    var code = "WiFi.begin(_lwifi_ssid, _lwifi_pass)";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['linkit_wifi_disconnect'] = function () {
    var code = "WiFi.disconnect();";
    return code;
};

Blockly.Arduino['linkit_wifi_ignore_result'] = function () {

    var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
    var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
    ssid = ssid.replace(/\"/g, "");
    password = password.replace(/\"/g, "");

    Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
    Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
    Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

    Blockly.Arduino.setups_['define_linkit_wifi_setup'] = 'WiFi.begin(_lwifi_ssid, _lwifi_pass);';

    var code = "\n";
    return code;
};

Blockly.Arduino['linkit_wifi_status'] = function () {
    var code = this.getFieldValue('String');
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
