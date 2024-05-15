/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.require('Blockly.Arduino');

/**
 * Function for 'set pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_output'] = function (block) {
    var pin = block.getFieldValue('PIN');
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Digital Write');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
    //Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    //var code = '';
    return pinSetupCode;
};

/**
 * Function for 'set pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_output_var'] = function (block) {
    //var pinName = block.getFieldValue('PIN');
    var pinName = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var pinId = Blockly.Arduino.variableDB_.getName(
        pinName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    //Blockly.Arduino.addVariable(pinName, 'int ' + pinId + ';', true);

    var pinSetupCode = 'pinMode(' + pinId + ', OUTPUT);\n';
    //Blockly.Arduino.addSetup('io_' + pinId, pinSetupCode, false);

    //var code = '';
    return pinSetupCode;
};

/**
 * Function for 'set pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_digitalwrite'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Digital Write');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_digital_' + pin, pinSetupCode, false);

    var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

/**
 * Function for 'set pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_digitalwrite_var'] = function (block) {
    //var pinName = block.getFieldValue('PIN');
    var pinName = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var pinId = Blockly.Arduino.variableDB_.getName(
        pinName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    //Blockly.Arduino.addVariable(pinName, 'int ' + pinId + ';', true);

    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

    var pinSetupCode = 'pinMode(' + pinId + ', OUTPUT);';
    //Blockly.Arduino.addSetup('io_digital_' + pinId, pinSetupCode, false);

    var code = 'digitalWrite(' + pinId + ', ' + stateOutput + ');\n';
    return code;
};

/**
 * Function for setting the state (Y) of a built-in LED (X).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_builtin_led'] = function (block) {
    var pin = block.getFieldValue('BUILT_IN_LED');
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Set LED');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_builtin_' + pin, pinSetupCode, false);

    var code = 'digitalWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

/**
 * Function for setting the state (Y) of an analogue output (X).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { analogWrite(X, Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_analogwrite'] = function (block) {
    var pin = block.getFieldValue('PIN');
    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';

    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Analogue Write');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
    Blockly.Arduino.addSetup('io_analog' + pin, pinSetupCode, false);

    // Warn if the input value is out of range
    if ((stateOutput < 0) || (stateOutput > 255)) {
        block.setWarningText('The analogue value set must be between 0 and 255',
            'pwm_value');
    } else {
        block.setWarningText(null, 'pwm_value');
    }

    var code = 'analogWrite(' + pin + ', ' + stateOutput + ');\n';
    return code;
};

/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_analogwrite_var'] = function (block) {
    //var pinName = block.getFieldValue('PIN');
    var pinName = Blockly.Arduino.valueToCode(
        block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var pinId = Blockly.Arduino.variableDB_.getName(
        pinName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    //Blockly.Arduino.addVariable(pinName, 'int ' + pinId + ';', true);

    var stateOutput = Blockly.Arduino.valueToCode(
        block, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';

    var pinSetupCode = 'pinMode(' + pinId + ', OUTPUT);';
    //Blockly.Arduino.addSetup('io_analog' + pinId, pinSetupCode, false);

    var code = 'analogWrite(' + pinId + ', ' + stateOutput + ');\n';
    return code;
};

/**
 * Function for turning the tone library on on a given pin (X).
 * Arduino code: setup { pinMode(X, OUTPUT) }
 *               loop  { tone(X, frequency) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['io_tone'] = function (block) {
    var pin = block.getFieldValue('TONEPIN');
    var freq = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Tone pin');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
    Blockly.Arduino.addSetup('io_tone_' + pin, pinSetupCode, false);

    var code = 'tone(' + pin + ',' + freq + ');\n';
    return code;
};

/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_notone'] = function (block) {
    var pin = block.getFieldValue("TONEPIN");
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.pinTypes.OUTPUT, 'Tone pin');

    var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
    Blockly.Arduino.addSetup('io_tone_' + pin, pinSetupCode, false);

    var code = 'noTone(' + pin + ');\n';
    return code;
};

/*
var tone_list = "void initToneMap() {\n" +
    "  tonehashMap.put(\"0\", 0);\n" +
    "  tonehashMap.put(\"00\", 0);\n" +
    "  tonehashMap.put(\"B0\", 31);\n" +
    "  tonehashMap.put(\"C1\", 33);\n" +
    "  tonehashMap.put(\"CS1\", 35);\n" +
    "  tonehashMap.put(\"D1\", 37);\n" +
    "  tonehashMap.put(\"DS1\", 39);\n" +
    "  tonehashMap.put(\"E1\", 41);\n" +
    "  tonehashMap.put(\"F1\", 44);\n" +
    "  tonehashMap.put(\"FS1\", 46);\n" +
    "  tonehashMap.put(\"G1\", 49);\n" +
    "  tonehashMap.put(\"GS1\", 52);\n" +
    "  tonehashMap.put(\"A1\", 55);\n" +
    "  tonehashMap.put(\"AS1\", 58);\n" +
    "  tonehashMap.put(\"B1\", 62);\n" +
    "  tonehashMap.put(\"C2\", 65);\n" +
    "  tonehashMap.put(\"CS2\", 69);\n" +
    "  tonehashMap.put(\"D2\", 73);\n" +
    "  tonehashMap.put(\"DS2\", 78);\n" +
    "  tonehashMap.put(\"E2\", 82);\n" +
    "  tonehashMap.put(\"F2\", 87);\n" +
    "  tonehashMap.put(\"FS2\", 93);\n" +
    "  tonehashMap.put(\"G2\", 98);\n" +
    "  tonehashMap.put(\"GS2\", 104);\n" +
    "  tonehashMap.put(\"A2\", 110);\n" +
    "  tonehashMap.put(\"AS2\", 117);\n" +
    "  tonehashMap.put(\"B2\", 123);\n" +
    "  tonehashMap.put(\"C3\", 131);\n" +
    "  tonehashMap.put(\"CS3\", 139);\n" +
    "  tonehashMap.put(\"D3\", 147);\n" +
    "  tonehashMap.put(\"DS3\", 156);\n" +
    "  tonehashMap.put(\"E3\", 165);\n" +
    "  tonehashMap.put(\"F3\", 175);\n" +
    "  tonehashMap.put(\"FS3\", 185);\n" +
    "  tonehashMap.put(\"G3\", 196);\n" +
    "  tonehashMap.put(\"GS3\", 208);\n" +
    "  tonehashMap.put(\"A3\", 220);\n" +
    "  tonehashMap.put(\"AS3\", 233);\n" +
    "  tonehashMap.put(\"B3\", 247);\n" +
    "  tonehashMap.put(\"C4\", 262);\n" +
    "  tonehashMap.put(\"CS4\", 277);\n" +
    "  tonehashMap.put(\"D4\", 294);\n" +
    "  tonehashMap.put(\"DS4\", 311);\n" +
    "  tonehashMap.put(\"E4\", 330);\n" +
    "  tonehashMap.put(\"F4\", 349);\n" +
    "  tonehashMap.put(\"FS4\", 370);\n" +
    "  tonehashMap.put(\"G4\", 392);\n" +
    "  tonehashMap.put(\"GS4\", 415);\n" +
    "  tonehashMap.put(\"A4\", 440);\n" +
    "  tonehashMap.put(\"AS4\", 466);\n" +
    "  tonehashMap.put(\"B4\", 494);\n" +
    "  tonehashMap.put(\"C5\", 523);\n" +
    "  tonehashMap.put(\"CS5\", 554);\n" +
    "  tonehashMap.put(\"D5\", 587);\n" +
    "  tonehashMap.put(\"DS5\", 622);\n" +
    "  tonehashMap.put(\"E5\", 659);\n" +
    "  tonehashMap.put(\"F5\", 698);\n" +
    "  tonehashMap.put(\"FS5\", 740);\n" +
    "  tonehashMap.put(\"G5\", 784);\n" +
    "  tonehashMap.put(\"GS5\", 831);\n" +
    "  tonehashMap.put(\"A5\", 880);\n" +
    "  tonehashMap.put(\"AS5\", 932);\n" +
    "  tonehashMap.put(\"B5\", 988);\n" +
    "  tonehashMap.put(\"C6\", 1047);\n" +
    "  tonehashMap.put(\"CS6\", 1109);\n" +
    "  tonehashMap.put(\"D6\", 1175);\n" +
    "  tonehashMap.put(\"DS6\", 1245);\n" +
    "  tonehashMap.put(\"E6\", 1319);\n" +
    "  tonehashMap.put(\"F6\", 1397);\n" +
    "  tonehashMap.put(\"FS6\", 1480);\n" +
    "  tonehashMap.put(\"G6\", 1568);\n" +
    "  tonehashMap.put(\"GS6\", 1661);\n" +
    "  tonehashMap.put(\"A6\", 1760);\n" +
    "  tonehashMap.put(\"AS6\", 1865);\n" +
    "  tonehashMap.put(\"B6\", 1976);\n" +
    "  tonehashMap.put(\"C7\", 2093);\n" +
    "  tonehashMap.put(\"CS7\", 2217);\n" +
    "  tonehashMap.put(\"D7\", 2349);\n" +
    "  tonehashMap.put(\"DS7\", 2489);\n" +
    "  tonehashMap.put(\"E7\", 2637);\n" +
    "  tonehashMap.put(\"F7\", 2794);\n" +
    "  tonehashMap.put(\"FS7\", 2960);\n" +
    "  tonehashMap.put(\"G7\", 3136);\n" +
    "  tonehashMap.put(\"GS7\", 3322);\n" +
    "  tonehashMap.put(\"A7\", 3520);\n" +
    "  tonehashMap.put(\"AS7\", 3729);\n" +
    "  tonehashMap.put(\"B7\", 3951);\n" +
    "  tonehashMap.put(\"C8\", 4186);\n" +
    "  tonehashMap.put(\"CS8\", 4435);\n" +
    "  tonehashMap.put(\"D8\", 4699);\n" +
    "  tonehashMap.put(\"DS8\", 4978);\n" +
    "}";
*/

/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_play_tone'] = function (block) {
    /*
    Blockly.Arduino.addInclude('HashMap_inc', '#include <HashMap.h>');
    Blockly.Arduino.addDefine('tonehashMap_def', 'HashMap<char*, int> tonehashMap;');
    Blockly.Arduino.addDefine('initToneMap_def', tone_list);
    Blockly.Arduino.addSetup('initToneMap_set', 'initToneMap();');*/
    Blockly.Arduino.addInclude('HashMap_inc', '#include <Pitches.h>');

    var toneName = block.getFieldValue("TONEPIN");
    var toneId = Blockly.Arduino.variableDB_.getName(
        toneName,
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var pinSetupCode = 'initToneMap();\n' +
        '  pinMode(' + toneId + ', OUTPUT);\n';
    Blockly.Arduino.addSetup('io_tone_' + toneId, pinSetupCode, false);

    var toneSpeed = block.getFieldValue("SPEED");
    var branch = Blockly.Arduino.statementToCode(block, 'BUZZER_PLAY');
    var code = branch.replaceAll("%toneName%", toneId).replaceAll("%toneSpeed%", toneSpeed);
    return code;
};

/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_single_tone'] = function (block) {
    var note = block.getFieldValue("NOTE");
    var tone = block.getFieldValue("TONE");
    var tempo = block.getFieldValue("TEMPO");
    if (note == "0") {
        tone = "0";
    }
    var code = 'tone(%toneName%, tonehashMap.valueFor("' + note + tone + '"), 240000 / %toneSpeed% / ' + tempo + ');\n' +
        'delay(240000 / %toneSpeed% / ' + tempo + ');\n' +
        'noTone(%toneName%);\n';
    return code;
};

/**
 * Function for .
 * Arduino code: setup {  }
 *               loop  {  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_multi_tone'] = function (block) {
    var noteTone = Blockly.Arduino.valueToCode(
        block, 'NOTE_TONE', Blockly.Arduino.ORDER_ATOMIC) || '';
    var tempo = Blockly.Arduino.valueToCode(
        block, 'TEMPO', Blockly.Arduino.ORDER_ATOMIC) || '';
    var noteSize = 0;
    var code = '';
    var lastTempo = 0;
    var tempoLen = 0;
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
                'delay(240000 / %toneSpeed% / ' + lastTempo + ');\n' +
                'noTone(%toneName%);\n';
        }
    } else {
        code += 'tone(%toneName%, tonehashMap.valueFor("' + noteTone + '"), 240000 / %toneSpeed% / ' + lastTempo + ');\n' +
            'delay(240000 / %toneSpeed% / ' + lastTempo + ');\n' +
            'noTone(%toneName%);\n';
    }
    return code;
};
