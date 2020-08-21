/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.linkitble');

goog.require('Blockly.Arduino');

var controlch;

Blockly.Arduino.linkit_ble_periphral_is_written = function () {
    var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
    var characteristicType = this.getFieldValue('TYPE');
    characteristic = characteristic.replace(/\"/g, "");
    var variableName = characteristic.replace(/-/g, '_');
    variableName = variableName.toLowerCase();
    var code = '__' + variableName + '.isWritten()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_periphral_write = function () {
    var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
    var val = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
    var type = this.getFieldValue('TYPE');
    characteristic = characteristic.replace(/\"/g, "");
    var variableName = characteristic.replace(/-/g, '_');
    variableName = variableName.toLowerCase();
    if (type == "int") {
        var code = '__' + variableName + '.setValue(' + val + ');';
    } else {
        var code = '__' + variableName + '.setValue("' + val + '");';
    }
    code += "\n";
    return code;
};

Blockly.Arduino.linkit_ble_periphral_get_value = function () {
    var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
    var characteristicType = this.getFieldValue('TYPE');
    characteristic = characteristic.replace(/\"/g, "");
    var variableName = characteristic.replace(/-/g, '_');
    variableName = variableName.toLowerCase();
    var code = '__' + variableName + '.getValue()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_Characteristic = function () {
    var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
    var characteristicAttribute = this.getFieldValue('TYPE');
    var characteristicType = this.getFieldValue('CHARACTERISTIC_TYPE');
    var code = "\n";
    characteristic = characteristic.replace(/\"/g, "");
    var variableName = characteristic.replace(/-/g, '_');
    variableName = variableName.toLowerCase();

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
    Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';
    Blockly.Arduino.definitions_['define_linkit_ble_periphral_include_characteristic' + variableName] = '' + characteristicType + ' __' + variableName + '("' + characteristic + '", ' + characteristicAttribute + ');';

    Blockly.Arduino.setups_['define_linkit_ble_periphral__service_config' + variableName] = '__periphralService.addAttribute(__' + variableName + ');';

    return code;
}
Blockly.Arduino.linkit_ble_eddy = function () {
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


Blockly.Arduino.linkit_ble_periphral = function () {

    var name = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''
    var service = Blockly.Arduino.valueToCode(this, 'SERVICE', Blockly.Arduino.ORDER_ATOMIC) || ''

    name = name.replace(/\"/g, "");
    service = service.replace(/\"/g, "");

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
    Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';
    Blockly.Arduino.definitions_['define_linkit_ble_periphral_include_service'] = 'LBLEService __periphralService("' + service + '");';

    Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
    Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';

    var branch = Blockly.Arduino.statementToCode(this, 'BLE_CONTENT');
    branch = branch.replace(/(^\s+)|(\s+$)/g, "");
    Blockly.Arduino.setups_['define_linkit_ble_periphral_service_config'] = branch;

    //Blockly.Arduino.setups_['define_linkit_ble_periphral_service_config'] = '__periphralService.addAttribute(__periphralCharacteristic);';
    Blockly.Arduino.setups_['define_linkit_ble_periphral_config'] = 'LBLEPeripheral.addService(__periphralService);';
    Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_name_set'] = 'LBLEPeripheral.setName("' + name + '");';
    Blockly.Arduino.setups_['define_linkit_ble_periphral_setup'] = 'LBLEPeripheral.begin();';

    Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_setup'] = 'LBLEAdvertisementData __advertisement;';
    Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_name_setup'] = '__advertisement.configAsConnectableDevice("' + name + '");';
    Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_advertise'] = 'LBLEPeripheral.advertise(__advertisement);';

    var code = "\n";
    return code;
};

/* origin:
Blockly.Arduino.linkit_ble_periphral = function() {
  var name = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''
  var service = Blockly.Arduino.valueToCode(this, 'SERVICE', Blockly.Arduino.ORDER_ATOMIC) || ''
  var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
  var characteristicType = this.getFieldValue('TYPE');
  name = name.replace(/\"/g, "");
  service = service.replace(/\"/g, "");
  characteristic = characteristic.replace(/\"/g, "");
  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include_service'] = 'LBLEService __periphralService("' + service + '");';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include_characteristic'] = 'LBLECharacteristicInt __periphralCharacteristic("' + characteristic + '", ' + characteristicType + ');';
  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_service_config'] = '__periphralService.addAttribute(__periphralCharacteristic);';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_config'] = 'LBLEPeripheral.addService(__periphralService);';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_setup'] = 'LBLEPeripheral.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_setup'] = 'LBLEAdvertisementData __advertisement;';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_name_setup'] = '__advertisement.configAsConnectableDevice("' + name + '");';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_advertise'] = 'LBLEPeripheral.advertise(__advertisement);';
  var code = "\n";
  return code;
};
*/

Blockly.Arduino.linkit_ble_central_get_peripheral_with_index = function () {

    var index = Blockly.Arduino.valueToCode(this, 'INDEX', Blockly.Arduino.ORDER_ATOMIC) || ''
    index = index.replace(/\"/g, "");

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
    Blockly.Arduino.definitions_['define_linkit_ble_central_include'] = '#include <LBLECentral.h>';

    Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
    Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';
    Blockly.Arduino.setups_['define_linkit_ble_setup_central_scan'] = 'LBLECentral.scan();';

    var code = '__scanner.getName(' + index + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_central_scan_count = function () {

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
    Blockly.Arduino.definitions_['define_linkit_ble_central_include'] = '#include <LBLECentral.h>';

    Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
    Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';
    Blockly.Arduino.setups_['define_linkit_ble_setup_central_scan'] = 'LBLECentral.scan();';

    var code = 'LBLECentral.getPeripheralCount()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_central_scan = function () {

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
    Blockly.Arduino.definitions_['define_linkit_ble_central_include'] = '#include <LBLECentral.h>';

    Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
    Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';
    Blockly.Arduino.setups_['define_linkit_ble_setup_central_scan'] = 'LBLECentral.scan();';

    var code = "\n";
    return code;
};

Blockly.Arduino.linkit_ble_ibeacon = function () {

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

Blockly.Arduino.linkit_ble_wait_until_ready = function () {

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';

    Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
    Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';

    var code = "\n";
    return code;
};

Blockly.Arduino.linkit_ble_get_address = function () {

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';

    Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';

    var code = "LBLE.getDeviceAddress()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_ready = function () {

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';

    Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';

    var code = "LBLE.ready()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};