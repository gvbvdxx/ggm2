Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_color_rgbcolorby",
  "message0": "Change RGB Color For Image %1 %2 R: %3 G: %4 B: %5",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "image"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "R",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "G",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "B",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["colors"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_color_invertimg",
  "message0": "Invert Colors For Image %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "image"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["colors"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_color_getcolorpos",
  "message0": "Get Color At X: %1 Y: %2",
  "args0": [
    {
      "type": "input_value",
      "name": "x"
    },
    {
      "type": "input_value",
      "name": "y"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["colors"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_color_changecolorimage",
  "message0": "Change Color In Image %1 %2 Find: %3 Replace: %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "image"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "find"
    },
    {
      "type": "input_value",
      "name": "replace"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["colors"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_color_changecolorsimage",
  "message0": "Change Colors In Image %1 %2 List: %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "image"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "find"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["colors"],
  "tooltip": "",
  "helpUrl": ""
}
]); //end add json

Blockly.JavaScript['gvbvdxx_color_rgbcolorby'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
  var value_g = Blockly.JavaScript.valueToCode(block, 'G', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `vm.project.block.changeColorEffect(${variable_name},${value_r},${value_g},${value_b});\n`;
  return code;
};
Blockly.JavaScript['gvbvdxx_color_invertimg'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_name}.src = vm.renderer.getInvertColorEffect(${variable_name});\n`;
  return code;
};
Blockly.JavaScript['gvbvdxx_color_getcolorpos'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `vm.renderer.getColorAtPos(${value_x},${value_y})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_color_changecolorimage'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_find = Blockly.JavaScript.valueToCode(block, 'find', Blockly.JavaScript.ORDER_ATOMIC);
  var value_replace = Blockly.JavaScript.valueToCode(block, 'replace', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_name}.src = vm.renderer.changeColorInImage(${variable_name},${value_find},${value_replace});\n`;
  return code;
};
Blockly.JavaScript['gvbvdxx_color_changecolorsimage'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_find = Blockly.JavaScript.valueToCode(block, 'find', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_name}.src = vm.renderer.changeColorsInImage(${variable_name},${value_find});\n`;
  return code;
};