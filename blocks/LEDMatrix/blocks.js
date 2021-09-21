/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.LEDMatrix');

goog.require('Blockly.Blocks');

Blockly.Blocks.LEDMatrix.HUE = 180;

//MAX7219初始化
Blockly.Blocks["MAX7219_init"] = {
    init: function () {
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MAX7219_INIT);
        this.appendValueInput("PIN1")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("DIN(MOSI)")
            .appendField(Blockly.Msg.ARD_PIN);
        this.appendValueInput("PIN2")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("CS")
            .appendField(Blockly.Msg.ARD_PIN);
        this.appendValueInput("PIN3")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("CLK(SCK)")
            .appendField(Blockly.Msg.ARD_PIN);
        this.appendValueInput("hDisplays")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_HDISPALY);
        this.appendValueInput("vDisplays")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_VDISPALY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_INIT_TOOLTIP);
        this.setHelpUrl('');
    }
};

//HT16K33初始化
Blockly.Blocks["HT16K33_Init"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_DISPLAY_MATRIX_INIT);
        this.appendDummyInput("")
            .appendField('SCL')
            .appendField(Blockly.Msg.ARD_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.i2cPins.Wire), "SCL")
            .appendField('SDA')
            .appendField(Blockly.Msg.ARD_PIN)
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.i2cPins.Wire), "SDA");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_TOOPTIP_Matrix_HK16T33_INIT);
        this.setFieldValue("A5", "SCL");
        this.setFieldValue("A4", "SDA");
    }
};

var MATRIX_TYPES = [['MAX7219', 'MAX7219'], ['HT16K33', 'HT16K33']];

//MAX7219顯示點
Blockly.Blocks["display_Matrix_DrawPixel"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MATRIX_TYPE)
            .appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
        this.appendValueInput('XVALUE')
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_DISPLAY_MATRIX_X);
        this.appendValueInput("YVALUE")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_DISPLAY_MATRIX_Y);
        this.appendValueInput("STAT")
            .appendField(Blockly.Msg.ARD_STAT)
            .setCheck([Blockly.Types.NUMBER.output, Blockly.Types.BOOLEAN.output]);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.ARD_DISPLAY_TOOLTIP);
    }
};


//旋轉角度
var display_Rotation_NUM = [
    [Blockly.Msg.ARD_0DEGREE, "0"],
    [Blockly.Msg.ARD_90DEGREE, "3"],
    [Blockly.Msg.ARD_180DEGREE, "2"],
    [Blockly.Msg.ARD_270DEGREE, "1"]
];

//旋轉
Blockly.Blocks["display_Max7219_Rotation"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MATRIX_TYPE)
            .appendField('MAX7219');
        this.appendValueInput("NO")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NO);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_DISPLAY_MATRIX_ROTATE)
            .appendField(new Blockly.FieldDropdown(display_Rotation_NUM), "Rotation_TYPE");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_TOOPTIP_Matrix_HK16T33_ROTATION);
    }
};

//點陣LED旋轉
Blockly.Blocks["display_Max7219_setPosition"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MATRIX_TYPE)
            .appendField('MAX7219');
        this.appendValueInput("NO")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NO);
        this.appendValueInput("X")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X");
        this.appendValueInput("Y")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_TOOPTIP_Matrix_HK16T33_ROTATION);
    }
};

//點陣LED旋轉
Blockly.Blocks["display_HT16K33_Rotation"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MATRIX_TYPE)
            .appendField('HT16K33');
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_DISPLAY_MATRIX_ROTATE)
            .appendField(new Blockly.FieldDropdown(display_Rotation_NUM), "Rotation_TYPE");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_TOOPTIP_Matrix_HK16T33_ROTATION);
    }
};

//點陣LED顯示滾動字元
Blockly.Blocks["display_Matrix_TEXT"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MATRIX_TYPE)
            .appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
        this.appendValueInput("TEXT", String)
            .setCheck(["Number", Blockly.Types.STRING.output])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_TEXT_TO_DISPLAY);
        this.appendValueInput("Speed")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_SPEED);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_TOOPTIP_MATRIX_HK16T33_TEXT);
    }
};

//點陣LED顯示滾動字串
Blockly.Blocks["display_Matrix_print"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MATRIX_TYPE)
            .appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
        this.appendValueInput("TEXT", String)
            .setCheck(["Number", Blockly.Types.STRING.output])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_TEXT_TO_DISPLAY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ARD_TOOPTIP_MATRIX_HK16T33_TEXT);
    }
};

//點陣LED顯示圖案
Blockly.Blocks["display_Matrix_DisplayChar"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MATRIX_TYPE)
            .appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
        this.appendValueInput("NO")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NO);
        this.appendValueInput("LEDArray")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_DISPLAY_MATRIX_PICARRAY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.ARD_TOOPTIP_MATRIX_HK16T33_DISPLAYCHAR);
    }
};

//點陣LED顯示數個圖案
Blockly.Blocks["display_Matrix_LedArray"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_DISPLAY_MATRIX_ARRAYVAR)
            .appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a81")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a82")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a84")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a85")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a86")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a87")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a71")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a72")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a73")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a74")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a75")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a76")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a77")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a61")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a62")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a63")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a64")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a65")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a66")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a67")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a51")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a52")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a53")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a54")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a55")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a56")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a57")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a41")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a42")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a43")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a44")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a45")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a46")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a47")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a31")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a32")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a33")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a34")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a35")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a36")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a37")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a21")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a22")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a23")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a24")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a25")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a26")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a27")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a11")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a12")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a13")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a14")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a15")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a16")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a17")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
        this.setOutput(true, Number);
        this.setTooltip(Blockly.Msg.ARD_TOOPTIP_MATRIX_HK16T33_LEDARRAY);
    }
};

//點陣LED亮度
Blockly.Blocks["display_Matrix_Brightness"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MATRIX_TYPE)
            .appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
        this.appendValueInput("Brightness")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_BRIGHTNESS);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_BRIGHTNESS_TOOLTIP);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

var MAX7219_FILLSCREEN_SELECT = [
    [Blockly.Msg.ARD_MAX7219_FILLSCREEN_ON, "fillScreen(1)"],
    [Blockly.Msg.ARD_MAX7219_FILLSCREEN_OFF, "fillScreen(0)"],
    //[Blockly.MAX7219_SHUTDOWN_ON, "shutdown(1)"],
    // [Blockly.MAX7219_SHUTDOWN_OFF, "shutdown(0)"]
];

//點陣LED 全亮全滅
Blockly.Blocks["display_Matrix_fillScreen"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MATRIX_TYPE)
            .appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_STAT);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(MAX7219_FILLSCREEN_SELECT), "FILLSCREEN_TYPE");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_BRIGHTNESS_TOOLTIP);
    }
};


//點陣LED預設圖案
Blockly.Blocks["Matrix_img"] = {
    init: function () {
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARD_MAX7219_IMG)
            .appendField(new Blockly.FieldDropdown([
                ["↑", "18181818db7e3c18"],
                ["↓", "183c7edb18181818"],
                ["←", "080c06ffff060c08"],
                ["→", "103060ffff603010"],
                ["♥", "183c7effffffe742"],
                ["▲", "00000000ff7e3c18"],
                ["▼", "183c7eff00000000"],
                ["◄", "080c0e0f0f0e0c08"],
                ["►", "103070f0f0703010"],
                ["△", "00000000ff422418"],
                ["▽", "182442ff00000000"],
                ["☺", "3c4299a581a5423c"],
                ["○", "3c4281818181423c"],
                ["◑", "3c72f1f1f1f1723c"],
                ["◐", "3c4e8f8f8f8f4e3c"],
                ["￥", "101010ff10ff2442"],
                ["Χ", "8142241818244281"],
                ["√", "0000010204885020"],
                ["□", "007e424242427e00"],
                ["▣", "007e425a5a427e00"],
                ["◇", "1824428181422418"],
                ["♀", "083e081c2222221c"],
                ["♂", "0e1b111b9ea0c0f0"],
                ["♪", "061f1e1010d07030"],
                ["✈", "203098ffff983020"],
                ["卍", "00f21212fe90909e"],
                ["卐", "009e9090fe1212f2"],
                ["|", "1010101010101010"],
                ["—", "000000ff00000000"],
                ["╱", "0102040810204080"],
                ["＼", "8040201008040201"],
                ["大", "41221408087f0808"],
                ["中", "1010fe9292fe1010"],
                ["小", "0e08492a2a080808"],
                ["米", "00925438fe385492"],
                ["正", "7f0a0a3a08087f00"],
                ["囧", "ffa5a5bdc3a5a5ff"]
            ]), "img_");
        this.setOutput(true);
        this.setTooltip('');
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.setTooltip(Blockly.Msg.ARD_TOOPTIP_Matrix_MAX7219_PREDEFARR);
        this.setHelpUrl('');
    }
};
