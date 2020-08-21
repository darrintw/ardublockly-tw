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

Blockly.Arduino["linkit_ble_periphral"] = function () {
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

Blockly.Arduino["linkit_ble_get_address"] = function () {

    Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';

    Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';

    var code = "LBLE.getDeviceAddress()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["linkit_ble_Characteristic"] = function () {
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

Blockly.Arduino["linkit_ble_periphral_is_written"] = function () {
    var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
    var characteristicType = this.getFieldValue('TYPE');
    characteristic = characteristic.replace(/\"/g, "");
    var variableName = characteristic.replace(/-/g, '_');
    variableName = variableName.toLowerCase();
    var code = '__' + variableName + '.isWritten()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["linkit_ble_periphral_get_value"] = function () {
    var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
    var characteristicType = this.getFieldValue('TYPE');
    characteristic = characteristic.replace(/\"/g, "");
    var variableName = characteristic.replace(/-/g, '_');
    variableName = variableName.toLowerCase();
    var code = '__' + variableName + '.getValue()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["linkit_ble_periphral_write"] = function () {
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