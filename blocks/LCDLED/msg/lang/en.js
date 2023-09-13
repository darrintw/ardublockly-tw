
'use strict';

goog.require('Blockly.Msg.en');

goog.require('Blockly.Msg');

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_LCDLED = "LCD/LED";

/// LCD
Blockly.Msg.BLOCKS_CATEGORY_I2CLCD = "I2C LCD Display";

/// Ardublockly name
Blockly.Msg.ARD_I2CLCD_SCAN = "Scan I2C LCD address";
Blockly.Msg.ARD_I2CLCD_SETUP_MSG1 = "Enable LCD at address ";
Blockly.Msg.ARD_I2CLCD_SETUP_MSG2 = "";
Blockly.Msg.ARD_I2CLCD_SETUP_TIP = "Enable I2C interface LCD. Make sure the I2C address is correct.";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG1 = "print ";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG2 = " on row ";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG3 = " of LCD";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_TIP = "print text on specified line (only alphanumeric, original text would be cleared first)";
Blockly.Msg.ARD_I2CLCD_MOVE_MSG1 = "move the LCD cursor to the ";
Blockly.Msg.ARD_I2CLCD_MOVE_MSG2 = " column of the";
Blockly.Msg.ARD_I2CLCD_MOVE_MSG3 = " row";
Blockly.Msg.ARD_I2CLCD_MOVE_TIP = "move cursor to specified position";
Blockly.Msg.ARD_I2CLCD_CLEAR_MSG = "clear LCD and reset the cursor back to the upper left corner";
Blockly.Msg.ARD_I2CLCD_CLEAR_TIP = "clear LCD and reset the cursor back to the upper left corner";
Blockly.Msg.ARD_I2CLCD_CLEAR = "Clear LCD  ";
Blockly.Msg.ARD_I2CLCD_CLEAR_ROW = " row content ";
Blockly.Msg.ARD_I2CLCD_CLEAR_ROW_MSG = "Clear LCD one row content";
Blockly.Msg.ARD_I2CLCD_PRINT_MSG1 = "print text ";
Blockly.Msg.ARD_I2CLCD_PRINT_MSG2 = "at the current position of the cursor";
Blockly.Msg.ARD_I2CLCD_PRINT_TIP = "print text on specified position (only alphanumeric, original text would be cleared first)";
Blockly.Msg.ARD_I2CLCD_CREATE_CHAR_MSG1 = "print symbol ";
Blockly.Msg.ARD_I2CLCD_CREATE_CHAR_MSG2 = Blockly.Msg.ARD_I2CLCD_PRINT_MSG2;
Blockly.Msg.ARD_I2CLCD_CREATE_CHAR_TIP = "print symbol on specified position (only alphanumeric, original text would be cleared first)";
Blockly.Msg.ARD_I2CLCD_IMG = "LCD symbol";
Blockly.Msg.ARD_I2CLCD_PREDEFARR_TOOLTIP = "print symbol";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_MSG = "turn on LCD backlight";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_TIP = "Turn on LCD backlight";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_MSG = "turn off LCD backlight";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_TIP = "Turn off LCD backlight";
Blockly.Msg.ARD_I2CLCD_SCROLL_MSG = "LCD scroll ";
Blockly.Msg.ARD_I2CLCD_SCROLL_LEFT = "left";
Blockly.Msg.ARD_I2CLCD_SCROLL_RIGHT = "right";
Blockly.Msg.ARD_I2CLCD_SCROLL_TIP = "LCD scroll left or right";
Blockly.Msg.ARD_I2CLCD_SHOW_TONE = "LCD show tone";

/// LED Matrix
/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_LEDMATRIX = 'MAX7219 LED Matrix';

/// Ardublockly name
Blockly.Msg.ARD_MAX7219 = 'MAX7219 LED matrix';
Blockly.Msg.ARD_MAX7219_INIT = 'Init';
Blockly.Msg.ARD_MAX7219_INIT_TOOLTIP = 'Init Matrix';
Blockly.Msg.ARD_MAX7219_NUMS = 'Numbers of MAX7219';
Blockly.Msg.ARD_MAX7219_DISPALY_ROW = 'Row';
Blockly.Msg.ARD_MAX7219_DISPALY_COL = 'Col';
Blockly.Msg.ARD_MAX7219_DISPLAY_X = 'X Axis';
Blockly.Msg.ARD_MAX7219_DISPLAY_Y = 'Y Axis';
Blockly.Msg.ARD_MAX7219_DISPLAY_TOOLTIP = 'According to X Axis and Y Axis to show';
Blockly.Msg.ARD_MAX7219_STAT = 'Stat';
Blockly.Msg.ARD_MAX7219_CLEAR = 'clear';
Blockly.Msg.ARD_MAX7219_NO = 'NO';
Blockly.Msg.ARD_MAX7219_PICARRAY = " Pictur Array";
Blockly.Msg.ARD_MAX7219_PICARRAY_TOOPTIP = " Pictur Array";
Blockly.Msg.ARD_MAX7219_ARRAYVAR = "Array variable";
Blockly.Msg.ARD_MAX7219_ARRAYVAR_TOOLTIP = 'Define array variable';
Blockly.Msg.ARD_MAX7219_BRIGHTNESS = 'Brightness';
Blockly.Msg.ARD_MAX7219_BRIGHTNESS_TOOLTIP = 'Brightness range 0~15';
Blockly.Msg.ARD_MAX7219_CHAR_DIGITAL = 'Char';
Blockly.Msg.ARD_MAX7219_CHAR_UPPER = 'Upper Case';
Blockly.Msg.ARD_MAX7219_CHAR_LOWER = 'Lower Case';
Blockly.Msg.ARD_MAX7219_CHAR_HALF_DIGITAL = 'Half char';
Blockly.Msg.ARD_MAX7219_CHAR_HALF_UPPER = 'Half upper Case';
Blockly.Msg.ARD_MAX7219_CHAR_HALF_LOWER = 'Half lower Case';
Blockly.Msg.ARD_MAX7219_IMG = 'Image';
Blockly.Msg.ARD_MAX7219_CHAR_HALF = 'Half char';
Blockly.Msg.ARD_MAX7219_PREDEFARR = 'Returns an array corresponding to the predefined pattern';
Blockly.Msg.ARD_MAX7219_PREDEFARR_LEFT = 'Returns an array corresponding to the predefined pattern left';
Blockly.Msg.ARD_MAX7219_PREDEFARR_RIGHT = 'Returns an array corresponding to the predefined pattern right';
Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP = 'Returns an array corresponding to the predefined pattern';
Blockly.Msg.ARD_MAX7219_FROM = ' from ';
Blockly.Msg.ARD_MAX7219_TO = ' count to ';
Blockly.Msg.ARD_MAX7219_SHOW_TONE = "LED Matrix show tone";

/// WS2812 LED
Blockly.Msg.BLOCKS_CATEGORY_WS2812LEDS = 'WS2812 LED Strip';

Blockly.Msg.NEOPIXEL_SETUP = 'Setup strip';
Blockly.Msg.NEOPIXEL_NUM = ' number of led ';
Blockly.Msg.NEOPIXEL_PIN = ' pin# ';
Blockly.Msg.NEOPIXEL_TOOLTIP = '';
Blockly.Msg.NEOPIXEL_STRIP = 'Strip';
Blockly.Msg.NEOPIXEL_NUMTH_1 = 'Number of ';
Blockly.Msg.NEOPIXEL_NUMTH_2 = '';
Blockly.Msg.NEOPIXEL_RGB = ', Color';
Blockly.Msg.NEOPIXEL_RED = 'R';
Blockly.Msg.NEOPIXEL_GREEN = 'G';
Blockly.Msg.NEOPIXEL_BLUE = 'B';
Blockly.Msg.NEOPIXEL_OFF = ' off';
Blockly.Msg.NEOPIXEL_ALLOFF = ' all off';
