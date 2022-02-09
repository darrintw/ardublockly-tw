/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Arduino code generator for the Servo library blocks.
 *     The Arduino Servo library docs: https://arduino.cc/en/reference/servo
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.Arduino.Sensor');

goog.require('Blockly.Arduino');

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['ultrasonic_distance'] = function (block) {
    var trigPin = block.getFieldValue('TRIG_PIN');
    var echoPin = block.getFieldValue('ECHO_PIN');
    var dUnit = block.getFieldValue('DISTANCE_UNIT');
    var comm = '';

    if (dUnit === 'cm') {
        comm = '(sonic_duration / 2.0) / 29.1';
    } else if (dUnit === 'inch') {
        comm = '(sonic_duration / 2.0) / 74.0';
    }
    var udName = 'ultrasonic_distance_' + dUnit;

    Blockly.Arduino.addSetup(udName + '_' + trigPin + '_setup_trig', 'pinMode(' + trigPin + ', OUTPUT);', true);
    Blockly.Arduino.addSetup(udName + '_' + echoPin + '_setup_echo', 'pinMode(' + echoPin + ', INPUT);', true);

    var fCode = 'float ' + udName + '(int trigPin, int echoPin){\n' +
        '  digitalWrite(trigPin, LOW);\n' +
        '  digitalWrite(echoPin, LOW);\n' +
        '  delayMicroseconds(5);\n' +
        '  digitalWrite(trigPin, HIGH);\n' +
        '  delayMicroseconds(10);\n' +
        '  digitalWrite(trigPin, LOW);\n' +
        '  unsigned long sonic_duration = pulseIn(echoPin, HIGH);\n' +
        '  float distance_' + dUnit + ' = ' + comm + ';\n\n' +
        '  return distance_' + dUnit + ';\n' +
        '}';

    Blockly.Arduino.addFunction(udName + '_func', fCode);

    var code = udName + '(' + trigPin + ', ' + echoPin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['tcrt5000'] = function (block) {
    var analog_pin = block.getFieldValue('ANALOG_PIN');

    var code = '(1023 - analogRead(' + analog_pin + '))';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['tcrt5000_var'] = function (block) {
    var analog_pin = Blockly.Arduino.valueToCode(
        block, 'ANALOG_PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = '(1023 - analogRead(' + analog_pin + '))';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['logic_nan'] = function (block) {
    var value = Blockly.Arduino.valueToCode(
        block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || 'nan';
    var code = 'isnan(' + value + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['DHT11_readTemp'] = function (block) {
    var dataPin = block.getFieldValue('DATAPIN');
    var dht11_tag = "dht11_tag_" + dataPin;
    var dht11DefineCode = "#define DHTTYPE DHT11";
    var dht11DeclareCode = "DHT dht" + dataPin + "(" + dataPin + ", DHTTYPE);\n";
    Blockly.Arduino.addInclude("DHT_inc", '#include <DHT.h>');
    Blockly.Arduino.addDefine("dht11_def", dht11DefineCode);
    Blockly.Arduino.addSetup(dht11_tag, "dht" + dataPin + ".begin();", false);
    Blockly.Arduino.addDeclaration(dht11_tag, dht11DeclareCode)
    var code = 'dht' + dataPin + '.readTemperature()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['DHT11_readTemp_var'] = function (block) {
    var dataPin = Blockly.Arduino.valueToCode(
        block, 'DATAPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var dht11_tag = "dht11_tag_" + dataPin;
    var dht11DefineCode = "#define DHTTYPE DHT11";
    var dht11DeclareCode = "DHT dht" + dataPin + "(" + dataPin + ", DHTTYPE);\n";
    Blockly.Arduino.addInclude("DHT_inc", '#include <DHT.h>');
    Blockly.Arduino.addDefine("dht11_def", dht11DefineCode);
    Blockly.Arduino.addSetup(dht11_tag, "dht" + dataPin + ".begin();", false);
    Blockly.Arduino.addDeclaration(dht11_tag, dht11DeclareCode)
    var code = 'dht' + dataPin + '.readTemperature()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['DHT11_readHumi'] = function (block) {
    var dataPin = block.getFieldValue('DATAPIN');
    var dht11_tag = "dht11_tag_" + dataPin;
    var dht11DefineCode = "#define DHTTYPE DHT11";
    var dht11DeclareCode = "DHT dht" + dataPin + "(" + dataPin + ", DHTTYPE);\n";
    Blockly.Arduino.addInclude("DHT_inc", '#include <DHT.h>');
    Blockly.Arduino.addDefine("dht11_def", dht11DefineCode);
    Blockly.Arduino.addSetup(dht11_tag, "dht" + dataPin + ".begin();", false);
    Blockly.Arduino.addDeclaration(dht11_tag, dht11DeclareCode)
    var code = 'dht' + dataPin + '.readHumidity()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['DHT11_readHumi_var'] = function (block) {
    var dataPin = Blockly.Arduino.valueToCode(
        block, 'DATAPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var dht11_tag = "dht11_tag_" + dataPin;
    var dht11DefineCode = "#define DHTTYPE DHT11";
    var dht11DeclareCode = "DHT dht" + dataPin + "(" + dataPin + ", DHTTYPE);\n";
    Blockly.Arduino.addInclude("DHT_inc", '#include <DHT.h>');
    Blockly.Arduino.addDefine("dht11_def", dht11DefineCode);
    Blockly.Arduino.addSetup(dht11_tag, "dht" + dataPin + ".begin();", false);
    Blockly.Arduino.addDeclaration(dht11_tag, dht11DeclareCode)
    var code = 'dht' + dataPin + '.readHumidity()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['DS18B20_readTemp'] = function (block) {
    var pin = block.getFieldValue('DATAPIN');

    var code = 'DS18B20_' + pin + '.getTempCByIndex(0)';
    block.prefixCode = 'DS18B20_' + pin + '.requestTemperatures();\n';

    Blockly.Arduino.addInclude('OneWire_inc', '#include <OneWire.h>');
    Blockly.Arduino.addInclude('DallasTemperature_inc', '#include <DallasTemperature.h>');
    Blockly.Arduino.addDeclaration('DS18B20_' + pin, 'OneWire oneWire(' + pin + '); \nDallasTemperature DS18B20_' + pin + '(&oneWire);');
    Blockly.Arduino.addSetup('DS18B20_' + pin, 'DS18B20_' + pin + '.begin();', false);

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['DS18B20_readTemp_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'DATAPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'DS18B20_' + pin + '.getTempCByIndex(0)';
    block.prefixCode = 'DS18B20_' + pin + '.requestTemperatures();\n';

    Blockly.Arduino.addInclude('OneWire_inc', '#include <OneWire.h>');
    Blockly.Arduino.addInclude('DallasTemperature_inc', '#include <DallasTemperature.h>');
    Blockly.Arduino.addDeclaration('DS18B20_' + pin, 'OneWire oneWire(' + pin + '); \nDallasTemperature DS18B20_' + pin + '(&oneWire);');
    Blockly.Arduino.addSetup('DS18B20_' + pin, 'DS18B20_' + pin + '.begin();', false);

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['photocells_read'] = function (block) {
    var pin = block.getFieldValue('DATAPIN');

    var code = 'analogRead(' + pin + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['photocells_read_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'DATAPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = 'analogRead(' + pin + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { read lm35; }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['lm35_read'] = function (block) {
    var pin = block.getFieldValue('DATAPIN');

    var code = '(analogRead(' + pin + ')-102)*100/207; //0C=102, 100C=309';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['lm35_read_var'] = function (block) {
    var pin = Blockly.Arduino.valueToCode(
        block, 'DATAPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = '(analogRead(' + pin + ')-102)*100/207; //0C=102, 100C=309';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ irrecv_Ax.enableIRIn(); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['irrecv_setup'] = function (block) {
    var irrecvName = block.getFieldValue('DATAPIN');
    var irrecvId = 'irrecv_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var decodeId = 'results_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var irrecvVarCode = 'IRrecv ' + irrecvId + '(' + irrecvName + ');';
    var decodeVarCode = 'decode_results ' + decodeId + ';';
    var irrecvSetupCode = irrecvId + '.enableIRIn();';

    Blockly.Arduino.addInclude('IRremote_inc', '#include <IRremote.h>');
    Blockly.Arduino.addVariable(irrecvId, irrecvVarCode, true);
    Blockly.Arduino.addVariable(decodeId, decodeVarCode, true);
    Blockly.Arduino.addSetup('irrecv_' + irrecvId, irrecvSetupCode, true);
    var code = '';
    return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ irrecv_Ax.enableIRIn(); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['irrecv_setup_var'] = function (block) {
    var irrecvName = Blockly.Arduino.valueToCode(
        block, 'DATAPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var irrecvId = 'irrecv_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var decodeId = 'results_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var irrecvVarCode = 'IRrecv ' + irrecvId + '(' + irrecvName + ');';
    var decodeVarCode = 'decode_results ' + decodeId + ';';
    var irrecvSetupCode = irrecvId + '.enableIRIn();';

    Blockly.Arduino.addInclude('IRremote_inc', '#include <IRremote.h>');
    Blockly.Arduino.addVariable(irrecvId, irrecvVarCode, true);
    Blockly.Arduino.addVariable(decodeId, decodeVarCode, true);
    Blockly.Arduino.addSetup('irrecv_' + irrecvId, irrecvSetupCode, true);
    var code = '';
    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['irrecv_available'] = function (block) {
    var irrecvName = block.getFieldValue('DATAPIN');
    var irrecvId = 'irrecv_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var decodeId = 'results_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = irrecvId + '.decode(&' + decodeId + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['irrecv_available_var'] = function (block) {
    var irrecvName = Blockly.Arduino.valueToCode(
        block, 'DATAPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var irrecvId = 'irrecv_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var decodeId = 'results_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = irrecvId + '.decode(&' + decodeId + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['irrecv_read'] = function (block) {
    var irrecvName = block.getFieldValue('DATAPIN');
    var decodeId = 'results_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = decodeId + '.value';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {(string|number)[]} Completed code.
 */
Blockly.Arduino['irrecv_read_var'] = function (block) {
    var irrecvName = Blockly.Arduino.valueToCode(
        block, 'DATAPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var decodeId = 'results_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = decodeId + '.value';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['irrecv_resume'] = function (block) {
    var irrecvName = block.getFieldValue('DATAPIN');
    var irrecvId = 'irrecv_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = irrecvId + '.resume();\n';

    return code;
};

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['irrecv_resume_var'] = function (block) {
    var irrecvName = Blockly.Arduino.valueToCode(
        block, 'DATAPIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var irrecvId = 'irrecv_' + Blockly.Arduino.variableDB_.getName(
        irrecvName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = irrecvId + '.resume();\n';

    return code;
};

/**
 * @param {!Blockly.Block} block Block to generate the code from.
 */
Blockly.Arduino['hx711_setup'] = function (block) {
    var dataPin = block.getFieldValue('DATA_PIN');
    var clkPin = block.getFieldValue('CLK_PIN');
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    Blockly.Arduino.addInclude('HX711_inc', '#include "HX711.h"');
    Blockly.Arduino.addDeclaration('HX711_declar_' + hx711Id, 'HX711 ' + hx711Id + ';');
    Blockly.Arduino.addSetup('HX711_setup_' + hx711Id, hx711Id + '.begin(' + dataPin + ', ' + clkPin + ');', true);

    return "";
};

/** . */
Blockly.Arduino['hx711_set_scale'] = function (block) {
    var scaleValue = Blockly.Arduino.valueToCode(
        block, 'HX711_SET_SCALE', Blockly.Arduino.ORDER_ATOMIC) || '';
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = hx711Id + '.set_scale(' + scaleValue + ');\n';

    return code;
};

/** . */
Blockly.Arduino['hx711_tare'] = function (block) {
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = hx711Id + '.tare();\n';

    return code;
};

/** . */
Blockly.Arduino['hx711_get_units'] = function (block) {
    var unitsValue = Blockly.Arduino.valueToCode(
        block, 'HX711_GET_UNITS', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = hx711Id + '.get_units(' + unitsValue + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['hx711_power_down'] = function (block) {
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = hx711Id + '.power_down();\n';

    return code;
};

/** . */
Blockly.Arduino['hx711_power_up'] = function (block) {
    var hx711Id = Blockly.Arduino.variableDB_.getName(
        "hx711_scale",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = hx711Id + '.power_up();\n';

    return code;
};
