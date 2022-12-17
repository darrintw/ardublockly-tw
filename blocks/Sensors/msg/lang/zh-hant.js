'use strict';

goog.require('Blockly.Msg.zh.hant');

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_SENSOR = '感測器';

/// Ultra Sonic
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_SETUP = "超音波(HC-SR04)腳位設定";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TIP = "";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TRIG = "Trig腳位";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_ECHO = "ECHO腳位";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_CM = "公分";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_INCH = "英吋";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE = "超聲波回傳距離";

/// TRTC5000
Blockly.Msg.ARD_TRTC5000_FROM = "從";
Blockly.Msg.ARD_TRTC5000_READ = "讀取 紅外線光感測器 的數值 \u207B";
Blockly.Msg.ARD_TRTC5000_TIP = 'TRTC5000專用，數值為1023(白)~0(黑)';

// LOGIC NAN
Blockly.Msg.ARD_ISNAN_TITLE = "是否為nan";
Blockly.Msg.ARD_ISNAN_TOOLTIP = "判斷數值是否為nan";

/// DHT11
Blockly.Msg.ARD_DHT11_READTEMP_FROM = "從 ";
Blockly.Msg.ARD_DHT11_READTEMP_MSG = " 的 DHT11 模組讀取攝氏溫度值";
Blockly.Msg.ARD_DHT11_READTEMP_TIP = "從 DHT11 溫濕度模組讀取整數攝氏溫度值, NAN 表示讀取錯誤";
Blockly.Msg.ARD_DHT11_READHUMI_FROM  = "從 ";
Blockly.Msg.ARD_DHT11_READHUMI_MSG = " 的 DHT11 模組讀取相對濕度值";
Blockly.Msg.ARD_DHT11_READHUMI_TIP = "從 DHT11 溫濕度模組讀取相對濕度值, NAN 表示讀取錯誤";

/// DS18B20
Blockly.Msg.ARD_DS18B20_READTEMP_FROM  = "從 ";
Blockly.Msg.ARD_DS18B20_READTEMP_MSG = " 的 DS18B20 感測器讀取攝氏溫度值";
Blockly.Msg.ARD_DS18B20_READTEMP_TIP = "從 DS18B20 感測器讀取攝氏溫度值, -127 表示讀取錯誤";

/// Photo Cells
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_FROM  = "從 ";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_MSG = " 的 光敏電阻 感測器讀取感應值";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_TIP = "從 光敏電阻 感測器讀取感應值, -1 表示讀取錯誤";

/// LM35
Blockly.Msg.ARD_LM35_READTEMP_FROM  = "從 ";
Blockly.Msg.ARD_LM35_READTEMP_MSG = " 的 LM35 感測器讀取攝氏溫度值";
Blockly.Msg.ARD_LM35_READTEMP_TIP = "從 LM35 感測器讀取得攝氏溫度值";

/// IR Receive
Blockly.Msg.ARD_IRRECV_SETUP = "設定 紅外線接收器 腳位為 ";
Blockly.Msg.ARD_IRRECV_SETUP_TIP = "";
Blockly.Msg.ARD_IRRECV_IR = "紅外線接收器 ";
Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG = "讀到有效資料？";
Blockly.Msg.ARD_IRRECV_AVAILABLE_MSG_TIP = "判斷紅外線有無讀到資料";
Blockly.Msg.ARD_IRRECV_READ_FROM = "從 ";
Blockly.Msg.ARD_IRRECV_READ_MSG = "的 紅外線接收器 讀取資料";
Blockly.Msg.ARD_IRRECV_READ_TIP = "從 紅外線接收器 讀取資料";
Blockly.Msg.ARD_IRRECV_RESUME_FROM = "復位";
Blockly.Msg.ARD_IRRECV_RESUME_MSG = "的紅外線接收器";
Blockly.Msg.ARD_IRRECV_RESUME_TIP = "復位的紅外線接收器";

/// HX711
Blockly.Msg.ARD_HX711_SETUP = "重量感測模組(HX711)設定";
Blockly.Msg.ARD_HX711_TIP = "";
Blockly.Msg.ARD_HX711_DATA = "DATA腳位";
Blockly.Msg.ARD_HX711_CLK = "CLK腳位";
Blockly.Msg.ARD_HX711_SET_SCALE = "設定HX711比例參數";
Blockly.Msg.ARD_HX711_TARE = "HX711歸零";
Blockly.Msg.ARD_HX711_GET_UNITS = "取得HX711目前重量 ";
Blockly.Msg.ARD_HX711_GET_UNITS_AVERAGE = " 次平均";
Blockly.Msg.ARD_HX711_POWER_DOWN = "HX711休眠";
Blockly.Msg.ARD_HX711_POWER_UP = "HX711喚醒";
