/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          https://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileOverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.SDCard');

goog.require('Blockly.Blocks');

goog.require('Blockly.Types');

Blockly.Blocks.SDCard.HUE = 180;

/* User define block */
Blockly.Blocks['user_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADR_USER_MSG);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.SDCard.HUE);
  }
};
