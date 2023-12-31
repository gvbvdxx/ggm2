Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_control_if_then",
  "message0": "If  %1 then %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "if",
      "check": "Boolean"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "then"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["control"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_control_if_then_else",
  "message0": "If  %1 then %2 %3 else %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "if",
      "check": "Boolean"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "then"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "else"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["control"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_control_while",
  "message0": "While %1 %2 do %3 %4",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "statement",
      "check": "Boolean",
      "align": "CENTRE"
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_statement",
      "name": "while",
      "align": "CENTRE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["control"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_control_repeat",
  "message0": "Repeat %1 %2 Times %3 %4",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "statement",
      "check": "Number",
      "align": "CENTRE"
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_statement",
      "name": "while",
      "align": "CENTRE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["control"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_control_wait",
  "message0": "Wait %1 %2 Seconds Then %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "secs",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "after"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["control"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_control_while_refrsh",
  "message0": "While %1 %2 do with refresh %3 %4 when done do %5 %6",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "statement1",
      "check": "Boolean",
      "align": "CENTRE"
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_statement",
      "name": "while1",
      "align": "CENTRE"
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_statement",
      "name": "while2",
      "align": "CENTRE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["control"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_control_wait_until",
  "message0": "Wait Until %1 %2 Then %3 %4",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "statement1",
      "check": "Boolean",
      "align": "CENTRE"
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_statement",
      "name": "a"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["control"],
  "tooltip": "",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_control_if_then'] = function(block) {
  var value_if = Blockly.JavaScript.valueToCode(block, 'if', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
  // TODO: Assemble JavaScript into code variable.
  if (value_if == "") {
	  value_if = "false";
  } else {
	  block.setWarningText(null);
  }
  var code = 'if ('+value_if+') {\n'+statements_then+'\n}\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_control_if_then_else'] = function(block) {
  var value_if = Blockly.JavaScript.valueToCode(block, 'if', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
  var statements_else = Blockly.JavaScript.statementToCode(block, 'else');
  // TODO: Assemble JavaScript into code variable.
  if (value_if == "") {
	  value_if = "false";
  } else {
	  block.setWarningText(null);
  }
  var code = 'if ('+value_if+') {\n'+statements_then+'\n} else {\n'+statements_else+'\n}\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_control_while'] = function(block) {
  var value_statement = Blockly.JavaScript.valueToCode(block, 'statement', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_while = Blockly.JavaScript.statementToCode(block, 'while');
  if (value_statement == "") {
	  value_statement = "(false)";
  }
  // TODO: Assemble JavaScript into code variable.
  var code = 'var CRASHCHECK = 0;\nwhile '+value_statement+' {\n'+statements_while+'\nCRASHCHECK += 1;\nif (CRASHCHECK > 1000) {\n  break;\n};\n}';
  return code;
};
Blockly.JavaScript['gvbvdxx_control_repeat'] = function(block) {
  var value_statement = Blockly.JavaScript.valueToCode(block, 'statement', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_while = Blockly.JavaScript.statementToCode(block, 'while');
  if (value_statement == "") {
	  value_statement = "0";
  }
  // TODO: Assemble JavaScript into code variable.
  var code = 'var RepeatCount = 0;\nwhile(RepeatCount < '+value_statement+') {\nRepeatCount += 1;\n'+statements_while+'\n}\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_control_wait'] = function(block) {
  var value_secs = Blockly.JavaScript.valueToCode(block, 'secs', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_after = Blockly.JavaScript.statementToCode(block, 'after');
  var calcTime = 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.wait('+value_secs+',() => {\n'+statements_after+'\n});\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_control_while_refrsh'] = function(block) {
  var value_statement1 = Blockly.JavaScript.valueToCode(block, 'statement1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_while1 = Blockly.JavaScript.statementToCode(block, 'while1');
  var statements_while2 = Blockly.JavaScript.statementToCode(block, 'while2');
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.whileRefreshUpdate('+value_statement+');vm.project.block.whileRefresh(function () {\n'+statements_while+'vm.project.block.whileRefreshUpdate('+value_statement+');\n},function(){\n'+statements_while2+'\n});\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_control_wait_until'] = function(block) {
  var value_statement1 = Blockly.JavaScript.valueToCode(block, 'statement1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_a = Blockly.JavaScript.statementToCode(block, 'a');
  // TODO: Assemble JavaScript into code variable.
  var code = `
function __waitUntilTicks() {
	if (vm.control.running) {
		if (${value_statement1}) {
			${statements_a}
		} else {
			setTimeout(__waitUntilTicks,1);
		}
	}
}
setTimeout(__waitUntilTicks,1);
  ;\n`;
  return code;
};