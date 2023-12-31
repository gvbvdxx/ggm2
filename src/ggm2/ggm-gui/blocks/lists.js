Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_lists_new",
  "message0": "New list",
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_new_text",
  "message0": "Split text  %1 and split it with %2",
  "args0": [
    {
      "type": "field_input",
      "name": "text",
      "text": "Hello-World!"
    },
    {
      "type": "field_input",
      "name": "split",
      "text": "-"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_item_number",
  "message0": "%1 get item number %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "list",
      "variable": "List"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_add",
  "message0": "%1 add item %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "list",
      "variable": "List"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_delete_number",
  "message0": "%1 Delete Item Number %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "list"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_length",
  "message0": "%1 length",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "list"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_delete_all",
  "message0": "%1 Delete all",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "list"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_list_split_string_value",
  "message0": "Split Text %1 and split it with %2 into an list",
  "args0": [
    {
      "type": "input_value",
      "name": "list"
    },
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_lists_new'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '[]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_lists_new_text'] = function(block) {
  var text_text = block.getFieldValue('text');
  var text_split = block.getFieldValue('split');
  // TODO: Assemble JavaScript into code variable.
  var code = '"'+text_text+'".split("'+text_split+'")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_lists_item_number'] = function(block) {
  var variable_list = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list+'['+value_name+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_lists_add'] = function(block) {
  var variable_list = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list+'.push('+value_name+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_lists_delete_number'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name+' = vm.project.block.deleteList('+variable_name+','+value_name+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_lists_length'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name+'.length';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_lists_delete_all'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name+' = [];\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_list_split_string_value'] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `(${value_list}).split(${value_value})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};