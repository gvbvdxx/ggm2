Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_async_funct",
  "message0": "Start Async %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "funct"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["async"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_async_while",
  "message0": "While %1 Do (async) %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "a"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "funct"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["async"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_async_wait",
  "message0": "Wait %1 Seconds (async)",
  "args0": [
    {
      "type": "input_value",
      "name": "a"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["async"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_async_forever",
  "message0": "Forever (async) %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "e"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["async"],
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.JavaScript['gvbvdxx_async_funct'] = function(block) {
  var statements_funct = Blockly.JavaScript.statementToCode(block, 'funct');
  // TODO: Assemble JavaScript into code variable.
  var code = '(async function () {\n'+statements_funct+'\n})();\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_async_while'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_funct = Blockly.JavaScript.statementToCode(block, 'funct');
  if (!(value_a)) {value_a = true;}
  // TODO: Assemble JavaScript into code variable.
  var code = 'while (('+value_a+') && vm.control.running) {\n'+"await vm.project.block.tickAsync();\n"+statements_funct+'\n};\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_async_wait'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
  if (!(value_a)) {
	  value_a = 0;
  }
  // TODO: Assemble JavaScript into code variable.
  var code = 'await vm.project.block.waitAsync('+value_a+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_async_forever'] = function(block) {
  var statements_e = Blockly.JavaScript.statementToCode(block, 'e');
  // TODO: Assemble JavaScript into code variable.
  var code = 'while (vm.control.running) {\n'+"await vm.project.block.tickAsync();\n"+statements_e+'\n};\n';
  return code;
};