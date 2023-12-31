window.currentMessages = [];
Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_group",
  "message0": "Group %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "default"
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["other"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_other_try_catch",
  "message0": "Try %1 %2 Catch %3 %4 %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "try",
      "align": "RIGHT"
    },
    {
      "type": "field_variable",
      "name": "e",
      "variable": "Error"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "onerror",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["other"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_brodcasts_send",
  "message0": "Broadcast %1",
  "args0": [
    {
      "type": "input_value",
      "name": "messagename",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["other"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_brodcasts_recived",
  "message0": "when I receive %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "message",
      "text": "Broadcast"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "inputsInline": false,
  "colour": BlockColors["other"],
  "tooltip": "",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_group'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_name+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_other_try_catch'] = function(block) {
  var statements_try = Blockly.JavaScript.statementToCode(block, 'try');
  var variable_e = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('e'), Blockly.Variables.NAME_TYPE);
  var statements_onerror = Blockly.JavaScript.statementToCode(block, 'onerror');
  // TODO: Assemble JavaScript into code variable.
  var code = 'try {\n'+statements_try+'\n} catch ('+variable_e+') {\n'+statements_onerror+'}\n;\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_brodcasts_send'] = function(block) {
  var value_messagename = Blockly.JavaScript.valueToCode(block, 'messagename', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'try{vm.messages['+value_messagename+'].forEach((f)=>{f();});}catch(e){};\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_brodcasts_recived'] = function(block) {
  var text_message = block.getFieldValue('message');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  window.currentMessages.push(text_message);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.messages["'+text_message.replaceAll("\"","\\\"").replaceAll("\\","\\\\")+'"].push(function () {\n'+statements_name+'\n});\n';
  guiTopCode += code;
  var realcode = "";
  return realcode;
};