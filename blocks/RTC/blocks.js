/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.rtc');

goog.require('Blockly.Blocks');

Blockly.Blocks.rtc.HUE = 180;

/* User define block */
Blockly.Blocks['rtc_ds1302_setup'] = {
  init: function() {
    this.appendValueInput("DATA_PIN")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("設定DATA腳");
    this.appendValueInput("CLK_PIN")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("設定CLK腳");
    this.appendValueInput("RST_PIN")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("設定RST腳");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.rtc.HUE);
 this.setTooltip("設定DS1302");
 this.setHelpUrl("https://github.com/Makuna/Rtc");
  }
};