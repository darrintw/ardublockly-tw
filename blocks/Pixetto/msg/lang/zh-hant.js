'use strict';

goog.require('Blockly.Msg.zh.hant');

goog.require('Blockly.Msg');

/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_PIXETTO = "Pixetto";

/// Ardublockly name
Blockly.Msg.PIXETTO_WARN = "要先設定 %1 後才能正確使用!";
Blockly.Msg.PIXETTO_INITIAL = "初始化視覺感測器";
Blockly.Msg.PIXETTO_RX = "接收(黃)腳位";
Blockly.Msg.PIXETTO_TX = "傳送(白)腳位";
Blockly.Msg.PIXETTO_UVC = "開啟 UVC 模式";
Blockly.Msg.PIXETTO_UVC_CLOSE = "關閉";
Blockly.Msg.PIXETTO_UVC_OPEN = "開啟";
Blockly.Msg.PIXETTO_SET_DETECTED = "設定偵測模式";
Blockly.Msg.PIXETTO_DETECTED_ACTIVE = "主動模式";
Blockly.Msg.PIXETTO_DETECTED_ASK = "詢問模式";
Blockly.Msg.PIXETTO_FLUSH = "清除緩衝區";
Blockly.Msg.PIXETTO_DETECTED = "識別到物體";
Blockly.Msg.PIXETTO_GET_FUNC_ID = "目前功能";
Blockly.Msg.PIXETTO_GET_TYPE_ID = "物體類別";
Blockly.Msg.PIXETTO_GET_POS_X = "物體座標X";
Blockly.Msg.PIXETTO_GET_POS_Y = "物體座標Y";
Blockly.Msg.PIXETTO_GET_WIDTH = "物體寬度";
Blockly.Msg.PIXETTO_GET_HEIGHT = "物體高度";
Blockly.Msg.PIXETTO_NUM_OBJECT = "偵測到的物件個數";
Blockly.Msg.PIXETTO_FUNC = "功能 ";
Blockly.Msg.PIXETTO_NOW_FUNC = "目前功能 ";
Blockly.Msg.PIXETTO_FCD = "顏色偵測";
Blockly.Msg.PIXETTO_FCCD = "顏色組合偵測";
Blockly.Msg.PIXETTO_FSD = "形狀偵測";
Blockly.Msg.PIXETTO_FSPD = "球體偵測";
Blockly.Msg.PIXETTO_FTM = "模板匹配";
Blockly.Msg.PIXETTO_FK = "特徵點偵測";
Blockly.Msg.PIXETTO_FNN = "神經網路辨識";
Blockly.Msg.PIXETTO_FFD = "人臉偵測";
Blockly.Msg.PIXETTO_FTSD = "交通號誌辨識";
Blockly.Msg.PIXETTO_FHDD = "手寫數字辨識";
Blockly.Msg.PIXETTO_FHLD = "手寫英文字母辨識";
Blockly.Msg.PIXETTO_FCLD = "遠端運算";
Blockly.Msg.PIXETTO_FLD = "車道偵測";
Blockly.Msg.PIXETTO_FED = "數字運算";
Blockly.Msg.PIXETTO_FSC = "簡易分類器";
Blockly.Msg.PIXETTO_FEE = "車牌辨識";
Blockly.Msg.PIXETTO_FVC = "語音命令";
Blockly.Msg.PIXETTO_COLOR = "顏色";
Blockly.Msg.PIXETTO_COLOR_DETECTION = "顏色偵測 偵測到";
Blockly.Msg.PIXETTO_CRED = "紅";
Blockly.Msg.PIXETTO_CYELLOW = "黃";
Blockly.Msg.PIXETTO_CGREEN = "綠";
Blockly.Msg.PIXETTO_CBLUE = "藍";
Blockly.Msg.PIXETTO_CPURPLE = "紫";
Blockly.Msg.PIXETTO_CBLACK = "黑";
Blockly.Msg.PIXETTO_SHAPE = "形狀";
Blockly.Msg.PIXETTO_SHAPE_DETECTION = "形狀偵測 偵測到";
Blockly.Msg.PIXETTO_SHAPE_ROUND = "圓形";
Blockly.Msg.PIXETTO_SHAPE_RECTANGLE = "矩形";
Blockly.Msg.PIXETTO_SHAPE_TRIANGLE = "三角形";
Blockly.Msg.PIXETTO_SHAPE_PENTAGON = "五角形";
Blockly.Msg.PIXETTO_SPHERE_DETECTION = "球體偵測 偵測到";
Blockly.Msg.PIXETTO_TEMPLATE_DETECTION = "模板匹配 偵測到";
Blockly.Msg.PIXETTO_KEYPOINTS_DETECTION = "特徵點偵測 偵測到";
Blockly.Msg.PIXETTO_NEURAL_NETWORK_DETECTION = "神經網路辨識 辨識到";
Blockly.Msg.PIXETTO_SIGN = "號誌";
Blockly.Msg.PIXETTO_SIGN_DETECTION = "交通號誌辨識 辨識到";
Blockly.Msg.PIXETTO_SIGN_NE = "禁止進入";
Blockly.Msg.PIXETTO_SIGN_NLT = "禁止左轉";
Blockly.Msg.PIXETTO_SIGN_NRT = "禁止右轉";
Blockly.Msg.PIXETTO_SIGN_WW = "方向錯誤";
Blockly.Msg.PIXETTO_SIGN_NUT = "禁止迴轉";
Blockly.Msg.PIXETTO_SIGN_MAXS = "最高速限";
Blockly.Msg.PIXETTO_SIGN_OWT = "單行道";
Blockly.Msg.PIXETTO_SIGN_LT = "左轉";
Blockly.Msg.PIXETTO_SIGN_RT = "右轉";
Blockly.Msg.PIXETTO_SIGN_MINS = "最低速限";
Blockly.Msg.PIXETTO_SIGN_UT = "迴轉";
Blockly.Msg.PIXETTO_SIGN_TA = "隧道";
Blockly.Msg.PIXETTO_SIGN_BOC = "當心兒童";
Blockly.Msg.PIXETTO_SIGN_RA = "圓環";
Blockly.Msg.PIXETTO_SIGN_YTP = "行人穿越道";
Blockly.Msg.PIXETTO_SIGN_REDL = "紅燈";
Blockly.Msg.PIXETTO_SIGN_GREENL = "綠燈";
Blockly.Msg.PIXETTO_NUM_DETECTION = "手寫數字 辨識到";
Blockly.Msg.PIXETTO_LATTER_DETECTION = "手寫字母 辨識到";
Blockly.Msg.PIXETTO_CLOUD_DETECTION = "遠端運算 辨識到";
Blockly.Msg.PIXETTO_CLASSIFIER_DETECTION = "簡易分類器 辨識到";
Blockly.Msg.PIXETTO_EQUATION_EXPRESSION = "車牌辨識資料儲存到";
Blockly.Msg.PIXETTO_VOICE_DETECTION = "語音命令 辨識到";
Blockly.Msg.PIXETTO_VOICE_HELLO = "你好";
Blockly.Msg.PIXETTO_VOICE_THANKS = "謝謝";
Blockly.Msg.PIXETTO_VOICE_BYE = "再見";
Blockly.Msg.PIXETTO_VOICE_WHATSTHIS = "這是什麼";
Blockly.Msg.PIXETTO_VOICE_WHATTIME = "現在幾點";
Blockly.Msg.PIXETTO_VOICE_HOWOLD = "我幾歲";
Blockly.Msg.PIXETTO_VOICE_WHATDAY = "今天星期幾";
Blockly.Msg.PIXETTO_VOICE_TELLSTORY = "講故事";
Blockly.Msg.PIXETTO_VOICE_TELLJOKE = "說笑話";
Blockly.Msg.PIXETTO_VOICE_READPOME = "念唐詩";
Blockly.Msg.PIXETTO_VOICE_TURNONLIGHT = "開燈";
Blockly.Msg.PIXETTO_VOICE_TURNOFFLIGHT = "關燈";
Blockly.Msg.PIXETTO_VOICE_TURNLEFT = "左轉";
Blockly.Msg.PIXETTO_VOICE_TURNRIGHT = "右轉";
Blockly.Msg.PIXETTO_VOICE_GOAHEAD = "前進";
Blockly.Msg.PIXETTO_VOICE_MOVEBACK = "後退";
Blockly.Msg.PIXETTO_VOICE_STOP = "停止";
Blockly.Msg.PIXETTO_VOICE_OPEN = "開啟";
Blockly.Msg.PIXETTO_VOICE_CLOSE = "關閉";
Blockly.Msg.PIXETTO_VOICE_OPENEYES1 = "睜開眼睛";
Blockly.Msg.PIXETTO_VOICE_OPENEYES2 = "睜眼";
Blockly.Msg.PIXETTO_VOICE_CLOSEEYES1 = "閉上眼睛";
Blockly.Msg.PIXETTO_VOICE_CLOSEEYES2 = "閉眼";
Blockly.Msg.PIXETTO_VOICE_JUMP = "跳一下";
Blockly.Msg.PIXETTO_VOICE_STANDUP = "起立";
Blockly.Msg.PIXETTO_VOICE_SQUATDOWN = "蹲下";
Blockly.Msg.PIXETTO_APRILTAG_DETECTION = "apriltag";
Blockly.Msg.PIXETTO_APRILTAG_ID = "ID";
Blockly.Msg.PIXETTO_APRILTAG_POS_X = "X方向座標";
Blockly.Msg.PIXETTO_APRILTAG_POS_Y = "Y方向座標";
Blockly.Msg.PIXETTO_APRILTAG_POS_Z = "Z方向座標";
Blockly.Msg.PIXETTO_APRILTAG_ROT_X = "X旋轉角度";
Blockly.Msg.PIXETTO_APRILTAG_ROT_Y = "Y旋轉角度";
Blockly.Msg.PIXETTO_APRILTAG_ROT_Z = "Z旋轉角度";
Blockly.Msg.PIXETTO_APRILTAG_CENTER_X = "中心X";
Blockly.Msg.PIXETTO_APRILTAG_CENTER_Y = "中心Y";
Blockly.Msg.PIXETTO_LANES_DETECTION = "車道偵測 ";
Blockly.Msg.PIXETTO_LANES_XY = " 座標";
Blockly.Msg.PIXETTO_LANES_LX1 = "車道左側X1";
Blockly.Msg.PIXETTO_LANES_LY1 = "車道左側Y1";
Blockly.Msg.PIXETTO_LANES_LX2 = "車道左側X2";
Blockly.Msg.PIXETTO_LANES_LY2 = "車道左側Y2";
Blockly.Msg.PIXETTO_LANES_RX1 = "車道右側X1";
Blockly.Msg.PIXETTO_LANES_RY1 = "車道右側Y1";
Blockly.Msg.PIXETTO_LANES_RX2 = "車道右側X2";
Blockly.Msg.PIXETTO_LANES_RY2 = "車道右側Y2";
Blockly.Msg.PIXETTO_EQUATION_ANSWER = "數字運算答案";
