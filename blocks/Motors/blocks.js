/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.Motors');

goog.require('Blockly.Blocks');

Blockly.Blocks.Motors.HUE = 180;

const afmotor_options = [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']];

Blockly.Blocks['servo_attach'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_ATTACH)
            .appendField(new Blockly.FieldVariable("servo"), "SERVO_NAME")
            .appendField(", " + Blockly.Msg.ARD_SERVO_PIN)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'SERVO_PIN');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_ATTACH_TIP);
        this.setHelpUrl("https://www.arduino.cc/en/Reference/ServoAttach");
    }
};

Blockly.Blocks['servo_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_READ)
            .appendField(new Blockly.FieldVariable('servo'), 'SERVO_NAME');
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_READ_TIP);
        this.setHelpUrl("https://arduino.cc/en/Reference/ServoRead");
    }
};


Blockly.Blocks['servo_write'] = {
    init: function () {
        this.appendValueInput('SERVO_ANGLE')
            .setCheck(Blockly.Types.NUMBER.checkList)
            .appendField(Blockly.Msg.ARD_SERVO_WRITE)
            .appendField(new Blockly.FieldVariable('servo'), 'SERVO_NAME')
            .appendField(Blockly.Msg.ARD_SERVO_WRITE_TO);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_WRITE_DEG);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_WRITE_TIP);
        this.setHelpUrl("https://arduino.cc/en/Reference/ServoWrite");
    }
};

Blockly.Blocks['servo_write_angle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_WRITE)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'SERVO_PIN');
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_WRITE_TO)
            .appendField(new Blockly.FieldAngle(90), "SERVO_ANGLE")
            .appendField(Blockly.Msg.ARD_SERVO_WRITE_DEG_180);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_WRITE_TIP);
        this.setHelpUrl("https://arduino.cc/en/Reference/ServoWrite");
    }
};

Blockly.Blocks['servo_detach'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("servo"), "SERVO_NAME")
            .appendField(Blockly.Msg.ARD_SERVO_DETACH);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_DETACH_TIP);
        this.setHelpUrl("https://www.arduino.cc/en/Reference/ServoDetach");
    }
};


Blockly.Blocks['servo_attach'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_ATTACH)
            .appendField(new Blockly.FieldVariable("servo"), "SERVO_NAME")
            .appendField(", " + Blockly.Msg.ARD_SERVO_PIN)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'SERVO_PIN');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_ATTACH_TIP);
        this.setHelpUrl("https://www.arduino.cc/en/Reference/ServoAttach");
    }
};

Blockly.Blocks['servo_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_READ)
            .appendField(new Blockly.FieldVariable('servo'), 'SERVO_NAME');
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_READ_TIP);
        this.setHelpUrl("https://arduino.cc/en/Reference/ServoRead");
    }
};


Blockly.Blocks['servo_write'] = {
    init: function () {
        this.appendValueInput('SERVO_ANGLE')
            .setCheck(Blockly.Types.NUMBER.checkList)
            .appendField(Blockly.Msg.ARD_SERVO_WRITE)
            .appendField(new Blockly.FieldVariable('servo'), 'SERVO_NAME')
            .appendField(Blockly.Msg.ARD_SERVO_WRITE_TO);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_WRITE_DEG);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_WRITE_TIP);
        this.setHelpUrl("https://arduino.cc/en/Reference/ServoWrite");
    }
};

Blockly.Blocks['servo_pwm'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_PWM)
            .appendField(new Blockly.FieldVariable('servo'), 'SERVO_NAME');
        this.appendValueInput('SERVO_PWM')
            .appendField(Blockly.Msg.ARD_SERVO_PWM_TO);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_PWM_TIP);
        this.setHelpUrl("https://www.arduino.cc/reference/en/libraries/servo/writemicroseconds/");
    }
};
Blockly.Blocks['servo_write_angle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_WRITE)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'SERVO_PIN');
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_WRITE_TO)
            .appendField(new Blockly.FieldAngle(90), "SERVO_ANGLE")
            .appendField(Blockly.Msg.ARD_SERVO_WRITE_DEG_180);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_WRITE_TIP);
        this.setHelpUrl("https://arduino.cc/en/Reference/ServoWrite");
    }
};

Blockly.Blocks['servo_detach'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("servo"), "SERVO_NAME")
            .appendField(Blockly.Msg.ARD_SERVO_DETACH);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip(Blockly.Msg.ARD_SERVO_DETACH_TIP);
        this.setHelpUrl("https://www.arduino.cc/en/Reference/ServoDetach");
    }
};

/* afmotor */
Blockly.Blocks['afmotor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_AFMOTOR)
            .appendField(Blockly.Msg.ARD_AFMOTOR_CHANNEL)
            .appendField(new Blockly.FieldDropdown(afmotor_options), "afmotor_channel")
            .appendField(Blockly.Msg.ARD_AFMOTOR_CONTROL)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARD_AFMOTOR_FORWARD, "FORWARD"],
                    [Blockly.Msg.ARD_AFMOTOR_BACKWARD, "BACKWARD"],
                    [Blockly.Msg.ARD_AFMOTOR_RELEASE, "RELEASE"]]),
                "afmotor_control")
            .appendField(Blockly.Msg.ARD_AFMOTOR_SPEED)
            .appendField(new Blockly.FieldNumber('255'), "afmotor_speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip("");
        this.setHelpUrl("https://learn.adafruit.com/adafruit-arduino-lesson-15-dc-motor-reversing/lm293d");
    }
};

/* afmotor */
Blockly.Blocks['afmotor_var'] = {
    init: function () {
        this.appendValueInput("afmotor_speed")
            .appendField(Blockly.Msg.ARD_AFMOTOR)
            .appendField(Blockly.Msg.ARD_AFMOTOR_CHANNEL)
            .appendField(new Blockly.FieldDropdown(afmotor_options), "afmotor_channel")
            .appendField(Blockly.Msg.ARD_AFMOTOR_CONTROL)
            .appendField(new Blockly.FieldDropdown([
                    [Blockly.Msg.ARD_AFMOTOR_FORWARD, "FORWARD"],
                    [Blockly.Msg.ARD_AFMOTOR_BACKWARD, "BACKWARD"],
                    [Blockly.Msg.ARD_AFMOTOR_RELEASE, "RELEASE"]
                ]),
                "afmotor_control")
            .appendField(Blockly.Msg.ARD_AFMOTOR_SPEED);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.setTooltip("");
        this.setHelpUrl("https://learn.adafruit.com/adafruit-arduino-lesson-15-dc-motor-reversing/lm293d");
    }
};

/* stepper */
Blockly.Blocks["stepper_setup_2pin"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_STEPPER_SETUP_4PIN)
            .appendField(new Blockly.FieldVariable('mystepper'), 'STEPPER_NAME');
        this.appendValueInput("PIN1", Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPER_PIN1);
        this.appendValueInput("PIN2", Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPER_PIN2);
        this.appendValueInput('STEPS')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPPE_RREVOLUTION);
        this.appendValueInput('SPEED')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPER_SET_SPEED);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_TOOLTIP_STEPPER_2PIN);
    }
};

/* stepper */
Blockly.Blocks["stepper_setup_4pin"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_STEPPER_SETUP_4PIN)
            .appendField(new Blockly.FieldVariable('mystepper'), 'STEPPER_NAME');
        this.appendValueInput("PIN1", Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPER_PIN1);
        this.appendValueInput("PIN2", Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPER_PIN2);
        this.appendValueInput("PIN3", Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPER_PIN3);
        this.appendValueInput("PIN4", Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPER_PIN4);
        this.appendValueInput('STEPS')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPPE_RREVOLUTION);
        this.appendValueInput('SPEED')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPER_SET_SPEED);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_TOOLTIP_STEPPER_4PIN);
    }
};

Blockly.Blocks["stepper_speed"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_STEPPER)
            .appendField(new Blockly.FieldVariable('mystepper'), 'STEPPER_NAME');
        this.appendValueInput('SPEED')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPER_SET_SPEED);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_TOOLTIP_STEPPER_MOVE);
    }
};
Blockly.Blocks["stepper_move"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_STEPPER)
            .appendField(new Blockly.FieldVariable('mystepper'), 'STEPPER_NAME');
        this.appendValueInput('STEP')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_STEPPER_STEP);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_TOOLTIP_STEPPER_MOVE);
    }
};


//MotorDriverBoard
var MOTORDRIVERBOARD_VERSION;
var MOTORDRIVERBOARD_DCPORTS;
var MOTORDRIVERBOARD_DCDIRECTION;
var MOTORDRIVERBOARD_ENPORTS;
var MOTORDRIVERBOARD_ENDIRECTION;
var MOTORDRIVERBOARD_STPORTS;
var MOTORDRIVERBOARD_STDIRECTION;
//var MOTORDRIVERBOARD_STSTYLE;
var MOTORDRIVERBOARD_STDOUBLESINGLE;
var MOTORDRIVERBOARD_RGBNUMBER;
var MOTORDRIVERBOARD_RGBCOLOR;
var MOTORDRIVERBOARD_SOUNDS;
var MOTORDRIVERBOARD_IRKEY2;
var MOTORDRIVERBOARD_IRKEY;
var MOTORDRIVERBOARD_GPIO;
var MOTORDRIVERBOARD_GPIOMODE;
var MOTORDRIVERBOARD_PS2KEYS;
var MOTORDRIVERBOARD_VIBRATE;
var MOTORDRIVERBOARD_VIBRATE2;
var MOTORDRIVERBOARD_SERVOPORTS;

//第0個圖形塊的樣式,MotorDriverBoard初始化
Blockly.Blocks["md_setup"] = {
    init: function () {
        MOTORDRIVERBOARD_VERSION = [
            ["V3.0", "V3.0"],
            ["V4.0", "V4.0"],
            ["V5.0", "V5.0"],
            ["V5.2", "V5.2"]
        ];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_SETUP);
            //.appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_VERSION), "boardver");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_setFreq"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendValueInput("freq")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_GPIOFREQ);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_gpio"] = {
    init: function () {
        MOTORDRIVERBOARD_GPIO = [
            ["S1", "S1"],
            ["S2", "S2"],
            ["S3", "S3"],
            ["S4", "S4"],
            ["S5", "S5"],
            ["S6", "S6"],
            ["S7", "S7"],
            ["S8", "S8"]];
        MOTORDRIVERBOARD_GPIOMODE = [
            [Blockly.Msg.MOTORDRIVERBOARD_GPIOHIGH, "HIGH"],
            [Blockly.Msg.MOTORDRIVERBOARD_GPIOLOW, "LOW"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_GPIO)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_GPIO), "mdGpio")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_GPIOMODE)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_GPIOMODE), "mdGpioMode");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_pwm"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_GPIO)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_GPIO), "mdGpio");
        this.appendValueInput("pwm")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_GPIOPWM);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_initdcmotor"] = {
    init: function () {
        MOTORDRIVERBOARD_DCPORTS = [
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_FIRST, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_SECOND, "2"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_THIRD, "3"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_FOURTH, "4"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITDCMOTOR)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_DCPORTS), "DCPorts");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//第一個圖形塊的樣式,直流電機下拉（下拉沒有value），正反轉（下拉），速度（輸入,有value）
Blockly.Blocks["md_dcmotor"] = {
    init: function () {
        MOTORDRIVERBOARD_DCPORTS = [
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_FIRST, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_SECOND, "2"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_THIRD, "3"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_FOURTH, "4"]];
        MOTORDRIVERBOARD_DCDIRECTION = [
            [Blockly.Msg.MOTORDRIVERBOARD_DCDIRECTION_FORWARD, "FORWARD"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCDIRECTION_BACK, "BACKWARD"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCDIRECTION_BRAKE, "BRAKE"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCDIRECTION_RELEASE, "RELEASE"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_DCMOTOR)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_DCPORTS), "DCPorts")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_DCDIRECTIONS)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_DCDIRECTION), "DCDirections")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFSPEED);
        this.appendValueInput("Speed")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//第二個圖形塊的樣式,停止直流電機下拉（下拉沒有value）
Blockly.Blocks["md_stopDCmotor"] = {
    init: function () {
        MOTORDRIVERBOARD_DCPORTS = [
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_FIRST, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_SECOND, "2"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_THIRD, "3"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_FOURTH, "4"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_STOPDCMOTOR)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_DCPORTS), "DCPorts");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
Blockly.Blocks["md_initENmotor"] = {
    init: function () {
        MOTORDRIVERBOARD_ENPORTS = [
            [Blockly.Msg.MOTORDRIVERBOARD_ENPORTS_FIRST, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_ENPORTS_SECOND, "2"],
            [Blockly.Msg.MOTORDRIVERBOARD_ENPORTS_THIRD, "3"],
            [Blockly.Msg.MOTORDRIVERBOARD_ENPORTS_FOURTH, "4"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITENMOTOR)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_ENPORTS), "ENPorts");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//第三個圖形塊的樣式,編碼電機下拉（下拉沒有value），正反轉（下拉），速度（輸入,有value）
Blockly.Blocks["md_enmotor"] = {
    init: function () {
        MOTORDRIVERBOARD_ENDIRECTION = [
            [Blockly.Msg.MOTORDRIVERBOARD_ENDIRECTION_FORWARD, "FORWARD"],
            [Blockly.Msg.MOTORDRIVERBOARD_ENDIRECTION_BACK, "BACKWARD"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_ENMOTOR)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_ENPORTS), "ENPorts")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_ENDIRECTIONS)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_ENDIRECTION), "ENDirections")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFSPEED);
        this.appendValueInput("Speed")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//第四個圖形塊的樣式,停止編碼電機 下拉（下拉沒有value）
Blockly.Blocks["md_stopENmotor"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_STOPENMOTOR)
            // .appendField(new Blockly.FieldImage("../../media/MotorDriverBoard/md_MotorDriverBoard.png", 38, 32))
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_ENPORTS), "ENPorts")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
Blockly.Blocks["md_initstmotor"] = {
    init: function () {
        MOTORDRIVERBOARD_STPORTS = [
            [Blockly.Msg.MOTORDRIVERBOARD_STPORTS_FIRST, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_STPORTS_SECOND, "2"]]
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITSTMOTOR)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_STPORTS), "STPorts")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_STEPS);
        this.appendValueInput("Steps")
            .setCheck(Blockly.Types.NUMBER.checkList)
        this.appendValueInput("freq")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_MINFREQ);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};
//第五個圖形塊的樣式,步進電機下拉，步數value，方向下拉，方式下拉
Blockly.Blocks["md_stmotor"] = {
    init: function () {
        MOTORDRIVERBOARD_STDOUBLESINGLE = [
            [Blockly.Msg.MOTORDRIVERBOARD_STDOUBLE, "DOUBLE"],
            [Blockly.Msg.MOTORDRIVERBOARD_STSINGLE, "SINGLE"],
            [Blockly.Msg.MOTORDRIVERBOARD_INTERLEAVE, "INTERLEAVE"]];
        MOTORDRIVERBOARD_STDIRECTION = [
            [Blockly.Msg.MOTORDRIVERBOARD_STDIRECTION_FORWARD, "FORWARD"],
            [Blockly.Msg.MOTORDRIVERBOARD_STDIRECTION_BACK, "BACKWARD"]];
        /*
        MOTORDRIVERBOARD_STSTYLE = [
            [Blockly.Msg.MOTORDRIVERBOARD_STYLE_SINGLE, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_STYLE_DOUBLE, "2"],
            [Blockly.Msg.MOTORDRIVERBOARD_STYLE_INTERLEAVE, "3"],
            [Blockly.Msg.MOTORDRIVERBOARD_STYLE_MICROSTEP, "4"]];*/
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_STMOTOR)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_STPORTS), "STPorts")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_STDIRECTIONS)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_STDIRECTION), "STDirections")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_STDOUBLESINGLE)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_STDOUBLESINGLE), "doubleSingle")
            //.appendField(Blockly.Msg.MOTORDRIVERBOARD_STSTYLES)
            //.appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_STSTYLE), "STStyles")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_STEPS1);
        this.appendValueInput("Steps")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//停止步進電機
Blockly.Blocks["md_stopstmotor"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_STOPSTMOTOR)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_STPORTS), "STTPorts");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};


Blockly.Blocks["md_initRGB"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITRGB);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);

    }
};
//第六個圖形塊的樣式,rgb
Blockly.Blocks["md_RGB"] = {
    init: function () {
        MOTORDRIVERBOARD_RGBCOLOR = [
            [Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_RED, "0xFF0000"],
            [Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_GREEN, "0x00FF00"],
            [Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_BLUE, "0x0000FF"],
            [Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_YELLOW, "0xFFFF00"],
            [Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_PURPLE, "0xFF00FF"],
            [Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_WHITE, "0xFFFFFF"],
            [Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOR_OFF, "0x000000"]];
        MOTORDRIVERBOARD_RGBNUMBER = [
            [Blockly.Msg.MOTORDRIVERBOARD_RGBNUMBER_ALL, "0"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_SETRGB)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_RGBNUMBER), "RGB")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOUR)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_RGBCOLOR), "RGBCOLOR");
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_RGBBRIGHTNESSS);
        this.appendValueInput("brightnesss");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);

    }
};
//通過模擬值參數設置rgb
Blockly.Blocks["md_setColor"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_SETRGB)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_RGBNUMBER), "RGB")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_RGBCOLOUR);
        this.appendValueInput("red")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_RED)
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("green")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_GREEN)
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("blue")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_BLUE)
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_RGBBRIGHTNESSS)
        this.appendValueInput("brightnessss");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);

    }
};
//設置rgb亮度
Blockly.Blocks["md_setrgbbrightness"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_SETRGBBRIGHTNESS)
        this.appendValueInput("brightness")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);

    }
};
//第七個圖形塊的樣式,播放聲音 下拉
Blockly.Blocks["md_initSounds"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITSOUNDS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
Blockly.Blocks["md_playSounds"] = {
    init: function () {
        MOTORDRIVERBOARD_SOUNDS = [
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_CONNECTED, "0"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_DISCONNECTED, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_BUTTONPUSHED, "2"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_MODE1, "3"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_MODE2, "4"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_MODE3, "5"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_SURPRISE, "6"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_OHOH, "7"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_OHOH2, "8"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_CUDDLY, "9"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_SLEEPING, "10"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_HAPPY, "11"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_SUPERHAPPY, "12"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_SHORTHAPPY, "13"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_SAD, "14"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_CONFUSED, "15"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_FART1, "16"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_FART2, "17"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_FART3, "18"],
            [Blockly.Msg.MOTORDRIVERBOARD_SOUNDS_DIDI, "19"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_PLAYSOUNDS)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_SOUNDS), "Sounds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//第八個圖形塊的樣式 超聲波初始化
Blockly.Blocks["md_initultrasonic"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITULTRASONIC);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//第九個圖形塊的樣式 讀取超聲波距離下拉
Blockly.Blocks["md_readUltrasonicDistance"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_READULTRASONICDISTANCE);
        this.setOutput(true);
        this.setTooltip('');
    }
};
//第十個圖形塊的樣式 紅外接收初始化
Blockly.Blocks["md_initirremote"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITIRREMOTE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//if irremote pressed
Blockly.Blocks["md_isirremote"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_IFIRREMOTEPRESSED);
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};
//第十一個圖形塊的樣式(setOutput) 紅外遙控按鍵（下拉，返回boolean）
Blockly.Blocks["md_irKeyPress"] = {
    init: function () {
        MOTORDRIVERBOARD_IRKEY = [
            ["1", "EM_IR_KEYCODE_1"],
            ["2", "EM_IR_KEYCODE_2"],
            ["3", "EM_IR_KEYCODE_3"],
            ["4", "EM_IR_KEYCODE_4"],
            ["5", "EM_IR_KEYCODE_5"],
            ["6", "EM_IR_KEYCODE_6"],
            ["7", "EM_IR_KEYCODE_7"],
            ["8", "EM_IR_KEYCODE_8"],
            ["9", "EM_IR_KEYCODE_9"],
            ["0", "EM_IR_KEYCODE_0"],
            ["A", "EM_IR_KEYCODE_A"],
            ["B", "EM_IR_KEYCODE_B"],
            ["C", "EM_IR_KEYCODE_C"],
            ["D", "EM_IR_KEYCODE_D"],
            ["+", "EM_IR_KEYCODE_PLUS"],
            ["-", "EM_IR_KEYCODE_REDUCE"],
            ["↑", "EM_IR_KEYCODE_UP"],
            ["↓", "EM_IR_KEYCODE_DOWN"],
            ["OK", "EM_IR_KEYCODE_OK"],
            ["←", "EM_IR_KEYCODE_LEFT"],
            ["→", "EM_IR_KEYCODE_RIGHT"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_IRKEYPRESS)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_IRKEY), "Irkeys");
        this.setOutput(true);
        this.setTooltip('');
    }
};
//第十一個圖形塊的樣式(setOutput) 普通紅外遙控按鍵（下拉，返回boolean）
Blockly.Blocks["md_irKeyPress2"] = {
    init: function () {
        MOTORDRIVERBOARD_IRKEY2 = [
            ["1", "IR_KEYCODE_1"],
            ["2", "IR_KEYCODE_2"],
            ["3", "IR_KEYCODE_3"],
            ["4", "IR_KEYCODE_4"],
            ["5", "IR_KEYCODE_5"],
            ["6", "IR_KEYCODE_6"],
            ["7", "IR_KEYCODE_7"],
            ["8", "IR_KEYCODE_8"],
            ["9", "IR_KEYCODE_9"],
            ["0", "IR_KEYCODE_0"],
            ["*", "IR_KEYCODE_STAR"],
            ["#", "IR_KEYCODE_POUND"],
            ["↑", "IR_KEYCODE_UP"],
            ["↓", "IR_KEYCODE_DOWN"],
            ["OK", "IR_KEYCODE_OK"],
            ["←", "IR_KEYCODE_LEFT"],
            ["→", "IR_KEYCODE_RIGHT"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_IRKEYPRESS2)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_IRKEY2), "Irkeys2");
        this.setOutput(true);
        this.setTooltip('');
    }
};

//第十二個圖形塊的樣式 nrf24l01初始化    field的name不確定使NUM待檢測
Blockly.Blocks["md_initnrf24l01"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//第十三個圖形塊的樣式 NRF24L01發送數據地址value 數據value
Blockly.Blocks["md_nrf24l01send"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01SENDDATA);
        this.appendValueInput("address", String)
            .setCheck([String])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01ADDRESS);
        this.appendValueInput("channel")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01CHANNEL)
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("arr")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01DATA)
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//初始化接收數組
Blockly.Blocks["md_nrf24l01rec"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01SENDDATA);
        this.appendValueInput("address2", String)
            .setCheck([String])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01ADDRESS);
        this.appendValueInput("channel2")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01CHANNEL)
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("arr2")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01DATA2)
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//nrf發送數據
Blockly.Blocks["md_nrf24l01senddatass"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01SENDDATASS);
        this.appendValueInput("nrfdatass")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//nrf24l01發送出數據
Blockly.Blocks["md_nrfissend"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFISSEND);
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};
//已準備接收數據
Blockly.Blocks["md_nrfdataradys"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFREADYDATA);
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};
//nrf接收數據
Blockly.Blocks["md_nrfrecdatas"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01RECDATASSS);
        this.appendValueInput("nrfdatasss")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//第十四個圖形塊的樣式 NRF24L01接收數據地址value
Blockly.Blocks["md_nrf24l01receive"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01RECEIVEDATA);
        this.appendValueInput("address")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01ADDRESS)
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//第十五個圖形塊的樣式 NRF24L01數據不為空
Blockly.Blocks["md_NRF24L01isnotnull"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITNRF24L01ISNOTNULL);
        this.setOutput(true);
        this.setTooltip('');
    }
};
//第十六個圖形塊的樣式 獲取NRF24L01數據
Blockly.Blocks["md_getNRF24L01"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_GETINITNRF24L01);
        this.setOutput(true);
        this.setTooltip('');
    }
};
//第十七個圖形塊的樣式 PS2手柄初始化
Blockly.Blocks["md_PS2init"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_PS2INIT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_ps2getvalue"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_PS2GETVALUE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_PS2_ERROR_CODE)
            .appendField(new Blockly.FieldVariable('ps2_error_code'), 'VAR_ERROR');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//第十八個圖形塊的樣式 PS2鍵被按下（下拉）
Blockly.Blocks["md_WhichPS2KeyPressed"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_WHICHPS2KEYPRESSED);
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};

//第二十個圖形塊的樣式 ps2手柄按下（下拉）
Blockly.Blocks["md_ps2keypress"] = {
    init: function () {
        MOTORDRIVERBOARD_PS2KEYS = [
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_UP, "16"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_DOWN, "64"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_LEFT, "128"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_RIGHT, "32"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_TRIANGLE, "4096"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_CIRCLE, "8192"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_CROSS, "16384"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_SQUARE, "32768"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_L1, "1024"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_L2, "256"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_L3, "2"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_R1, "2048"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_R2, "512"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_R3, "4"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_SELECT, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_START, "8"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_PS2KEYPRESS)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_PS2KEYS), "PS2keys");
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};
//第二十一個圖形塊的樣式 ps2手柄鬆開
Blockly.Blocks["md_ps2keyunpress"] = {
    init: function () {
        MOTORDRIVERBOARD_PS2KEYS = [
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_UP, "16"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_DOWN, "64"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_LEFT, "128"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_RIGHT, "32"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_TRIANGLE, "4096"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_CIRCLE, "8192"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_CROSS, "16384"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_SQUARE, "32768"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_L1, "1024"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_L2, "256"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_L3, "2"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_R1, "2048"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_R2, "512"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_R3, "4"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_SELECT, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_PS2KEYS_START, "8"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_PS2KEYUNPRESS)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_PS2KEYS), "PS2keys");
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};
//第二十二個圖形塊的樣式 獲取搖桿值（下拉）
Blockly.Blocks["md_ps2getvibrate"] = {
    init: function () {
        MOTORDRIVERBOARD_VIBRATE = [
            [Blockly.Msg.MOTORDRIVERBOARD_VIBRATE_LX, "7"],
            [Blockly.Msg.MOTORDRIVERBOARD_VIBRATE_LY, "8"],
            [Blockly.Msg.MOTORDRIVERBOARD_VIBRATE_RX, "5"],
            [Blockly.Msg.MOTORDRIVERBOARD_VIBRATE_RY, "6"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_PS2GETVIBRATE)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_VIBRATE), "Vibrate");
        this.setOutput(true);
        this.setTooltip('');
    }
};
//第二十二個圖形塊的樣式 獲取搖桿角度（下拉）
Blockly.Blocks["md_ps2getvibrate2"] = {
    init: function () {
        MOTORDRIVERBOARD_VIBRATE2 = [
            [Blockly.Msg.MOTORDRIVERBOARD_VIBRATE2_L, "LeftHart()"],
            [Blockly.Msg.MOTORDRIVERBOARD_VIBRATE2_R, "RightHart();"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_PS2GETVIBRATE2)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_VIBRATE2), "Vibrate2");
        this.setOutput(true);
        this.setTooltip('');
    }
};
//第二十三個圖形塊的樣式 讀取ps2狀態
Blockly.Blocks["md_ps2status"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_PS2STATUS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//第二十三個圖形塊的樣式 舵機 接口下拉  角度value
Blockly.Blocks["md_initservo"] = {
    init: function () {
        MOTORDRIVERBOARD_SERVOPORTS = [
            [Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_FIRST, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_SECOND, "2"],
            [Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_THIRD, "3"],
            [Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_FOURTH, "4"],
            [Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_FIVETH, "5"],
            [Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_SIXTH, "6"],
            [Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_SEVENTH, "7"],
            [Blockly.Msg.MOTORDRIVERBOARD_SERVOPORTS_EIGHTH, "8"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_INITSERVO)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_SERVOPORTS), "Servoports");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
Blockly.Blocks["md_servo"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_SERVOPORT)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_SERVOPORTS), "Servoports")
        this.appendValueInput("angle")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_ANGLE)
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);
        /*this.appendValueInput("speed")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_SPEED)
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT);*/
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//讀取舵機角度
Blockly.Blocks["md_readservo"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_SERVOPORT)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_SERVOPORTS), "Servoports")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_READDEGEREES)
        this.setOutput(true);
        this.setTooltip('');
    }
};
//四驅車初始化
Blockly.Blocks["md_m4init"] = {
    init: function () {
        MOTORDRIVERBOARD_DCPORTS = [
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_FIRST, "1"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_SECOND, "2"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_THIRD, "3"],
            [Blockly.Msg.MOTORDRIVERBOARD_DCPORTS_FOURTH, "4"]];
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_M4INIT)
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_LEFTFORWARD)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_DCPORTS), "M4Ports1")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_RIGHTFORWARD)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_DCPORTS), "M4Ports2")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_LEFTBACKWARD)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_DCPORTS), "M4Ports3")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_RIGHTBACKWARD)
            .appendField(new Blockly.FieldDropdown(MOTORDRIVERBOARD_DCPORTS), "M4Ports4")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//前進
Blockly.Blocks["md_m4goforward"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_M4GOFORWARD)
        this.appendValueInput("m4speed1");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//後退
Blockly.Blocks["md_m4backforward"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_M4BACKFORWARD)
        this.appendValueInput("m4speed2");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//左轉
Blockly.Blocks["md_m4turnleft"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_M4TURNLEFT)
        this.appendValueInput("m4speed3");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//右轉
Blockly.Blocks["md_m4turnright"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_M4TURNRIGHT)
        this.appendValueInput("m4speed4");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//左自旋
Blockly.Blocks["md_m4turnlefts"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_M4TURNLEFTS)
        this.appendValueInput("m4speed33");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//右自旋
Blockly.Blocks["md_m4turnrights"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_M4TURNRIGHTS)
        this.appendValueInput("m4speed44");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//行駛角度
Blockly.Blocks["md_m4godegree"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_M4GODEGREE)
        this.appendValueInput("m4godegree")
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_M4GOSPEED)
        this.appendValueInput("m4gospeed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//停止
Blockly.Blocks["md_m4stop"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_M4STOP);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
//藍牙初始化
Blockly.Blocks["md_bluetoothinit"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHINIT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_receivedata"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_RECEIVEDATA)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_receiveddata"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_RECEIVEDDDATA);
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};

Blockly.Blocks.md_bluetoothKeyPress = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHPRESS)
            .appendField(new Blockly.FieldDropdown(
                [
                    ["↑", "0x0008"],
                    ["↓", "0x0020"],
                    ["←", "0x0010"],
                    ["→", "0x0004"],
                    ["green", "0x1000"],
                    ["red", "0x2000"],
                    ["blue", "0x4000"],
                    ["pink", "0x8000"],
                ]), "BLUETOOTHKEY");
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};

Blockly.Blocks["md_bluetoothstyle"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHSTYLE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHSTYLE_BUTTONS, "13"],
                [Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHSTYLE_DIRECTIONS, "5"],
                [Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHSTYLE_SPEEDS, "6"],
            ]), "BLUETOOTHSTYLE")
        this.setOutput(true);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_bluetoothgetdegree"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHGETDEGREE);
        this.setOutput(true);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_bluetoothgetspeed"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_BLUETOOTHGETSPEED);
        this.setOutput(true);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_nrfinit"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFINIT);
        this.appendValueInput("nrfadd", String);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_nrfdataready"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFDATAREADY);
        this.setOutput(true);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_nrfvalue"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFVALUE)
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_nrfgetdata"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFGETDATA)
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_nrfgetpackage"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFGETPACKAGE)
        this.setOutput(true);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_nrfnewob"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFNEWOB)
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_nrfdatafun"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFDATAFUN)
            .appendField(new Blockly.FieldDropdown(
                [
                    [Blockly.Msg.MOTORDRIVERBOARD_NRFDIRECTION, "E_ROBOT_CONTROL_DIRECTION"],
                    [Blockly.Msg.MOTORDRIVERBOARD_NRFSPEED, "E_ROBOT_CONTROL_SPEED"],
                    [Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTON, "E_BUTTON"],
                ]), "datafun");
        this.setOutput(true);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_nrfbuttons"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONS)
            .appendField(new Blockly.FieldDropdown(
                [
                    [Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSL1, "0x0080"],
                    [Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSR1, "0x0040"],
                    [Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSUP, "BT_PAD_UP"],
                    [Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSDOWN, "BT_PAD_DOWN"],
                    [Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSLEFT, "BT_PAD_LEFT"],
                    [Blockly.Msg.MOTORDRIVERBOARD_NRFBUTTONSRIGHT, "BT_PAD_RIGHT"],
                ]), "nrfbuttons");
        this.setOutput(true);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_nrfgetdegree"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFGETDEGREE);
        this.setOutput(true);
        this.setTooltip('');
    }
};

Blockly.Blocks["md_nrfgetspeed"] = {
    init: function () {
        this.setColour(Blockly.Blocks.Motors.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.BLOCKS_CATEGORY_MOTORDRIVERBOARD);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.MOTORDRIVERBOARD_NRFGETSPEED);
        this.setOutput(true);
        this.setTooltip('');
    }
};
