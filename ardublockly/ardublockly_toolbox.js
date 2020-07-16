/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileOverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
    '<xml id="toolbox" style="display: none">' +
    '  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
    '  <sep></sep>' +
    '  <category id="catLogic" name="Logic">' +
    '    <block type="controls_if"></block>' +
    '    <block type="logic_compare"></block>' +
    '    <block type="logic_operation"></block>' +
    '    <block type="logic_negate"></block>' +
    '    <block type="logic_boolean"></block>' +
    '    <block type="logic_null"></block>' +
    '    <block type="logic_ternary"></block>' +
    '    <block type="controls_switch"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catLoops" name="Loops">' +
    '    <block type="controls_repeat_ext">' +
    '      <value name="TIMES">' +
    '        <block type="math_number">' +
    '          <field name="NUM">10</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="controls_whileUntil"></block>' +
    '    <block type="time_loop">' +
    '       <value name="LOOP_SEC">' +
    '        <block type="math_number">' +
    '          <field name="NUM">10</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="controls_for">' +
    '      <value name="FROM">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="TO">' +
    '        <block type="math_number">' +
    '          <field name="NUM">10</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="BY">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="controls_flow_statements"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catMath" name="Math">' +
    '    <block type="math_number"></block>' +
    '    <block type="math_arithmetic"></block>' +
    '    <block type="math_single"></block>' +
    '    <block type="math_trig"></block>' +
    '    <block type="math_constant"></block>' +
    '    <block type="math_number_property"></block>' +
    '    <block type="math_change">' +
    '      <value name="DELTA">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="math_round"></block>' +
    '    <block type="math_modulo"></block>' +
    '    <block type="math_constrain">' +
    '      <value name="LOW">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="HIGH">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="math_random_int">' +
    '      <value name="FROM">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="TO">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="math_random_float"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '</xml>';
