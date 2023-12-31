Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_game_var_pos",
  "message0": "set %1 x: %2 y: %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "mon",
      "variable": "monitor"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["display"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_var_make",
  "message0": "Make empty monitor object",
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["display"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_var_set",
  "message0": "Set monitor name to %1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "monitor"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["display"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_var_set_text",
  "message0": "Set monitor text to %1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "monitor"
    },
    {
      "type": "input_value",
      "name": "name"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["display"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_var_visible",
  "message0": "Set monitor visiblity to %1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "monitor"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "Boolean"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["display"],
  "tooltip": "",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_game_var_pos'] = function(block) {
  var variable_mon = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('mon'), Blockly.Variables.NAME_TYPE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_mon+'.x = '+value_x+';\n'+variable_mon+'.y = '+value_y+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_var_make'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.makeMonitor()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_var_set'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name+'.name = '+value_name+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_var_set_text'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name+'.value = '+value_name+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_var_visible'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name+'.visible = '+value_name+';\n';
  return code;
};