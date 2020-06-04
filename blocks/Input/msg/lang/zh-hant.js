'use strict';

goog.require('Blockly.Msg.zh.hant');
/// Toolbox category name
Blockly.Msg.BLOCKS_CATEGORY_INPUT = '輸入';

/// Ardublockly name
Blockly.Msg.ARD_DIGITALREAD_MSG = "數位輸入 腳位#%1";
Blockly.Msg.ARD_ANALOGREAD_MSG = "類比輸入 腳位#%1";
Blockly.Msg.ARD_INPUT_PULLUP_MSG = "啟用 %1 號腳位的上拉電阻";
Blockly.Msg.ARD_INPUT_PULLUP_TIP = "啟用指定輸入腳位的上拉電阻";
Blockly.Msg.ARD_ANALOGREAD = "類比輸入 腳位#";
Blockly.Msg.ARD_ANALOGREAD_TIP = "傳回選擇的類比腳位 0 到 1024 之間的值";
Blockly.Msg.ARD_HIGHLOW_TIP = "設定腳位的邏輯狀態是高(High)或低(Low)";
Blockly.Msg.ARD_DIGITALREAD = "數位輸入 腳位#";
Blockly.Msg.ARD_DIGITALREAD_TIP = "在選擇的腳位讀取數位值是高(High)或低(Low)";
Blockly.Msg.ARD_PULSE_TIP = "量測選擇腳位產生高或低脈波的持續時間";
Blockly.Msg.ARD_PULSE_READ = "量測 %1 脈波在腳位# %2";
Blockly.Msg.ARD_PULSE_READ_TIMEOUT = "量測 %1 脈波在腳位# %2 (過期時間: %3 微秒)";
Blockly.Msg.ARD_PULSETIMEOUT_MSG = "測量 %2 為 %1 的時間 (最多等待 %3 微秒)";
Blockly.Msg.ARD_PULSETIMEOUT_TIP = "量測選擇腳位產生高或低脈波的持續時間, 如果時間尚未過期(單位是微秒)";