Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_audio_playsfx",
  "message0": "Play Sound %1",
  "args0": [
    {
      "type": "input_value",
      "name": "datauri",
      "check": "DataURL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_audio_playbgm",
  "message0": "Play Background Music %1",
  "args0": [
    {
      "type": "input_value",
      "name": "datauri",
      "check": "DataURL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_audio_pausebgm",
  "message0": "Pause Background Music",
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_audio_playbgmnosrc",
  "message0": "Play Background Music",
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_audio_waituntiload",
  "message0": "(ASYNC) Wait until data url %1 sound plays",
  "args0": [
    {
      "type": "input_value",
      "name": "Data",
      "check": "DataURL"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_baudio_create",
  "message0": "Create New Audio URL %1",
  "args0": [
    {
      "type": "input_value",
      "name": "dataurl",
      "check": "DataURL"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_baudio_load",
  "message0": "Load Audio %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "audvar",
      "variable": "Audio"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_baudio_play",
  "message0": "Play %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "audvar",
      "variable": "Audio"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_baudio_pause",
  "message0": "Pause %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "audvar",
      "variable": "Audio"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_baudio_setrate",
  "message0": "Set  %1 Playback Rate To %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "audvar",
      "variable": "Audio"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_baudio_setvolume",
  "message0": "Set  %1 Volume To  %2 %%",
  "args0": [
    {
      "type": "field_variable",
      "name": "audvar",
      "variable": "Audio"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_baudio_onended",
  "message0": "%1 finished playing %2 %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "audvar",
      "variable": "Audio"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "do"
    }
  ],
  "inputsInline": true,
  "colour": BlockColors["audio"],
  "tooltip": "",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_baudio_onended'] = function(block) {
  var variable_audvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('audvar'), Blockly.Variables.NAME_TYPE);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_audvar+'.onended = function () {\n'+statements_do+'\n};\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_baudio_setvolume'] = function(block) {
  var variable_audvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('audvar'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_audvar+'.setVolume(('+value_name+')/100);\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_baudio_setrate'] = function(block) {
  var variable_audvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('audvar'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_audvar+'.playbackRate = ('+value_name+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_baudio_create'] = function(block) {
  var value_dataurl = Blockly.JavaScript.valueToCode(block, 'dataurl', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'new vm.betterAudio.c('+value_dataurl+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_baudio_load'] = function(block) {
  var variable_audvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('audvar'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'await '+variable_audvar+'.load();\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_baudio_play'] = function(block) {
  var variable_audvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('audvar'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_audvar+'.play();\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_baudio_pause'] = function(block) {
  var variable_audvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('audvar'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_audvar+'.pause();\n';
  return code;
};


Blockly.JavaScript['gvbvdxx_audio_playsfx'] = function(block) {
  var value_datauri = Blockly.JavaScript.valueToCode(block, 'datauri', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.audioEngine.sfx.play('+value_datauri+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_audio_playbgm'] = function(block) {
  var value_datauri = Blockly.JavaScript.valueToCode(block, 'datauri', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.audioEngine.bgm.setSrc('+value_datauri+');vm.audioEngine.bgm.play();vm.audioEngine.bgm.isPlaying = true;\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_audio_pausebgm'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.audioEngine.bgm.isPlaying = false;\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_audio_playbgmnosrc'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.audioEngine.bgm.isPlaying = true;\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_audio_waituntiload'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'Data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'await vm.audioEngine.sfx.play('+value_data+');\n';
  return code;
};