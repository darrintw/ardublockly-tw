'use strict';

goog.require('Blockly.Msg.zh.hant');

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_SENSORS = '感測器';

/// Ultra Sonic
Blockly.Msg.BLOCKS_CATEGORY_ULTRASONIC_DISTANCE = "HC-SR04超音波感測器";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_SETUP = "超音波(HC-SR04)腳位設定";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TIP = "";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_TRIG = "Trig腳位";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_ECHO = "ECHO腳位";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_CM = "公分";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE_INCH = "英吋";
Blockly.Msg.ARD_ULTRASONIC_DISTANCE = "超聲波回傳距離";

/// TRTC5000
Blockly.Msg.BLOCKS_CATEGORY_TCRT5000 = "TCRT5000紅外線感測器";
Blockly.Msg.ARD_TRTC5000_FROM = "從";
Blockly.Msg.ARD_TRTC5000_READ = "讀取 紅外線光感測器 的數值 \u207B";
Blockly.Msg.ARD_TRTC5000_TIP = 'TRTC5000專用，數值為1023(白)~0(黑)';

// LOGIC NAN
Blockly.Msg.ARD_ISNAN_TITLE = "是否為nan";
Blockly.Msg.ARD_ISNAN_TOOLTIP = "判斷數值是否為nan";

/// DHT11
Blockly.Msg.BLOCKS_CATEGORY_DHT11 = "DHT11溫溼度感測器";
Blockly.Msg.ARD_DHT11_READTEMP_FROM = "從 ";
Blockly.Msg.ARD_DHT11_READTEMP_MSG = " 的 DHT11 模組讀取攝氏溫度值";
Blockly.Msg.ARD_DHT11_READTEMP_TIP = "從 DHT11 溫濕度模組讀取整數攝氏溫度值, NAN 表示讀取錯誤";
Blockly.Msg.ARD_DHT11_READHUMI_FROM  = "從 ";
Blockly.Msg.ARD_DHT11_READHUMI_MSG = " 的 DHT11 模組讀取相對濕度值";
Blockly.Msg.ARD_DHT11_READHUMI_TIP = "從 DHT11 溫濕度模組讀取相對濕度值, NAN 表示讀取錯誤";

/// DS18B20
Blockly.Msg.BLOCKS_CATEGORY_DS18B20 = "DS18B20溫度感測器";
Blockly.Msg.ARD_DS18B20_READTEMP_FROM  = "從 ";
Blockly.Msg.ARD_DS18B20_READTEMP_MSG = " 的 DS18B20 感測器讀取攝氏溫度值";
Blockly.Msg.ARD_DS18B20_READTEMP_TIP = "從 DS18B20 感測器讀取攝氏溫度值, -127 表示讀取錯誤";

/// Photo Cells
Blockly.Msg.BLOCKS_CATEGORY_PHOTOCELLS = "Photocells光敏電阻";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_FROM  = "從 ";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_MSG = " 的 光敏電阻 感測器讀取感應值";
Blockly.Msg.ARD_PHOTOCELLS_READTEMP_TIP = "從 光敏電阻 感測器讀取感應值, -1 表示讀取錯誤";

/// LM35
Blockly.Msg.BLOCKS_CATEGORY_LM35 = "LM35溫度感測器"
Blockly.Msg.ARD_LM35_READTEMP_FROM  = "從 ";
Blockly.Msg.ARD_LM35_READTEMP_MSG = " 的 LM35 感測器讀取攝氏溫度值";
Blockly.Msg.ARD_LM35_READTEMP_TIP = "從 LM35 感測器讀取攝氏溫度值";

/// IR Receive
Blockly.Msg.BLOCKS_CATEGORY_IRRECV = "IR Reciver紅外線接收器";
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
Blockly.Msg.BLOCKS_CATEGORY_HX711 = "HX711重量感測模組"
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

//QMC5883L
Blockly.Msg.BLOCKS_CATEGORY_QMC5883L = "QMC5883L三軸向性感測器";
Blockly.Msg.ARD_I2C_QMC5883L = "QMC5883L 感測器";
Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MSG1 = "初始化位址為";
Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MSG2 = "的 QMC5883L 感測器";
Blockly.Msg.ARD_I2C_QMC5883L_SETUP_TIP = "初始化 I2C 通訊控制的 QMC5883L 感測器, 請確認 I2C 位址正確才能運作";
Blockly.Msg.ARD_I2C_QMC5883L_START_READ = "開始讀取";
Blockly.Msg.ARD_I2C_QMC5883L__READ_TIP = "由QMC5883L讀取目前的相關數值";
Blockly.Msg.ARD_I2C_QMC5883L_FROM = "從";
Blockly.Msg.ARD_I2C_QMC5883L_GET = "取得";
Blockly.Msg.ARD_I2C_QMC5883L_SET = "設定";
Blockly.Msg.ARD_I2C_QMC5883L_X = "X值";
Blockly.Msg.ARD_I2C_QMC5883L_Y = "Y值";
Blockly.Msg.ARD_I2C_QMC5883L_Z = "Z值";
Blockly.Msg.ARD_I2C_QMC5883L_XYZ_TIP = "取得X、Y、Z的值.";
Blockly.Msg.ARD_I2C_QMC5883L_AZIUMTH = "全圓方位角(360度)";
Blockly.Msg.ARD_I2C_QMC5883L_AZIUMTH_TIP = "取得計算後的全圓方位角(0~360度)";
Blockly.Msg.ARD_I2C_QMC5883L_BEARING = "方向角(傾向)";
Blockly.Msg.ARD_I2C_QMC5883L_BEARING_TIP = "取得16點的方向角.\n" +
    "將360度分割成16等分，每等分資料會以順時針方式用0~15顯示.\n" +
    " 例如0 = 北, 4 = 東, 8 = 南, 12 = 西，依此類推.";
Blockly.Msg.ARD_I2C_QMC5883L_ARRAY = "置入陣列"
Blockly.Msg.ARD_I2C_QMC5883L_DIRECTION = "方向值陣列";
Blockly.Msg.ARD_I2C_QMC5883L_DIRECTION_TIP = "取得16點的方向角文字.\n" +
    "此功能將產生大小為3的字元陣列儲存方位.";
Blockly.Msg.ARD_I2C_QMC5883L_SMOOTHING = "平滑參數";
Blockly.Msg.ARD_I2C_QMC5883L_STEPS = "平滑度";
Blockly.Msg.ARD_I2C_QMC5883L_ADVANCED = "是否移除最高最低值";
Blockly.Msg.ARD_I2C_QMC5883L_SMOOTHING_TIP = "平滑度越大, 耗時越長\n" +
    "是否移除最高最低值, 已取得更精確的值.";
Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MODE = "變更 QMC5883L 感測器模式";
Blockly.Msg.ARD_I2C_QMC5883L_SETUP_MODE_TIP = "可以變更 QMC5583L 的各種細向參數.";
Blockly.Msg.ARD_I2C_QMC5883L_CONTROL = "模式選擇";
Blockly.Msg.ARD_I2C_QMC5883L_DATA_RATE = "輸出頻率";
Blockly.Msg.ARD_I2C_QMC5883L_FULL_SCALE = "靈敏度";
Blockly.Msg.ARD_I2C_QMC5883L_OVER_SAMPLE_RATIO = "過取樣比例";

//MAX30100
Blockly.Msg.ARD_I2C_MAX30100 = "MAX30100 感測器";
Blockly.Msg.ARD_I2C_MAX30100_SETUP_MSG1 = "啟用位子為";
Blockly.Msg.ARD_I2C_MAX30100_SETUP_MSG2 = "的MAX30100感測器";
Blockly.Msg.ARD_I2C_MAX30100_SETUP_TIP = "適用於採用 I2C MAX30100感測器, 請確認 I2C 位址正確才能運作";

//MLX90615
Blockly.Msg.ARD_I2C_MAX30100 = "MLX90615 感測器";
Blockly.Msg.ARD_I2C_MLX90615_SETUP_MSG1 = "啟用位子為";
Blockly.Msg.ARD_I2C_MLX90615_SETUP_MSG2 = "的MLX90615感測器";
Blockly.Msg.ARD_I2C_MLX90615_SETUP_TIP = "適用於採用 I2C 通訊控制的 MLX90615 感測器, 請確認 I2C 位址正確才能運作";
