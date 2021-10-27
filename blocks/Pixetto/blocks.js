/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.pixetto');

goog.require('Blockly.Blocks');

Blockly.Blocks.pixetto.HUE = 120;

var funclist;
var colorlist;
var shaphelist;
var signlist;
var voicelist;
var apriltaglist;
var laneslist;

/*
var funclist = [
    [Blockly.Msg.PIXETTO_FCD, 'FUNC_COLOR_DETECTION'],
    [Blockly.Msg.PIXETTO_FCCD, 'FUNC_COLOR_CODE_DETECTION'],
    [Blockly.Msg.PIXETTO_FSD, 'FUNC_SHAPE_DETECTION'],
    [Blockly.Msg.PIXETTO_FSPD, 'FUNC_SPHERE_DETECTION'],
    [Blockly.Msg.PIXETTO_FTM, 'FUNC_TEMPLATE_MATCHING'],
    [Blockly.Msg.PIXETTO_FK, 'FUNC_KEYPOINTS'],
    ['apriltag(16h5)', 'FUNC_APRILTAG'],
    [Blockly.Msg.PIXETTO_FNN, 'FUNC_NEURAL_NETWORK'],
    [Blockly.Msg.PIXETTO_FFD, 'FUNC_FACE_DETECTION'],
    [Blockly.Msg.PIXETTO_FTSD, 'FUNC_TRAFFIC_SIGN_DETECTION'],
    [Blockly.Msg.PIXETTO_FHDD, 'FUNC_HANDWRITTEN_DIGITS_DETECTION'],
    [Blockly.Msg.PIXETTO_FHLD, 'FUNC_HANDWRITTEN_LETTERS_DETECTION'],
    [Blockly.Msg.PIXETTO_FCLD, 'FUNC_CLOUD_DETECTION'],
    [Blockly.Msg.PIXETTO_FLD, 'FUNC_LANES_DETECTION'],
    [Blockly.Msg.PIXETTO_FED, 'FUNC_EQUATION_DETECTION'],
    [Blockly.Msg.PIXETTO_FSC, 'FUNC_SIMPLE_CLASSIFIER'],
    [Blockly.Msg.PIXETTO_FVC, 'FUNC_VOICE_COMMAND']];

var colorlist = [[Blockly.Msg.PIXETTO_CRED, 'COLOR_RED'],
    [Blockly.Msg.PIXETTO_CYELLOW, 'COLOR_YELLOW'],
    [Blockly.Msg.PIXETTO_CGREEN, 'COLOR_GREEN'],
    [Blockly.Msg.PIXETTO_CBLUE, 'COLOR_BLUE'],
    [Blockly.Msg.PIXETTO_CPURPLE, 'COLOR_PURPLE'],
    [Blockly.Msg.PIXETTO_CBLACK, 'COLOR_BLACK']];

var shaphelist = [
    [Blockly.Msg.PIXETTO_SHAPE_ROUND, 'SHAPE_ROUND'],
    [Blockly.Msg.PIXETTO_SHAPE_RECTANGLE, 'SHAPE_RECTANGLE'],
    [Blockly.Msg.PIXETTO_SHAPE_TRIANGLE, 'SHAPE_TRIANGLE'],
    [Blockly.Msg.PIXETTO_SHAPE_PENTAGON, 'SHAPE_PENTAGON']];

var signlist = [
    [Blockly.Msg.PIXETTO_SIGN_NE, 'SIGN_NO_ENTRE'],
    [Blockly.Msg.PIXETTO_SIGN_NLT, 'SIGN_NO_LEFT_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_NRT, 'SIGN_NO_RIGHT_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_WW, 'SIGN_WRONG_WAY'],
    [Blockly.Msg.PIXETTO_SIGN_NUT, 'SIGN_NO_U_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_MAXS, 'SIGN_MAX_SPEED'],
    [Blockly.Msg.PIXETTO_SIGN_OWT, 'SIGN_ONEWAY_TRAFFIC'],
    [Blockly.Msg.PIXETTO_SIGN_LT, 'SIGN_LEFT_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_RT, 'SIGN_RIGHT_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_MINS, 'SIGN_MIN_SPEED'],
    [Blockly.Msg.PIXETTO_SIGN_UT, 'SIGN_U_TURN'],
    [Blockly.Msg.PIXETTO_SIGN_TA, 'SIGN_TUNNEL_AHEAD'],
    [Blockly.Msg.PIXETTO_SIGN_BOC, 'SIGN_BEWARE_OF_CHILDREN'],
    [Blockly.Msg.PIXETTO_SIGN_RA, 'SIGN_ROUNDABOUT'],
    [Blockly.Msg.PIXETTO_SIGN_YTP, 'SIGN_YIELD_TO_PEDESTRIAN'],
    [Blockly.Msg.PIXETTO_SIGN_REDL, 'SIGN_RED_LIGHT'],
    [Blockly.Msg.PIXETTO_SIGN_GREENL, 'SIGN_GREEN_LIGHT']];

var voicelist = [
    [Blockly.Msg.PIXETTO_VOICE_HELLO, 'VOICE_Hello'],
    [Blockly.Msg.PIXETTO_VOICE_THANKS, 'VOICE_Thanks'],
    [Blockly.Msg.PIXETTO_VOICE_BYE, 'VOICE_Bye'],
    [Blockly.Msg.PIXETTO_VOICE_WHATSTHIS, 'VOICE_WhatsThis'],
    [Blockly.Msg.PIXETTO_VOICE_WHATTIME, 'VOICE_WhatTime'],
    [Blockly.Msg.PIXETTO_VOICE_HOWOLD, 'VOICE_HowOld'],
    [Blockly.Msg.PIXETTO_VOICE_WHATDAY, 'VOICE_WhatDay'],
    [Blockly.Msg.PIXETTO_VOICE_TELLSTORY, 'VOICE_TellStory'],
    [Blockly.Msg.PIXETTO_VOICE_TELLJOKE, 'VOICE_TellJoke'],
    [Blockly.Msg.PIXETTO_VOICE_READPOME, 'VOICE_ReadPoem'],
    [Blockly.Msg.PIXETTO_VOICE_TURNONLIGHT, 'VOICE_TurnOnLight'],
    [Blockly.Msg.PIXETTO_VOICE_TURNOFFLIGHT, 'VOICE_TurnOffLight'],
    [Blockly.Msg.PIXETTO_VOICE_TURNLEFT, 'VOICE_TurnLeft'],
    [Blockly.Msg.PIXETTO_VOICE_TURNRIGHT, 'VOICE_TurnRight'],
    [Blockly.Msg.PIXETTO_VOICE_GOAHEAD, 'VOICE_GoAhead'],
    [Blockly.Msg.PIXETTO_VOICE_MOVEBACK, 'VOICE_MoveBack'],
    [Blockly.Msg.PIXETTO_VOICE_STOP, 'VOICE_Stop'],
    [Blockly.Msg.PIXETTO_VOICE_OPEN, 'VOICE_Open'],
    [Blockly.Msg.PIXETTO_VOICE_CLOSE, 'VOICE_Close'],
    [Blockly.Msg.PIXETTO_VOICE_OPENEYES1, 'VOICE_OpenEyes1'],
    [Blockly.Msg.PIXETTO_VOICE_OPENEYES2, 'VOICE_OpenEyes2'],
    [Blockly.Msg.PIXETTO_VOICE_CLOSEEYES1, 'VOICE_CloseEyes1'],
    [Blockly.Msg.PIXETTO_VOICE_CLOSEEYES2, 'VOICE_CloseEyes2'],
    [Blockly.Msg.PIXETTO_VOICE_JUMP, 'VOICE_Jump'],
    [Blockly.Msg.PIXETTO_VOICE_STANDUP, 'VOICE_StandUp'],
    [Blockly.Msg.PIXETTO_VOICE_SQUATDOWN, 'VOICE_SquatDown']];

var apriltaglist = [
    [Blockly.Msg.PIXETTO_VOICE_HELLO, 'APRILTAG_POS_X'],
    [Blockly.Msg.PIXETTO_VOICE_THANKS, 'APRILTAG_POS_Y'],
    [Blockly.Msg.PIXETTO_VOICE_BYE, 'APRILTAG_POS_Z'],
    [Blockly.Msg.PIXETTO_VOICE_WHATSTHIS, 'APRILTAG_ROT_X'],
    [Blockly.Msg.PIXETTO_VOICE_WHATTIME, 'APRILTAG_ROT_Y'],
    [Blockly.Msg.PIXETTO_VOICE_HOWOLD, 'APRILTAG_ROT_Z'],
    [Blockly.Msg.PIXETTO_VOICE_WHATDAY, 'APRILTAG_CENTER_X'],
    [Blockly.Msg.PIXETTO_VOICE_TELLSTORY, 'APRILTAG_CENTER_Y']];

var laneslist = [
    [Blockly.Msg.PIXETTO_LANES_LX1, 'LANES_LX1'],
    [Blockly.Msg.PIXETTO_LANES_LY1, 'LANES_LY1'],
    [Blockly.Msg.PIXETTO_LANES_LX2, 'LANES_LX2'],
    [Blockly.Msg.PIXETTO_LANES_LY2, 'LANES_LY2'],
    [Blockly.Msg.PIXETTO_LANES_RX1, 'LANES_RX1'],
    [Blockly.Msg.PIXETTO_LANES_RY1, 'LANES_RY1'],
    [Blockly.Msg.PIXETTO_LANES_RX2, 'LANES_RX2'],
    [Blockly.Msg.PIXETTO_LANES_RY1, 'LANES_RY1']];
*/

/*
var signImglist = [
    [{
        'src': '/blocks/Pixetto/img/NO_ENTER.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_NE
    }, 'SIGN_NO_ENTRE'],
    [{
        'src': '/blocks/Pixetto/img/NO_LEFT_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_NLT
    }, 'SIGN_NO_LEFT_TURN'],
    [{
        'src': '/blocks/Pixetto/img/NO_RIGHT_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_NRT
    }, 'SIGN_NO_RIGHT_TURN'],
    [{
        'src': '/blocks/Pixetto/img/WRONG_WAY.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_WW
    }, 'SIGN_WRONG_WAY'],
    [{
        'src': '/blocks/Pixetto/img/NO_U_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_NUT
    }, 'SIGN_NO_U_TURN'],
    [{
        'src': '/blocks/Pixetto/img/MAX_SPEED.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_MAXS
    }, 'SIGN_MAX_SPEED'],
    [{
        'src': '/blocks/Pixetto/img/ONEWAY_TRAFFIC.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_OWT
    }, 'SIGN_ONEWAY_TRAFFIC'],
    [{
        'src': '/blocks/Pixetto/img/LEFT_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_LT
    }, 'SIGN_LEFT_TURN'],
    [{
        'src': '/blocks/Pixetto/img/RIGHT_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_RT
    }, 'SIGN_RIGHT_TURN'],
    [{
        'src': '/blocks/Pixetto/img/MIN_SPEED.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_MINS
    }, 'SIGN_MIN_SPEED'],
    [{
        'src': '/blocks/Pixetto/img/U_TURN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_UT
    }, 'SIGN_U_TURN'],
    [{
        'src': '/blocks/Pixetto/img/TUNNEL_AHEAD.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_TA
    }, 'SIGN_TUNNEL_AHEAD'],
    [{
        'src': '/blocks/Pixetto/img/BEWARE_OF_CHILDREN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_BOC
    }, 'SIGN_BEWARE_OF_CHILDREN'],
    [{
        'src': '/blocks/Pixetto/img/ROUNDABOUT.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_RA
    }, 'SIGN_ROUNDABOUT'],
    [{
        'src': '/blocks/Pixetto/img/YIELD_TO_PEDESTRIAN.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_YTP
    }, 'SIGN_YIELD_TO_PEDESTRIAN'],
    [{
        'src': '/blocks/Pixetto/img/RED_LIGHT.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_REDL
    }, 'SIGN_RED_LIGHT'],
    [{
        'src': '/blocks/Pixetto/img/GREEN_LIGHT.jpg',
        'width': 50,
        'height': 50,
        'alt': Blockly.Msg.PIXETTO_SIGN_GREENL
    }, 'SIGN_GREEN_LIGHT']];
*/

var numlist = [['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'],
    ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9']];

var latterlist = [['Aa', 'LETTER_A'], ['Bb', 'LETTER_B'], ['Cc', 'LETTER_C'], ['Dd', 'LETTER_D'],
    ['Ee', 'LETTER_E'], ['Ff', 'LETTER_F'], ['Gg', 'LETTER_G'], ['Hh', 'LETTER_H'],
    ['Ii', 'LETTER_I'], ['Jj', 'LETTER_J'], ['Kk', 'LETTER_K'], ['Ll', 'LETTER_L'],
    ['Mm', 'LETTER_M'], ['Nn', 'LETTER_N'], ['Oo', 'LETTER_O'], ['Pp', 'LETTER_P'],
    ['Qq', 'LETTER_Q'], ['Rr', 'LETTER_R'], ['Ss', 'LETTER_S'], ['Tt', 'LETTER_T'],
    ['Uu', 'LETTER_U'], ['Vv', 'LETTER_V'], ['Ww', 'LETTER_W'], ['Xx', 'LETTER_X'],
    ['Yy', 'LETTER_Y'], ['Zz', 'LETTER_Z']];

var shortNumlist = [
    ['1', '1'],
    ['2', '2'],
    ['3', '3']];

Blockly.Blocks['pixetto_setup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_INITIAL);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.PIXETTO_RX)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIXETTO_RX");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.PIXETTO_TX)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIXETTO_TX");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_uvc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_UVC)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_UVC_CLOSE, 'false'], [Blockly.Msg.PIXETTO_UVC_OPEN, 'true']]), "PIXETTO_OC");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['pixetto_set_detected'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_SET_DETECTED)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_DETECTED_ACTIVE, 'false'], [Blockly.Msg.PIXETTO_DETECTED_ASK, 'true']]), "PIXETTO_SD");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['pixetto_flush'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_FLUSH);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['pixetto_function'] = {
    init: function () {
        funclist = [
            [Blockly.Msg.PIXETTO_FCD, 'FUNC_COLOR_DETECTION'],
            [Blockly.Msg.PIXETTO_FCCD, 'FUNC_COLOR_CODE_DETECTION'],
            [Blockly.Msg.PIXETTO_FSD, 'FUNC_SHAPE_DETECTION'],
            [Blockly.Msg.PIXETTO_FSPD, 'FUNC_SPHERE_DETECTION'],
            [Blockly.Msg.PIXETTO_FTM, 'FUNC_TEMPLATE_MATCHING'],
            [Blockly.Msg.PIXETTO_FK, 'FUNC_KEYPOINTS'],
            ['apriltag(16h5)', 'FUNC_APRILTAG'],
            [Blockly.Msg.PIXETTO_FNN, 'FUNC_NEURAL_NETWORK'],
            [Blockly.Msg.PIXETTO_FFD, 'FUNC_FACE_DETECTION'],
            [Blockly.Msg.PIXETTO_FTSD, 'FUNC_TRAFFIC_SIGN_DETECTION'],
            [Blockly.Msg.PIXETTO_FHDD, 'FUNC_HANDWRITTEN_DIGITS_DETECTION'],
            [Blockly.Msg.PIXETTO_FHLD, 'FUNC_HANDWRITTEN_LETTERS_DETECTION'],
            [Blockly.Msg.PIXETTO_FCLD, 'FUNC_CLOUD_DETECTION'],
            [Blockly.Msg.PIXETTO_FLD, 'FUNC_LANES_DETECTION'],
            [Blockly.Msg.PIXETTO_FED, 'FUNC_EQUATION_DETECTION'],
            [Blockly.Msg.PIXETTO_FSC, 'FUNC_SIMPLE_CLASSIFIER'],
            [Blockly.Msg.PIXETTO_FVC, 'FUNC_VOICE_COMMAND']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_FUNC)
                .appendField(new Blockly.FieldDropdown(funclist), "PIXETTO_FUNC_SELECTOR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_detected'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_DETECTED);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /** @return {!string} Type of the block, text length always an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    }
};

Blockly.Blocks['pixetto_now_function'] = {
    init: function () {
        funclist = [
            [Blockly.Msg.PIXETTO_FCD, 'FUNC_COLOR_DETECTION'],
            [Blockly.Msg.PIXETTO_FCCD, 'FUNC_COLOR_CODE_DETECTION'],
            [Blockly.Msg.PIXETTO_FSD, 'FUNC_SHAPE_DETECTION'],
            [Blockly.Msg.PIXETTO_FSPD, 'FUNC_SPHERE_DETECTION'],
            [Blockly.Msg.PIXETTO_FTM, 'FUNC_TEMPLATE_MATCHING'],
            [Blockly.Msg.PIXETTO_FK, 'FUNC_KEYPOINTS'],
            ['apriltag(16h5)', 'FUNC_APRILTAG'],
            [Blockly.Msg.PIXETTO_FNN, 'FUNC_NEURAL_NETWORK'],
            [Blockly.Msg.PIXETTO_FFD, 'FUNC_FACE_DETECTION'],
            [Blockly.Msg.PIXETTO_FTSD, 'FUNC_TRAFFIC_SIGN_DETECTION'],
            [Blockly.Msg.PIXETTO_FHDD, 'FUNC_HANDWRITTEN_DIGITS_DETECTION'],
            [Blockly.Msg.PIXETTO_FHLD, 'FUNC_HANDWRITTEN_LETTERS_DETECTION'],
            [Blockly.Msg.PIXETTO_FCLD, 'FUNC_CLOUD_DETECTION'],
            [Blockly.Msg.PIXETTO_FLD, 'FUNC_LANES_DETECTION'],
            [Blockly.Msg.PIXETTO_FED, 'FUNC_EQUATION_DETECTION'],
            [Blockly.Msg.PIXETTO_FSC, 'FUNC_SIMPLE_CLASSIFIER'],
            [Blockly.Msg.PIXETTO_FVC, 'FUNC_VOICE_COMMAND']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_NOW_FUNC)
                .appendField(new Blockly.FieldDropdown(funclist), "PIXETTO_FUNC_SELECTOR");
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_getfuncid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_FUNC_ID);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_gettypeid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_TYPE_ID);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_getposx'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_POS_X);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_getposy'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_POS_Y);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_getwidth'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_WIDTH);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_getheigth'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_GET_HEIGHT);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_numobjects'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_NUM_OBJECT);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_color_detection'] = {
    init: function () {
        colorlist = [
            [Blockly.Msg.PIXETTO_CRED, 'COLOR_RED'],
            [Blockly.Msg.PIXETTO_CYELLOW, 'COLOR_YELLOW'],
            [Blockly.Msg.PIXETTO_CGREEN, 'COLOR_GREEN'],
            [Blockly.Msg.PIXETTO_CBLUE, 'COLOR_BLUE'],
            [Blockly.Msg.PIXETTO_CPURPLE, 'COLOR_PURPLE'],
            [Blockly.Msg.PIXETTO_CBLACK, 'COLOR_BLACK']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_COLOR_DETECTION)
                .appendField(new Blockly.FieldDropdown(colorlist), "PIXETTO_COLOR_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_shape_detection'] = {
    init: function () {
        shaphelist = [
            [Blockly.Msg.PIXETTO_SHAPE_ROUND, 'SHAPE_ROUND'],
            [Blockly.Msg.PIXETTO_SHAPE_RECTANGLE, 'SHAPE_RECTANGLE'],
            [Blockly.Msg.PIXETTO_SHAPE_TRIANGLE, 'SHAPE_TRIANGLE'],
            [Blockly.Msg.PIXETTO_SHAPE_PENTAGON, 'SHAPE_PENTAGON']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_SHAPE_DETECTION)
                .appendField(new Blockly.FieldDropdown(shaphelist), "PIXETTO_SHAPE_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_sphere_detection'] = {
    init: function () {
        colorlist = [
            [Blockly.Msg.PIXETTO_CRED, 'COLOR_RED'],
            [Blockly.Msg.PIXETTO_CYELLOW, 'COLOR_YELLOW'],
            [Blockly.Msg.PIXETTO_CGREEN, 'COLOR_GREEN'],
            [Blockly.Msg.PIXETTO_CBLUE, 'COLOR_BLUE'],
            [Blockly.Msg.PIXETTO_CPURPLE, 'COLOR_PURPLE'],
            [Blockly.Msg.PIXETTO_CBLACK, 'COLOR_BLACK']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_SPHERE_DETECTION)
                .appendField(new Blockly.FieldDropdown(colorlist), "PIXETTO_SPHERE_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_template_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_TEMPLATE_DETECTION)
            .appendField(new Blockly.FieldDropdown(shortNumlist), "PIXETTO_TEMPLATE_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_keypoints_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_KEYPOINTS_DETECTION)
            .appendField(new Blockly.FieldDropdown(shortNumlist), "PIXETTO_KEYPOINTS_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_neural_network_detection'] = {
    init: function () {
        this.appendValueInput("PIXETTO_NEURAL_NETWORK")
            .appendField(Blockly.Msg.PIXETTO_NEURAL_NETWORK_DETECTION)
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_sign_detection'] = {
    init: function () {
        signlist = [
            [Blockly.Msg.PIXETTO_SIGN_NE, 'SIGN_NO_ENTRE'],
            [Blockly.Msg.PIXETTO_SIGN_NLT, 'SIGN_NO_LEFT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_NRT, 'SIGN_NO_RIGHT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_WW, 'SIGN_WRONG_WAY'],
            [Blockly.Msg.PIXETTO_SIGN_NUT, 'SIGN_NO_U_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_MAXS, 'SIGN_MAX_SPEED'],
            [Blockly.Msg.PIXETTO_SIGN_OWT, 'SIGN_ONEWAY_TRAFFIC'],
            [Blockly.Msg.PIXETTO_SIGN_LT, 'SIGN_LEFT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_RT, 'SIGN_RIGHT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_MINS, 'SIGN_MIN_SPEED'],
            [Blockly.Msg.PIXETTO_SIGN_UT, 'SIGN_U_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_TA, 'SIGN_TUNNEL_AHEAD'],
            [Blockly.Msg.PIXETTO_SIGN_BOC, 'SIGN_BEWARE_OF_CHILDREN'],
            [Blockly.Msg.PIXETTO_SIGN_RA, 'SIGN_ROUNDABOUT'],
            [Blockly.Msg.PIXETTO_SIGN_YTP, 'SIGN_YIELD_TO_PEDESTRIAN'],
            [Blockly.Msg.PIXETTO_SIGN_REDL, 'SIGN_RED_LIGHT'],
            [Blockly.Msg.PIXETTO_SIGN_GREENL, 'SIGN_GREEN_LIGHT']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_SIGN_DETECTION)
                .appendField(new Blockly.FieldDropdown(signlist), "PIXETTO_SIGN_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_num_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_NUM_DETECTION)
            .appendField(new Blockly.FieldDropdown(numlist), "PIXETTO_NUM_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_latter_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_LATTER_DETECTION)
            .appendField(new Blockly.FieldDropdown(latterlist), "PIXETTO_NUM_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_cloud_detection'] = {
    init: function () {
        this.appendValueInput("PIXETTO_CLOUD")
            .appendField(Blockly.Msg.PIXETTO_CLOUD_DETECTION)
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_classifier_detection'] = {
    init: function () {
        this.appendValueInput("PIXETTO_CLASSIFIER")
            .appendField(Blockly.Msg.PIXETTO_CLASSIFIER_DETECTION)
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_voice_detection'] = {
    init: function () {
        voicelist = [
            [Blockly.Msg.PIXETTO_VOICE_HELLO, 'VOICE_Hello'],
            [Blockly.Msg.PIXETTO_VOICE_THANKS, 'VOICE_Thanks'],
            [Blockly.Msg.PIXETTO_VOICE_BYE, 'VOICE_Bye'],
            [Blockly.Msg.PIXETTO_VOICE_WHATSTHIS, 'VOICE_WhatsThis'],
            [Blockly.Msg.PIXETTO_VOICE_WHATTIME, 'VOICE_WhatTime'],
            [Blockly.Msg.PIXETTO_VOICE_HOWOLD, 'VOICE_HowOld'],
            [Blockly.Msg.PIXETTO_VOICE_WHATDAY, 'VOICE_WhatDay'],
            [Blockly.Msg.PIXETTO_VOICE_TELLSTORY, 'VOICE_TellStory'],
            [Blockly.Msg.PIXETTO_VOICE_TELLJOKE, 'VOICE_TellJoke'],
            [Blockly.Msg.PIXETTO_VOICE_READPOME, 'VOICE_ReadPoem'],
            [Blockly.Msg.PIXETTO_VOICE_TURNONLIGHT, 'VOICE_TurnOnLight'],
            [Blockly.Msg.PIXETTO_VOICE_TURNOFFLIGHT, 'VOICE_TurnOffLight'],
            [Blockly.Msg.PIXETTO_VOICE_TURNLEFT, 'VOICE_TurnLeft'],
            [Blockly.Msg.PIXETTO_VOICE_TURNRIGHT, 'VOICE_TurnRight'],
            [Blockly.Msg.PIXETTO_VOICE_GOAHEAD, 'VOICE_GoAhead'],
            [Blockly.Msg.PIXETTO_VOICE_MOVEBACK, 'VOICE_MoveBack'],
            [Blockly.Msg.PIXETTO_VOICE_STOP, 'VOICE_Stop'],
            [Blockly.Msg.PIXETTO_VOICE_OPEN, 'VOICE_Open'],
            [Blockly.Msg.PIXETTO_VOICE_CLOSE, 'VOICE_Close'],
            [Blockly.Msg.PIXETTO_VOICE_OPENEYES1, 'VOICE_OpenEyes1'],
            [Blockly.Msg.PIXETTO_VOICE_OPENEYES2, 'VOICE_OpenEyes2'],
            [Blockly.Msg.PIXETTO_VOICE_CLOSEEYES1, 'VOICE_CloseEyes1'],
            [Blockly.Msg.PIXETTO_VOICE_CLOSEEYES2, 'VOICE_CloseEyes2'],
            [Blockly.Msg.PIXETTO_VOICE_JUMP, 'VOICE_Jump'],
            [Blockly.Msg.PIXETTO_VOICE_STANDUP, 'VOICE_StandUp'],
            [Blockly.Msg.PIXETTO_VOICE_SQUATDOWN, 'VOICE_SquatDown']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_VOICE_DETECTION)
                .appendField(new Blockly.FieldDropdown(voicelist), "PIXETTO_VOICE_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_apriltag_detection'] = {
    init: function () {
        apriltaglist = [
            [Blockly.Msg.PIXETTO_APRILTAG_POS_X, 'APRILTAG_POS_X'],
            [Blockly.Msg.PIXETTO_APRILTAG_POS_Y, 'APRILTAG_POS_Y'],
            [Blockly.Msg.PIXETTO_APRILTAG_POS_Z, 'APRILTAG_POS_Z'],
            [Blockly.Msg.PIXETTO_APRILTAG_ROT_X, 'APRILTAG_ROT_X'],
            [Blockly.Msg.PIXETTO_APRILTAG_ROT_Y, 'APRILTAG_ROT_Y'],
            [Blockly.Msg.PIXETTO_APRILTAG_ROT_Z, 'APRILTAG_ROT_Z'],
            [Blockly.Msg.PIXETTO_APRILTAG_CENTER_X, 'APRILTAG_CENTER_X'],
            [Blockly.Msg.PIXETTO_APRILTAG_CENTER_Y, 'APRILTAG_CENTER_Y']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_APRILTAG_DETECTION)
                .appendField(new Blockly.FieldDropdown(apriltaglist), "PIXETTO_APRILTAG_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_lanes_detection'] = {
    init: function () {
        laneslist = [
            [Blockly.Msg.PIXETTO_LANES_LX1, 'LANES_LX1'],
            [Blockly.Msg.PIXETTO_LANES_LY1, 'LANES_LY1'],
            [Blockly.Msg.PIXETTO_LANES_LX2, 'LANES_LX2'],
            [Blockly.Msg.PIXETTO_LANES_LY2, 'LANES_LY2'],
            [Blockly.Msg.PIXETTO_LANES_RX1, 'LANES_RX1'],
            [Blockly.Msg.PIXETTO_LANES_RY1, 'LANES_RY1'],
            [Blockly.Msg.PIXETTO_LANES_RX2, 'LANES_RX2'],
            [Blockly.Msg.PIXETTO_LANES_RY2, 'LANES_RY2']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_LANES_DETECTION)
                .appendField(new Blockly.FieldDropdown(laneslist), "PIXETTO_LANES_SELECTOR")
                .appendField(Blockly.Msg.PIXETTO_LANES_XY);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_equation_answer'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIXETTO_EQUATION_ANSWER);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_color'] = {
    init: function () {
        colorlist = [
            [Blockly.Msg.PIXETTO_CRED, 'COLOR_RED'],
            [Blockly.Msg.PIXETTO_CYELLOW, 'COLOR_YELLOW'],
            [Blockly.Msg.PIXETTO_CGREEN, 'COLOR_GREEN'],
            [Blockly.Msg.PIXETTO_CBLUE, 'COLOR_BLUE'],
            [Blockly.Msg.PIXETTO_CPURPLE, 'COLOR_PURPLE'],
            [Blockly.Msg.PIXETTO_CBLACK, 'COLOR_BLACK']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_COLOR)
                .appendField(new Blockly.FieldDropdown(colorlist), "PIXETTO_COLOR_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_shape'] = {
    init: function () {
        shaphelist = [
            [Blockly.Msg.PIXETTO_SHAPE_ROUND, 'SHAPE_ROUND'],
            [Blockly.Msg.PIXETTO_SHAPE_RECTANGLE, 'SHAPE_RECTANGLE'],
            [Blockly.Msg.PIXETTO_SHAPE_TRIANGLE, 'SHAPE_TRIANGLE'],
            [Blockly.Msg.PIXETTO_SHAPE_PENTAGON, 'SHAPE_PENTAGON']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_SHAPE)
                .appendField(new Blockly.FieldDropdown(shaphelist), "PIXETTO_SHAPE_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_sign'] = {
    init: function () {
        signlist = [
            [Blockly.Msg.PIXETTO_SIGN_NE, 'SIGN_NO_ENTRE'],
            [Blockly.Msg.PIXETTO_SIGN_NLT, 'SIGN_NO_LEFT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_NRT, 'SIGN_NO_RIGHT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_WW, 'SIGN_WRONG_WAY'],
            [Blockly.Msg.PIXETTO_SIGN_NUT, 'SIGN_NO_U_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_MAXS, 'SIGN_MAX_SPEED'],
            [Blockly.Msg.PIXETTO_SIGN_OWT, 'SIGN_ONEWAY_TRAFFIC'],
            [Blockly.Msg.PIXETTO_SIGN_LT, 'SIGN_LEFT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_RT, 'SIGN_RIGHT_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_MINS, 'SIGN_MIN_SPEED'],
            [Blockly.Msg.PIXETTO_SIGN_UT, 'SIGN_U_TURN'],
            [Blockly.Msg.PIXETTO_SIGN_TA, 'SIGN_TUNNEL_AHEAD'],
            [Blockly.Msg.PIXETTO_SIGN_BOC, 'SIGN_BEWARE_OF_CHILDREN'],
            [Blockly.Msg.PIXETTO_SIGN_RA, 'SIGN_ROUNDABOUT'],
            [Blockly.Msg.PIXETTO_SIGN_YTP, 'SIGN_YIELD_TO_PEDESTRIAN'],
            [Blockly.Msg.PIXETTO_SIGN_REDL, 'SIGN_RED_LIGHT'],
            [Blockly.Msg.PIXETTO_SIGN_GREENL, 'SIGN_GREEN_LIGHT']
        ],
            this.appendDummyInput()
                .appendField(Blockly.Msg.PIXETTO_SIGN)
                .appendField(new Blockly.FieldDropdown(signlist), "PIXETTO_SIGN_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_num'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(numlist), "PIXETTO_NUM_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pixetto_latter'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(latterlist), "PIXETTO_LATTER_SELECTOR");
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.pixetto.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};