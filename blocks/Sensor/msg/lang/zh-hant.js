'use strict';

goog.require('Blockly.Msg.zh.hant');

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_SENSOR = '感測器';

/// Ardublockly name
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_SETUP = "超音波(HC-SR04)腳位設定";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TIP = "";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TRIG = "Trig腳位";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_ECHO = "ECHO腳位";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_CM = "公分";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_INCH = "英吋";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE = "超聲波回傳距離";
Blockly.Msg.ARD_TRTC5000_FROM = "從";
Blockly.Msg.ARD_TRTC5000_READ = "讀取紅外線光感測器的數值 \u207B";
Blockly.Msg.ARD_TRTC5000_TIP = 'TRTC5000專用，數值為1023(白)~0(黑)';
Blockly.Msg.ARD_DHT11_READTEMP_FROM = "從 ";
Blockly.Msg.ARD_DHT11_READTEMP_MSG = " 的 DHT11 模組讀取攝氏溫度值";
Blockly.Msg.ARD_DHT11_READTEMP_TIP = "從 DHT11 溫濕度模組讀取整數攝氏溫度值, NAN 表示讀取錯誤";
Blockly.Msg.ARD_DHT11_READHUMI_FROM  = "從 ";
Blockly.Msg.ARD_DHT11_READHUMI_MSG = " 的 DHT11 模組讀取相對濕度值";
Blockly.Msg.ARD_DHT11_READHUMI_TIP = "從 DHT11 溫濕度模組讀取相對濕度值, NAN 表示讀取錯誤";
Blockly.Msg.ARD_DS18B20_READTEMP_FROM  = "從 ";
Blockly.Msg.ARD_DS18B20_READTEMP_MSG = " 的 DS18B20 感測器讀取攝氏溫度值";
Blockly.Msg.ARD_DS18B20_READTEMP_TIP = "從 DS18B20 感測器讀取攝氏溫度值, -127 表示讀取錯誤";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_FROM  = "從 ";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_MSG = " 的 光敏電阻 感測器讀取感應值";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_TIP = "從 光敏電阻 感測器讀取感應值, -1 表示讀取錯誤";
Blockly.Msg.ARD_LM35_READTEMP_FROM  = "從 ";
Blockly.Msg.ARD_LM35_READTEMP_MSG = " 的 LM35 感測器讀取攝氏溫度值";
Blockly.Msg.ARD_LM35_READTEMP_TIP = "從 LM35 感測器讀取得攝氏溫度值";