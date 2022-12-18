'use strict';

goog.require('Blockly.Msg.zh.hant');

goog.require('Blockly.Msg');

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_I2CSENSORS = 'I2C感測器';

/// Ardublockly name
Blockly.Msg.ARD_I2C_SCAN = "掃描 I2C 感測器位址";
Blockly.Msg.ARD_I2C_HELP = "掃描 I2C 的相關設備";

//QMC5883L
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
Blockly.Msg.ARD_I2C_QMC5883L_DIRECTION_TIP = "To get a 16 point text representation of the direction the sensor.\n" +
    "This will produce a char array[3] with letters representing each direction.\n" +
    "Because we can't return an array we need to pass the values by reference.";
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
