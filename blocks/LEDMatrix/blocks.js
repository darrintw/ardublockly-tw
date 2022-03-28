/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
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
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219)
            .appendField(new Blockly.FieldVariable('lc_matrix'), 'MATRIX_VAR');
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_INIT);
        this.appendValueInput("DIN")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("DIN")
            .appendField(Blockly.Msg.ARD_PIN);
        this.appendValueInput("CS")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("CS")
            .appendField(Blockly.Msg.ARD_PIN);
        this.appendValueInput("CLK")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("CLK")
            .appendField(Blockly.Msg.ARD_PIN);
        this.appendValueInput("NUMS")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NUMS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_INIT_TOOLTIP);
        this.setHelpUrl('');
    }
};

var bright_list = [['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'],
    ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'],
    ['8', '8'], ['9', '9'], ['10', '10'], ['11', '11'],
    ['12', '12'], ['13', '13'], ['14', '14'], ['15', '15']];

//點陣LED亮度
Blockly.Blocks["display_Matrix_Brightness"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219)
            .appendField(new Blockly.FieldVariable('lc_matrix'), 'MATRIX_VAR');
        this.appendValueInput("NO")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NO);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_BRIGHTNESS)
            .appendField(new Blockly.FieldDropdown(bright_list), "Brightness");
        this.setTooltip(Blockly.Msg.ARD_MAX7219_BRIGHTNESS_TOOLTIP);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

//點陣LED全暗
Blockly.Blocks["display_Matrix_clearDisplay"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219)
            .appendField(new Blockly.FieldVariable('lc_matrix'), 'MATRIX_VAR');
        this.appendValueInput("NO")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NO);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_CLEAR);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_BRIGHTNESS_TOOLTIP);
    }
};

var dot_list = [['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'],
    ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7']];

//MAX7219顯示點
Blockly.Blocks["display_Matrix_DrawPixel"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219)
            .appendField(new Blockly.FieldVariable('lc_matrix'), 'MATRIX_VAR');
        this.appendValueInput("NO")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NO);
        this.appendValueInput('XVALUE')
            .setCheck(Blockly.Types.NUMBER.checkList)
            .appendField(Blockly.Msg.ARD_MAX7219_DISPLAY_X)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("YVALUE")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_DISPLAY_Y);
        this.appendValueInput("STAT")
            .appendField(Blockly.Msg.ARD_MAX7219_STAT)
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck([Blockly.Types.NUMBER.output, Blockly.Types.BOOLEAN.output]);
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_DISPLAY_TOOLTIP);
    }
};

//點陣LED顯示全寬圖案
Blockly.Blocks["display_Matrix_predefarr"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219)
            .appendField(new Blockly.FieldVariable('lc_matrix'), 'MATRIX_VAR');
        this.appendValueInput("NO")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NO);
        this.appendValueInput("LEDArray")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_PREDEFARR);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
    }
};

//點陣LED顯示半寬圖案
Blockly.Blocks["display_Matrix_half_predefarr"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219)
            .appendField(new Blockly.FieldVariable('lc_matrix'), 'MATRIX_VAR');
        this.appendValueInput("NO")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NO);
        this.appendValueInput("LEDArray_left")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_PREDEFARR_LEFT);
        this.appendValueInput("LEDArray_right")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_PREDEFARR_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
    }
};

//點陣LED顯示兩位數字
Blockly.Blocks["display_Matrix_two_digital"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219)
            .appendField(new Blockly.FieldVariable('lc_matrix'), 'MATRIX_VAR');
        this.appendValueInput("NO")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NO);
        this.appendValueInput("LEDArray_left")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_LEFT);
        this.appendValueInput("LEDArray_right")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
    }
};

//點陣LED顯示音符
Blockly.Blocks['display_Matrix_multi_tone'] = {
    /**
     * Block for
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_SHOW_TONE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldVariable('lc_matrix'), 'MATRIX_VAR');
        this.appendValueInput("NO")
            .setCheck(Blockly.Types.NUMBER.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MAX7219_NO);
        this.appendValueInput("NOTE_TONE")
            .setCheck(Blockly.Types.STRING.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_NOTE + " " + Blockly.Msg.ARD_TONE);
        this.appendValueInput("TEMPO")
            .setCheck(Blockly.Types.STRING.checkList)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_TEMPO);
        this.setPreviousStatement(true, ['io_single_tone', 'io_multi_tone']);
        this.setNextStatement(true, ['io_single_tone', 'io_multi_tone']);
        this.setColour(Blockly.Blocks.I2CLCD.HUE);
        this.setTooltip(Blockly.Msg.ARD_TONE_TIP);
        this.setHelpUrl('buzzer-piano/index.html');
    }
};

//點陣LED顯示數個圖案
Blockly.Blocks["display_Matrix_LedArray"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_MAX7219_ARRAYVAR)
            .appendField(new Blockly.FieldVariable("LedArray1"), "ARRAY_VAR");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a11")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a12")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a13")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a14")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a15")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a16")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a17")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a21")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a22")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a23")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a24")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a25")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a26")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a27")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a31")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a32")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a33")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a34")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a35")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a36")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a37")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a41")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a42")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a43")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a44")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a45")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a46")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a47")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a51")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a52")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a53")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a54")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a55")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a56")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a57")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a61")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a62")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a63")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a64")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a65")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a66")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a67")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a71")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a72")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a73")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a74")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a75")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a76")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a77")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a81")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a82")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a84")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a85")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a86")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a87")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
    }
};


//點陣LED顯示數個圖案
Blockly.Blocks["display_Matrix_half_LedArray"] = {
    init: function () {
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_MAX7219_ARRAYVAR)
            .appendField(new Blockly.FieldVariable("LedArray1"), "ARRAY_VAR");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a11")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a12")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a13")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a14");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a21")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a22")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a23")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a24");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a31")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a32")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a33")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a34");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a41")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a42")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a43")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a44");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a51")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a52")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a53")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a54");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a61")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a62")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a63")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a64");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a71")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a72")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a73")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a74");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a81")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a82")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "a84");
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
    }
};

var char_digital_list = [
    ["0", "3844444444444438"],
    ["1", "1030101010101038"],
    ["2", "384404040810207C"],
    ["3", "3844041804044438"],
    ["4", "040C1424447C0404"],
    ["5", "7C40407804044438"],
    ["6", "3844407844444438"],
    ["7", "7C04040810202020"],
    ["8", "3844443844444438"],
    ["9", "384444443C044438"]
];

//點陣LED預設數字
Blockly.Blocks["Matrix_char_digital"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_MAX7219_CHAR_DIGITAL)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(char_digital_list), "char_digital_");
        this.setOutput(true);
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
        this.setHelpUrl('');
    }
};

var char_upper_list = [
    ["A", "7EFFC3C3FFFFC3C3"],
    ["B", "FEC3C3FEFFC3C2FE"],
    ["C", "7EC3C0C0C0C0C37E"],
    ["D", "FEC7C3C3C3C3C7FE"],
    ["E", "FFC0C0C0FEC0C0FF"],
    ["F", "FFC0C0C0FEC0C0C0"],
    ["G", "7EC3C0C0C0C7C33E"],
    ["H", "C3C3C3FFFFC3C3C3"],
    ["I", "3C1818181818183C"],
    ["J", "1E0C0C0C0C6C6C38"],
    ["K", "C3C6DCF8F8DCC6C3"],
    ["L", "C0C0C0C0C0C0C0FF"],
    ["M", "C3E7E7FFDBC3C3C3"],
    ["N", "C3E3F3FBDFCFC7C3"],
    ["O", "3C66C3C3C3C3663C"],
    ["P", "FEC3C1C1C3FEC0C0"],
    ["Q", "7EC3C3C3C3CF7E03"],
    ["R", "FEC3C3C3FEFCC6C3"],
    ["S", "7EE3C0C07E03C37E"],
    ["T", "FFFF991818181818"],
    ["U", "C3C3C3C3C3C3C37F"],
    ["V", "C3C3C3C3C3E77E18"],
    ["W", "C3C3C3C3DBFFE7C3"],
    ["X", "C3C3E77E3C66C3C3"],
    ["Y", "C3C3C3FF7E181818"],
    ["Z", "FF03060C183060FF"]
];

//點陣LED預設大寫英文
Blockly.Blocks["Matrix_char_upper"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_MAX7219_CHAR_UPPER)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(char_upper_list), "char_upper");
        this.setOutput(true);
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
        this.setHelpUrl('');
    }
};

var char_lower_list = [
    ["a", "0000003C063E663E"],
    ["b", "006060607C66667C"],
    ["c", "0000003C6660663C"],
    ["d", "000606063E66663E"],
    ["e", "0000003C667E603C"],
    ["f", "001C3630307C3030"],
    ["g", "00003E66663E063C"],
    ["h", "006060607C666666"],
    ["i", "000018001818183C"],
    ["j", "000C000C0C6C6C38"],
    ["k", "006060666C786C66"],
    ["l", "0018181818181818"],
    ["m", "00000063777F6B6B"],
    ["n", "0000007C7E666666"],
    ["o", "0000003C6666663C"],
    ["p", "00007C66667C6060"],
    ["q", "00003C6C6C3C0D0F"],
    ["r", "0000007C66666060"],
    ["s", "0000003E403C027C"],
    ["t", "000018187E181818"],
    ["u", "000000666666663E"],
    ["v", "0000000066663C18"],
    ["w", "000000636B6B6B3E"],
    ["x", "000000663C183C66"],
    ["y", "00000066663E063C"],
    ["z", "0000003C0C18303C"]
];

//點陣LED預設小寫英文
Blockly.Blocks["Matrix_char_lower"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_MAX7219_CHAR_LOWER)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(char_lower_list), "char_lower_");
        this.setOutput(true);
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
        this.setHelpUrl('');
    }
};

var led_img_list = [
    ["↑", "183c7edb18181818"],
    ["↓", "18181818db7e3c18"],
    ["←", "103060ffff603010"],
    ["→", "080c06ffff060c08"],
    ["▲", "183c7eff00000000"],
    ["▼", "00000000ff7e3c18"],
    ["◄", "103070f0f0703010"],
    ["►", "080c0e0f0f0e0c08"],
    ["△", "182442ff00000000"],
    ["▽", "00000000ff422418"],
    ["○", "3c4281818181423c"],
    ["◑", "3c4e8f8f8f8f4e3c"],
    ["◐", "3c72f1f1f1f1723c"],
    ["√", "0000010204885020"],
    ["□", "007e424242427e00"],
    ["▣", "ff81bdbdbdbd81ff"],
    ["◇", "1824428181422418"],
    ["卍", "00f21212fe90909e"],
    ["卐", "009e9090fe1212f2"],
    ["|", "1010101010101010"],
    ["—", "000000ff00000000"],
    ["╱", "8040201008040201"],
    ["＼", "0102040810204080"],
    ["↺", "04085E898581423C"],
    ["↻", "20107A91A181423C"],
    ["☺", "3c42a581a599423c"],
    ["😐", "3C42A581BD81423C"],
    ["☹", "3C42A58199A5423C"],
    ["♀", "3844444438107c10"],
    ["♂", "0f030579d888d870"],
    ["♪", "0c0e0b080878f860"],
    ["✈", "203098ffff983020"],
    ["♥", "6666ffffffff3c18"],
    ["大", "1010fe1010284482"],
    ["中", "08087f49497f0808"],
    ["小", "1010105454921070"],
    ["米", "492a1c7f1c2a4900"],
    ["正", "00fe10105c5050fe"],
    ["冏", "FFA5C3BDA5A5BD83"],
    ["囧", "ffa5a5c3bda5a5ff"]
];

//點陣LED預設圖案
Blockly.Blocks["Matrix_img"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_MAX7219_IMG)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(led_img_list), "img_");
        this.setOutput(true);
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
        this.setHelpUrl('');
    }
};

//半寬數字
var char_digital_half_list = [
    ["0", "69999996"],
    ["1", "26222227"],
    ["2", "6911124F"],
    ["3", "69161196"],
    ["4", "137D9F11"],
    ["5", "F88E1196"],
    ["6", "698E9996"],
    ["7", "F1124888"],
    ["8", "69969996"],
    ["9", "69997196"],
];

//點陣LED預設半寬數字
Blockly.Blocks["Matrix_char_digital_half"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_MAX7219_CHAR_HALF_DIGITAL)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(char_digital_half_list), "char_digital_half_");
        this.setOutput(true);
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
        this.setHelpUrl('');
    }
};

//半寬大寫英文
var char_upper_half_list = [
    ["A", "0699F999"],
    ["B", "0E99E99E"],
    ["C", "06B888B6"],
    ["D", "0E99999E"],
    ["E", "0F88E88F"],
    ["F", "0F88E888"],
    ["G", "06988B97"],
    ["H", "0999F999"],
    ["I", "0E44444E"],
    ["J", "07222AA4"],
    ["K", "09ACCCA9"],
    ["L", "0888888F"],
    ["M", "09FF9999"],
    ["N", "099DFB99"],
    ["O", "06999996"],
    ["P", "0E999E88"],
    ["Q", "06999963"],
    ["R", "0E99ECA9"],
    ["S", "06986196"],
    ["T", "0F666666"],
    ["U", "09999997"],
    ["V", "099999F6"],
    ["W", "09999FF9"],
    ["X", "099F6F99"],
    ["Y", "0999F666"],
    ["Z", "0F136C8F"]
];

//點陣LED預設半寬大寫英文
Blockly.Blocks["Matrix_char_upper_half"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_MAX7219_CHAR_HALF_UPPER)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(char_upper_half_list), "char_upper_half_");
        this.setOutput(true);
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
        this.setHelpUrl('');
    }
};

//半寬小寫英文
var char_lower_half_list = [
    ["a", "00E179B5"],
    ["b", "0888E99E"],
    ["c", "00069896"],
    ["d", "01117997"],
    ["e", "00069F87"],
    ["f", "06544F44"],
    ["g", "0069971E"],
    ["h", "0888AD99"],
    ["i", "0060666F"],
    ["j", "03033BB6"],
    ["k", "0889BEB9"],
    ["l", "06666666"],
    ["m", "0009FF99"],
    ["n", "0008FD99"],
    ["o", "00069996"],
    ["p", "00699E88"],
    ["q", "004AA633"],
    ["r", "0008E988"],
    ["s", "0006861E"],
    ["t", "0066F666"],
    ["u", "00099997"],
    ["v", "000099F6"],
    ["w", "00099FF9"],
    ["x", "00006669"],
    ["y", "00099F16"],
    ["z", "000F36CF"]
];

//點陣LED預設半寬小寫英文
Blockly.Blocks["Matrix_char_lower_half"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_MAX7219_CHAR_HALF_LOWER)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown(char_lower_half_list), "char_lower_half_");
        this.setOutput(true);
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.LEDMatrix.HUE);
        this.setTooltip(Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP);
        this.setHelpUrl('');
    }
};
