'use strict';

goog.require('Blockly.Msg.zh.hant');

goog.require('Blockly.Msg');

Blockly.Msg.BLOCKS_CATEGORY_COMMS = '序列埠';

//Serial
Blockly.Msg.BLOCKS_CATEGORY_SERIAL = "序列埠";
Blockly.Msg.BLOCKS_CATEGORY_SERIAL = "序列埠";
Blockly.Msg.ARD_SERIAL_BPS = "位元/秒";
Blockly.Msg.ARD_SERIAL_PRINT_MSG = "從序列埠 %1 送出 %2 訊息後 %3 換行";
Blockly.Msg.ARD_SERIAL_PRINT = "送出";
Blockly.Msg.ARD_SERIAL_WRITE = "寫入";
Blockly.Msg.ARD_SERIAL_WRITE_TIP = "以文字形式送出資料到終端機/序列埠";
Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = "換行";
Blockly.Msg.ARD_SERIAL_PRINT_TIP = "以文字形式送出資料到終端機/序列埠";
Blockly.Msg.ARD_SERIAL_PRINT_WARN = "要先設定 %1 後才能正確使用!";
Blockly.Msg.ARD_MATH_BIN = '二進位';
Blockly.Msg.ARD_MATH_DEC = '十進位';
Blockly.Msg.ARD_MATH_OCT = '八進制';
Blockly.Msg.ARD_MATH_HEX = '十六進位';
Blockly.Msg.ARD_SERIAL_PRINT_HEX_TOOLTIP = "以十六進位的格式列印指定的數位。";
Blockly.Msg.ARD_SERIAL_SETUP = "內建序列埠";
Blockly.Msg.ARD_SERIAL_SETUP_TIP = "選擇正確的速度";
Blockly.Msg.ARD_SERIAL_SPEED = "序列通訊速度";
Blockly.Msg.ARD_SERIAL_AVAILABLE_MSG = "序列埠 %1 有效資料?";
Blockly.Msg.ARD_SERIAL_AVAILABLE_TIP = "取得序列埠收到的字元數";
Blockly.Msg.ARD_SERIAL_READ_CHAR_MSG = "從序列埠 %1 讀取字元";
Blockly.Msg.ARD_SERIAL_READ_CHAR_TIP = "從序列埠讀取 1 個字元";
Blockly.Msg.ARD_SERIAL_READ_STRING_MSG = "從序列埠 %1 讀取字串";
Blockly.Msg.ARD_SERIAL_READ_STRING_TIP = "從序列埠讀取 1 個字串";

//Bluetooth
Blockly.Msg.BLOCKS_CATEGORY_BLUETOOTH = "藍牙";
Blockly.Msg.ARD_SERIAL_BLUETOOTH = "藍牙";
Blockly.Msg.ARD_SERIAL_TX_PIN = "傳送腳位";
Blockly.Msg.ARD_SERIAL_RX_PIN = "接收腳位";
Blockly.Msg.ARD_SERIAL_BAUDRATE = "序列通訊速度";
Blockly.Msg.ARD_SERIAL_BLE_AVAILABLE_MSG = "藍牙有效資料?";
Blockly.Msg.ARD_SERIAL_BLE_READ_STRING_MSG = "從藍牙讀取字串";
Blockly.Msg.ARD_SERIAL_BLE_READ_MSG = "從藍牙讀取字元";
Blockly.Msg.ARD_SERIAL_BLE_WRITE_MSG = "藍牙送出";
Blockly.Msg.ARD_SERIAL_BLE_WRITE = "藍牙寫入";
Blockly.Msg.ARD_SERIAL_BLE_AT_CMD_MSG = "送出AT指令 ";
Blockly.Msg.ARD_SERIAL_BLE_AT_CMD_AS = " 為 ";

//SoftwareSerial
Blockly.Msg.BLOCKS_CATEGORY_SOFTWARESERIAL = "軟體序列埠";
Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_MSG = "設定軟體序列埠";
Blockly.Msg.ARD_SOFTWARESERIAL_SETUP_TIP = "選取軟體序列埠的腳位與傳輸速度";
Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_MSG = "從軟體序列埠 %1 送出 %2 %3 換行";
Blockly.Msg.ARD_SOFTWARESERIAL_PRINT_TIP = "以文字形式送出資料到終端機/序列埠";
Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_MSG = "軟體序列埠 %1 有效資料?";
Blockly.Msg.ARD_SOFTWARESERIAL_AVAILABLE_TIP = "取得軟體序列埠收到的字元數";
Blockly.Msg.ARD_SOFTWARESERIAL_READ_STRING_MSG = "從軟體序列埠 %1 讀取字串";
Blockly.Msg.ARD_SOFTWARESERIAL_READ_STRING_TIP = "從軟體序列埠讀取 1 個字串";
Blockly.Msg.ARD_SOFTWARESERIAL_READ_MSG = "從軟體序列埠 %1 讀取字元";
Blockly.Msg.ARD_SOFTWARESERIAL_READ_TIP = "從軟體序列埠讀取 1 個字元";
Blockly.Msg.BLOCKS_CATEGORY_PS2 = "PS2搖桿";

// PS2
Blockly.Msg.ARD_PS2 = "PS2搖桿";
Blockly.Msg.ARD_PS2_SETUP = "初始化PS2搖桿";
Blockly.Msg.ARD_PS2_ERROR_CODE = "錯誤代碼變數";
Blockly.Msg.ARD_PS2_PIN1 = "Clock腳位";
Blockly.Msg.ARD_PS2_PIN2 = "Attention腳位";
Blockly.Msg.ARD_PS2_PIN3 = "Command腳位";
Blockly.Msg.ARD_PS2_PIN4 = "Data腳位";
Blockly.Msg.ARD_PS2_START_READ = "開始讀取";
Blockly.Msg.ARD_PS2_READ = "讀取";
Blockly.Msg.ARD_PS2_BUT = "按鈕";
Blockly.Msg.ARD_PS2_STATUS = "狀態";
Blockly.Msg.ARD_PS2_TRIANGLE = "三角形";
Blockly.Msg.ARD_PS2_CIRCLE = "圓形";
Blockly.Msg.ARD_PS2_CROSS = "叉叉";
Blockly.Msg.ARD_PS2_SQUARE = "正方形";
Blockly.Msg.ARD_PS2_GREEN = "綠色";
Blockly.Msg.ARD_PS2_RED = "紅色";
Blockly.Msg.ARD_PS2_BLUE = "藍色";
Blockly.Msg.ARD_PS2_PINK = "粉紅色";
Blockly.Msg.ARD_PS2_LEFT = "左";
Blockly.Msg.ARD_PS2_RIGHT= "右";
Blockly.Msg.ARD_PS2_UP = "上";
Blockly.Msg.ARD_PS2_DOWN = "下";
Blockly.Msg.ARD_PS2_BUTTON = "按著";
Blockly.Msg.ARD_PS2_BUTTON_PRESSED = "按一下";
Blockly.Msg.ARD_PS2_BUTTON_RELEASED = "鬆開";
Blockly.Msg.ARD_PS2_NEW_BUTTON_STATUS = "狀態改變";
Blockly.Msg.ARD_PS2_PSS_LX = "左邊搖桿X值";
Blockly.Msg.ARD_PS2_PSS_LY = "左邊搖桿Y值";
Blockly.Msg.ARD_PS2_PSS_RX = "右邊搖桿X值";
Blockly.Msg.ARD_PS2_PSS_RY = "右邊搖桿Y值";

// I2C
Blockly.Msg.ARD_I2C_INIT = "初始化I2C";
Blockly.Msg.ARD_I2C_ADDR = "設備地址";
Blockly.Msg.ARD_I2C_REC_FUNC =" 接收函式為(選填)";
Blockly.Msg.ARD_I2C_REQ_FUNC =" 請求函式為(選填)";
Blockly.Msg.ARD_I2C_AVAILABLE_MSG = "I2C有效資料?";
Blockly.Msg.ARD_I2C_READ_MSG = "I2C讀取";
Blockly.Msg.ARD_I2C_REQUEST_MSG = "I2C從";
Blockly.Msg.ARD_I2C_REQUEST = "請求";
Blockly.Msg.ARD_I2C_BYTE = "位元";
Blockly.Msg.ARD_I2C_WRITE_MSG = "I2C送出";
Blockly.Msg.ARD_I2C_WRITE = "I2C寫入";
Blockly.Msg.ARD_I2C_START_TRANS = "I2C開始傳輸至";
Blockly.Msg.ARD_I2C_END_TRANS = "I2C結束傳輸";
