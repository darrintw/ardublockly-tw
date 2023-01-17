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
