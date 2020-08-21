/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.linkitbeacon');

goog.require('Blockly.Arduino');

var controlch;

Blockly.Arduino["linkit_ble_eddy"] = function () {
    var url = Blockly.Arduino.valueToCode(this, 'URL', Blockly.Arduino.ORDER_ATOMIC) || ''
    var protocol = this.getFieldValue('TYPE');
    url = url.replace(/\"/g, "");

    // http://a.bc
    if (url.length < 11 ||
        (!url.startsWith("http://") &&
            !url.startsWith("https://"))) {
        return '// ' + Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_EDDY_URL_INVALID;
    }

    var eddyType = "";
    if (url.startsWith("http://")) {
        eddyType = "EDDY_HTTP";
        url = url.substring(7);
    } else {
        eddyType = "EDDY_HTTPS";
        url = url.substring(8);
    }

    if (url.length > 17) {
        url = url.substring(0, 17);
    }

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
    Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';

    Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
    Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';

    Blockly.Arduino.setups_['define_linkit_ble_beacon_advertisement_setup'] = 'LBLEAdvertisementData __beaconData;';
    Blockly.Arduino.setups_['define_linkit_ble_beacon_config_setup'] = '__beaconData.configAsEddystoneURL(' + eddyType + ', "' + url + '");';
    Blockly.Arduino.setups_['define_linkit_ble_beacon_advertisement_advertise'] = 'LBLEPeripheral.advertise(__beaconData);';

    return '';
}

Blockly.Arduino["linkit_ble_ibeacon"] = function () {

    var uuid = Blockly.Arduino.valueToCode(this, 'UUID', Blockly.Arduino.ORDER_ATOMIC) || ''
    var majorId = Blockly.Arduino.valueToCode(this, 'MAJOR', Blockly.Arduino.ORDER_ATOMIC) || ''
    var minorId = Blockly.Arduino.valueToCode(this, 'MINOR', Blockly.Arduino.ORDER_ATOMIC) || ''
    var rssi = Blockly.Arduino.valueToCode(this, 'RSSI', Blockly.Arduino.ORDER_ATOMIC) || ''
    uuid = uuid.replace(/\"/g, "");
    majorId = majorId.replace(/\"/g, "");
    minorId = minorId.replace(/\"/g, "");
    rssi = rssi.replace(/\"/g, "");

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
    Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';
    Blockly.Arduino.definitions_['define_linkit_ble_ibeacon_init'] = 'LBLEAdvertisementData __beaconData;';

    Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
    Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';

    Blockly.Arduino.setups_['define_linkit_ble_ibeacon_config'] = '__beaconData.configAsIBeacon("' + uuid + '", ' + majorId + ', ' + minorId + ', ' + rssi + ');';
    Blockly.Arduino.setups_['define_linkit_ble_ibeacon_advertise'] = 'LBLEPeripheral.advertise(__beaconData);';

    var code = "\n";
    return code;
};