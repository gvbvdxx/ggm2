Blockly.defineBlocksWithJsonArray([
    {
      "type": "gvbvdxx_server_setvar",
      "message0": "set cloud variable %1 name: %2 value: %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "name"
        },
        {
          "type": "input_value",
          "name": "value"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": BlockColors["cloud"],
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "gvbvdxx_server_getvar",
      "message0": "get cloud variable %1 name: %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "name"
        }
      ],
      "inputsInline": true,
      "output": [
        "Number",
        "String"
      ],
      "colour": BlockColors["cloud"],
      "tooltip": "",
      "helpUrl": ""
    }
]);
Blockly.JavaScript['gvbvdxx_server_setvar'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `vm.project.block.cloudVarSet(${value_name},${value_value});/*Does nothing if no cloud variables enabled*/\n`;
  return code;
};
Blockly.JavaScript['gvbvdxx_server_getvar'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Asemble JavaScript into code variable.
  var code = `vm.project.block.cloudVarGet(${value_name})/*Does nothing if no cloud variables enabled*/`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};