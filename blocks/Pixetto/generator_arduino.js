/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';

goog.provide('Blockly.Arduino.Pixetto');

goog.require('Blockly.Arduino');

/** . */
Blockly.Arduino['pixetto_setup'] = function (block) {
    var rxPin = block.getFieldValue('PIXETTO_RX');
    var txPin = block.getFieldValue('PIXETTO_TX');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    Blockly.Arduino.addInclude('Pixetto_inc', '#include <Pixetto.h>');
    Blockly.Arduino.addVariable("ss", 'Pixetto ' + pixettoId + '(' + rxPin + ', ' + txPin + ');', true);

    var code = pixettoId + '.begin();\n';

    return code;
};

/** . */
Blockly.Arduino['pixetto_uvc'] = function (block) {
    var oc = block.getFieldValue('PIXETTO_OC');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.enableUVC(' + oc + ');\n';

    return code;
};

/** . */
Blockly.Arduino['pixetto_set_detected'] = function (block) {
    var sd = block.getFieldValue('PIXETTO_SD');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.setDetectMode(' + sd + ');\n';

    return code;
};

/** . */
Blockly.Arduino['pixetto_flush'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.flush();\n';

    return code;
};

/** . */
Blockly.Arduino['pixetto_function'] = function (block) {
    var pixettoFunc = block.getFieldValue('PIXETTO_FUNC_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.enableFunc(Pixetto::' + pixettoFunc + ');\n';

    return code;
};

/** . */
Blockly.Arduino['pixetto_detected'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.isDetected()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_now_function'] = function (block) {
    var pixettoFunc = block.getFieldValue('PIXETTO_FUNC_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);
    var code = pixettoId + '.getFuncID() == Pixetto::' + pixettoFunc;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_getfuncid'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_gettypeid'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getTypeID()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_getposx'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getPosX()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_getposy'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getPosY()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_getwidth'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getWidth()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_getheigth'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getHeight()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_numobjects'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.numObjects()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_color_detection'] = function (block) {
    var pixettoColor = block.getFieldValue('PIXETTO_COLOR_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_COLOR_DETECTION && ' +
        pixettoId + '.getTypeID() == Pixetto::' + pixettoColor;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_shape_detection'] = function (block) {
    var pixettoShape = block.getFieldValue('PIXETTO_SHAPE_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_SHAPE_DETECTION && ' +
        pixettoId + '.getTypeID() == Pixetto::' + pixettoShape;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_sphere_detection'] = function (block) {
    var pixettoSphere = block.getFieldValue('PIXETTO_SPHERE_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_SPHERE_DETECTION && ' +
        pixettoId + '.getTypeID() == Pixetto::' + pixettoSphere;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_template_detection'] = function (block) {
    var pixettoTemplate = block.getFieldValue('PIXETTO_TEMPLATE_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_TEMPLATE_MATCHING && ' +
        pixettoId + '.getTypeID() == ' + pixettoTemplate;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_keypoints_detection'] = function (block) {
    var pixettoKeypoints = block.getFieldValue('PIXETTO_KEYPOINTS_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_KEYPOINTS_MATCHING && ' +
        pixettoId + '.getTypeID() == ' + pixettoKeypoints;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_neural_network_detection'] = function (block) {
    var pixettoNeuralNetwork = Blockly.Arduino.valueToCode(block, 'PIXETTO_NEURAL_NETWORK', Blockly.Arduino.ORDER_ATOMIC);
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_NEURAL_NETWORK && ' +
        pixettoId + '.getTypeID() == ' + pixettoNeuralNetwork;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_sign_detection'] = function (block) {
    var pixettoSign = block.getFieldValue('PIXETTO_SIGN_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_TRAFFIC_SIGN_DETECTION && ' +
        pixettoId + '.getTypeID() == Pixetto::' + pixettoSign;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_num_detection'] = function (block) {
    var pixettoNum = block.getFieldValue('PIXETTO_NUM_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_HANDWRITTEN_DIGITS_DETECTION && ' +
        pixettoId + '.getTypeID() == ' + pixettoNum;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_latter_detection'] = function (block) {
    var pixettoLatter = block.getFieldValue('PIXETTO_LATTER_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_HANDWRITTEN_LETTERS_DETECTION && ' +
        pixettoId + '.getTypeID() == ' + pixettoLatter;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_cloud_detection'] = function (block) {
    var pixettoCloud = block.getFieldValue('PIXETTO_CLOUD');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_CLOUD_DETECTION && ' +
        pixettoId + '.getTypeID() == ' + pixettoCloud;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_classifier_detection'] = function (block) {
    var pixettoClassifier = block.getFieldValue('PIXETTO_CLASSIFIER');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_SIMPLE_CLASSIFIER && ' +
        pixettoId + '.getTypeID() == ' + pixettoClassifier;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_voice_detection'] = function (block) {
    var pixettoVoice = block.getFieldValue('PIXETTO_VOICE_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getFuncID() == Pixetto::FUNC_VOICE_COMMAND && ' +
        pixettoId + '.getTypeID() == ' + pixettoVoice;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_apriltag_detection'] = function (block) {
    var pixettoApriltag = block.getFieldValue('PIXETTO_APRILTAG_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getApriltagField(Pixetto::' + pixettoApriltag + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_lanes_detection'] = function (block) {
    var pixettoLanes = block.getFieldValue('PIXETTO_LANES_SELECTOR');
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getLanesField(Pixetto::' + pixettoLanes + ')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_equation_answer'] = function (block) {
    var pixettoId = Blockly.Arduino.variableDB_.getName(
        "ss",
        Blockly.Variables.NAME_TYPE/*blocklyArray_NAME_TYPE*/);

    var code = pixettoId + '.getEquationAnswer()';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_color'] = function (block) {
    var pixettoColor = block.getFieldValue('PIXETTO_COLOR_SELECTOR');
    var code = 'Pixetto::' + pixettoColor;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_shape'] = function (block) {
    var pixettoColor = block.getFieldValue('PIXETTO_SHAPE_SELECTOR');
    var code = 'Pixetto::' + pixettoColor;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_sign'] = function (block) {
    var pixettoSign = block.getFieldValue('PIXETTO_SIGN_SELECTOR');
    var code = 'Pixetto::' + pixettoSign;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_num'] = function (block) {
    var pixettoNum = block.getFieldValue('PIXETTO_NUM_SELECTOR');
    var code = pixettoNum;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/** . */
Blockly.Arduino['pixetto_latter'] = function (block) {
    var pixettoLatter = block.getFieldValue('PIXETTO_LATTER_SELECTOR');
    var code = 'Pixetto::' + pixettoLatter;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};