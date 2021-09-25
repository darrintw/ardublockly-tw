/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview English strings for test blocks. All names have the postfix
 *     BLOCKS_{category} from the blocks_config.json data.
 */
'use strict';

goog.require('Blockly.Msg.en');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_LEDMATRIX = 'MAX7219 LED Matrix';

/// Ardublockly name
Blockly.Msg.ARD_MAX7219_INIT = 'MAX7219 matrix Init';
Blockly.Msg.ARD_MAX7219_INIT_TOOLTIP = 'Init Matrix';
Blockly.Msg.ARD_DISPLAY_MATRIX_INIT = "HT16K33 Matrix Init";
Blockly.Msg.ARD_ISPLAY_MATRIX_SHOW = "Dot matrix display";
Blockly.Msg.ARD_TOOPTIPMATRIX_HK16T33_INIT = 'Initialize HK16T33 8*8 Matrix Screen';
Blockly.Msg.ARD_MAX7219_NUMS = 'Numbers of MAX7219';
Blockly.Msg.ARD_MAX7219_HDISPALY = 'Row';
Blockly.Msg.ARD_MAX7219_VDISPALY = 'Col';
Blockly.Msg.ARD_MATRIX_TYPE = 'Matrix Type';
Blockly.Msg.ARD_DISPLAY_MATRIX_X = 'X Axis';
Blockly.Msg.ARD_DISPLAY_MATRIX_Y = 'Y Axis';
Blockly.Msg.ARD_DISPLAY_TOOLTIP = 'Show one point';
Blockly.Msg.ARD_STAT = 'Stat';
Blockly.Msg.ARD_0DEGREE = '0';
Blockly.Msg.ARD_90DEGREE = '90';
Blockly.Msg.ARD_180DEGREE = '180';
Blockly.Msg.ARD_270DEGREE = '270';
Blockly.Msg.ARD_MAX7219_NO = 'NO';
Blockly.Msg.ARD_DISPLAY_MATRIX_ROTATE = "Rotate screen";
Blockly.Msg.ARD_TOOPTIP_Matrix_HK16T33_ROTATION = 'Rotate Matrix Screen Display Direction';
Blockly.Msg.ARD_TEXT_TO_DISPLAY = "texts to display:";
Blockly.Msg.ARD_SPEED = "Speed";
Blockly.Msg.ARD_TOOPTIP_MATRIX_HK16T33_TEXT = 'Display one character in turn at a time';
Blockly.Msg.ARD_DISPLAY_MATRIX_PICARRAY = " Pictur Array";
Blockly.Msg.ARD_TOOPTIP_MATRIX_HK16T33_DISPLAYCHAR = 'Generate dot-matrix display content from arrays';
Blockly.Msg.ARD_DISPLAY_MATRIX_ARRAYVAR = "Array variable";
Blockly.Msg.ARD_TOOPTIP_MATRIX_HK16T33_LEDARRAY = 'Light he corresponding position on the dot matrix screen';
Blockly.Msg.ARD_BRIGHTNESS = 'Brightness';
Blockly.Msg.ARD_MAX7219_BRIGHTNESS_TOOLTIP = 'Brightness range 0~15';
Blockly.Msg.ARD_MAX7219_FILLSCREEN_ON = 'All ON';
Blockly.Msg.ARD_MAX7219_FILLSCREEN_OFF = 'All Off';
Blockly.Msg.ARD_MAX7219_SHUTDOWN_ON = 'Turn Off';
Blockly.Msg.ARD_MAX7219_SHUTDOWN_OFF = 'Turn On';
Blockly.Msg.ARD_MAX7219_IMG = 'Image';
Blockly.Msg.ARD_TOOPTIP_Matrix_MAX7219_STRING = 'Display each character in a string one by one at a certain speed';
Blockly.Msg.ARD_TOOPTIP_Matrix_MAX7219_PREDEFARR = 'Returns an array corresponding to the predefined pattern';