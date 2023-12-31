Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_loging_log",
  "message0": "Console log %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["logging"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_loging_clear",
  "message0": "Console clear",
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["logging"],
  "tooltip": "",
  "helpUrl": ""
}
])
Blockly.JavaScript['gvbvdxx_loging_log'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.vm.console.log('+value_name+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_loging_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.vm.console.clear();\n';
  return code;
};