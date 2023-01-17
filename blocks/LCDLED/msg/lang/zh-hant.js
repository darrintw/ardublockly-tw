'use strict';

goog.require('Blockly.Msg.zh.hant');

goog.require('Blockly.Msg');

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_LCDLED = 'LCD/LED';

/// LCD
Blockly.Msg.BLOCKS_CATEGORY_I2CLCD = 'I2C LCD 顯示器';

/// Ardublockly name
Blockly.Msg.ARD_I2CLCD_SCAN = "掃描 I2C LCD 位址";
Blockly.Msg.ARD_I2CLCD_SETUP_MSG1 = "啟用位址為";
Blockly.Msg.ARD_I2CLCD_SETUP_MSG2 = "的 LCD 液晶顯示器";
Blockly.Msg.ARD_I2CLCD_SETUP_TIP = "適用於採用 I2C 通訊控制的 LCD 液晶顯示器, 請確認 I2C 位址正確才能運作";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG1 = "清除 LCD 的第 ";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG2 = " 列並在該列顯示 ";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_MSG3 = "";
Blockly.Msg.ARD_I2CLCD_PRINTLINE_TIP = "先清除 LCD 液晶顯示器的指定列後在該列顯示整列文字 (僅限英數字)";
Blockly.Msg.ARD_I2CLCD_MOVE_MSG1 = "將 LCD 的游標移到第 ";
Blockly.Msg.ARD_I2CLCD_MOVE_MSG2 = " 行第 ";
Blockly.Msg.ARD_I2CLCD_MOVE_MSG3 = " 列";
Blockly.Msg.ARD_I2CLCD_MOVE_TIP = "將 LCD 液晶顯示器的游標移到指定位置";
Blockly.Msg.ARD_I2CLCD_CLEAR_MSG = "清除 LCD 畫面並將游標移回左上角";
Blockly.Msg.ARD_I2CLCD_CLEAR_TIP = "清除 LCD 液晶顯示器畫面並將游標移回左上角";
Blockly.Msg.ARD_I2CLCD_CLEAR = "清除 LCD 第 ";
Blockly.Msg.ARD_I2CLCD_CLEAR_ROW = " 列內容";
Blockly.Msg.ARD_I2CLCD_CLEAR_ROW_TIP = "清除 LCD 液晶顯示器某一列內容";
Blockly.Msg.ARD_I2CLCD_PRINT_MSG1 = "在 LCD 游標位置顯示文字 ";
Blockly.Msg.ARD_I2CLCD_PRINT_MSG2 = "";
Blockly.Msg.ARD_I2CLCD_PRINT_TIP = "在 LCD 液晶顯示器目前游標的位置顯示文字 (僅限英數字)";
Blockly.Msg.ARD_I2CLCD_CREATE_CHAR_MSG1 = "在 LCD 游標位置顯示圖像 ";
Blockly.Msg.ARD_I2CLCD_CREATE_CHAR_MSG2 = "";
Blockly.Msg.ARD_I2CLCD_CREATE_CHAR_TIP = "在 LCD 液晶顯示器目前游標的位置顯示內建圖像";
Blockly.Msg.ARD_I2CLCD_IMG = "LCD預設圖像";
Blockly.Msg.ARD_I2CLCD_PREDEFARR_TOOLTIP = "寫入LCD內建圖像";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_MSG = "開啟 LCD 背光";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTON_TIP = "將 LCD 液晶顯示器的背光照明打開";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_MSG = "關閉 LCD 背光";
Blockly.Msg.ARD_I2CLCD_BACKLIGHTOFF_TIP = "將 LCD 液晶顯示器的背光照明關閉";
Blockly.Msg.ARD_I2CLCD_SCROLL_MSG = "LCD 文字滾動";
Blockly.Msg.ARD_I2CLCD_SCROLL_LEFT = "向左";
Blockly.Msg.ARD_I2CLCD_SCROLL_RIGHT = "向右";
Blockly.Msg.ARD_I2CLCD_SCROLL_TIP = "LCD文字向左或向右滾動";
Blockly.Msg.ARD_I2CLCD_SHOW_TONE = "LCD 顯示音符";

/// LED Matrix
Blockly.Msg.BLOCKS_CATEGORY_LEDMATRIX = 'MAX7219 LED 點矩陣';

/// Ardublockly name
Blockly.Msg.ARD_MAX7219 = 'MAX7219點矩陣LED';
Blockly.Msg.ARD_MAX7219_INIT = '初始化';
Blockly.Msg.ARD_MAX7219_INIT_TOOLTIP = '初始化';
Blockly.Msg.ARD_MAX7219_NUMS = '串接個數';
Blockly.Msg.ARD_MAX7219_DISPALY_ROW = '橫列';
Blockly.Msg.ARD_MAX7219_DISPALY_COL = '直行';
Blockly.Msg.ARD_MAX7219_DISPLAY_X = '列';
Blockly.Msg.ARD_MAX7219_DISPLAY_Y = '行';
Blockly.Msg.ARD_MAX7219_DISPLAY_TOOLTIP = '根據橫列直行座標顯示';
Blockly.Msg.ARD_MAX7219_STAT = '設為';
Blockly.Msg.ARD_MAX7219_CLEAR = '全暗';
Blockly.Msg.ARD_MAX7219_NO = '序號';
Blockly.Msg.ARD_MAX7219_ARRAYVAR = "陣列變數";
Blockly.Msg.ARD_MAX7219_ARRAYVAR_TOOLTIP = '定義陣列變數';
Blockly.Msg.ARD_MAX7219_PICARRAY = " 圖案陣列";
Blockly.Msg.ARD_MAX7219_PICARRAY_TOOPTIP = " 圖案陣列";
Blockly.Msg.ARD_MAX7219_BRIGHTNESS = '亮度';
Blockly.Msg.ARD_MAX7219_BRIGHTNESS_TOOLTIP = '亮度範圍0~15';
Blockly.Msg.ARD_MAX7219_CHAR_DIGITAL = '點矩陣預設數字字元';
Blockly.Msg.ARD_MAX7219_CHAR_UPPER = '點矩陣預設大寫英文字元';
Blockly.Msg.ARD_MAX7219_CHAR_LOWER = '點矩陣預設小寫英文字元';
Blockly.Msg.ARD_MAX7219_IMG = '點矩陣預設圖案';
Blockly.Msg.ARD_MAX7219_CHAR_HALF_DIGITAL = '點矩陣預設半寬數字字元';
Blockly.Msg.ARD_MAX7219_CHAR_HALF_UPPER = '點矩陣預設半寬大寫英文字元';
Blockly.Msg.ARD_MAX7219_CHAR_HALF_LOWER = '點矩陣預設半寬小寫英文字元';
Blockly.Msg.ARD_MAX7219_PREDEFARR = '定義陣列';
Blockly.Msg.ARD_MAX7219_PREDEFARR_LEFT = '定義陣列左';
Blockly.Msg.ARD_MAX7219_PREDEFARR_RIGHT = '定義陣列右';
Blockly.Msg.ARD_MAX7219_PREDEFARR_TOOLTIP = '依定應的陣列顯示';
Blockly.Msg.ARD_MAX7219_FROM = '從';
Blockly.Msg.ARD_MAX7219_TO = '數到';
Blockly.Msg.ARD_MAX7219_SHOW_TONE = "點矩陣顯示音符";

/// WS2812
Blockly.Msg.BLOCKS_CATEGORY_WS2812LEDS = 'WS2812 LED 燈條';

Blockly.Msg.NEOPIXEL_SETUP = '設定燈條';
Blockly.Msg.NEOPIXEL_NUM = '燈數';
Blockly.Msg.NEOPIXEL_PIN = '腳位';
Blockly.Msg.NEOPIXEL_TOOLTIP = '';
Blockly.Msg.NEOPIXEL_STRIP = '燈條';
Blockly.Msg.NEOPIXEL_NUMTH_1 = '第';
Blockly.Msg.NEOPIXEL_NUMTH_2 = '顆燈';
Blockly.Msg.NEOPIXEL_RGB = '，顏色';
Blockly.Msg.NEOPIXEL_RED = 'R';
Blockly.Msg.NEOPIXEL_GREEN = 'G';
Blockly.Msg.NEOPIXEL_BLUE = 'B';
Blockly.Msg.NEOPIXEL_OFF = ' 熄滅';
Blockly.Msg.NEOPIXEL_ALLOFF = '全部熄滅';
