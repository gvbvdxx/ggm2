Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_camera_enable",
  "message0": "Start Camera",
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["camera"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_camera_disable",
  "message0": "Stop Camera",
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["camera"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_camera_trans",
  "message0": "Set Camera Ghost To %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["camera"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_camera_volume",
  "message0": "Microphone Loudness",
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["camera"],
  "tooltip": "",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_camera_enable'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.openCamera();\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_camera_disable'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.stopCamera();\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_camera_trans'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  if (!(value_name)) {
	  value_name = 0;
  }
  // TODO: Assemble JavaScript into code variable.
  var code = `vm.renderer.camghost = ${value_name};\n`;
  return code;
};
Blockly.JavaScript['gvbvdxx_camera_volume'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.micVolume()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};