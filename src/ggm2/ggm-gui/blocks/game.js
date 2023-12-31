Blockly.defineBlocksWithJsonArray([
//sprites
{
  "type": "gvbvdxx_game_sprites_setsize",
  "message0": "set sprite %1 size to the size of the image",
  "args0": [
    {
      "type": "field_variable",
      "name": "spr",
      "variable": "sprite"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sp_all",
  "message0": "All Sprites Visible As An List",
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_rotl",
  "message0": "Change %1 Turn Left %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_value",
      "name": "pos",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_rotr",
  "message0": "Change %1 Turn Right %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_value",
      "name": "pos",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_on_key_pressed",
  "message0": "When key %1 pressed %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "key",
      "check": "String"
    },
	{
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_byy",
  "message0": "Change %1 Y By %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_value",
      "name": "pos",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_byx",
  "message0": "Change %1 X By %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_value",
      "name": "pos",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprite_t_mouse",
  "message0": "sprite %1 touching mouse?",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    }
  ],
  "output": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprite_clicked",
  "message0": "when sprite %1 is clicked %2 %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": BlockColors["game"],
  "tooltip": "Does something when the selected sprite is clicked.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_ghost",
  "message0": "set %1 ghost effect to %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_value",
      "name": "ghost",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "How see through the selected sprite will be.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_move",
  "message0": "%1 Move %2 Steps",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "Moves the selected sprite forwards in its direction.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_stop_everything",
  "message0": "Stop everything",
  "previousStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "Attempts to stop everything. Same thing as clicking the stop sign.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_bg",
  "message0": "set background image to data url %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "Set the background to the inputed image url.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_show",
  "message0": "show %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "Make the selected sprite appear.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_hide",
  "message0": "hide %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "Make the selected sprite disappear.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_empty",
  "message0": "Create empty sprite",
  "inputsInline": false,
  "output": "Sprite",
  "colour": BlockColors["game"],
  "tooltip": "Create an empty sprite object.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_set_img",
  "message0": "Set image on sprite  %1 %2 to %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "image",
      "check": "Image",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "Sets the image on the sprite to the image object.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_set_position",
  "message0": "Set %1 position on sprite %2 %3 to %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "X",
          "x"
        ],
        [
          "Y",
          "y"
        ]
      ]
    },
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "pos",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "Sets the selected sprite to the inputed positions.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_size",
  "message0": "Set %1 on sprite %2 %3 to %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "Width",
          "width"
        ],
        [
          "Height",
          "height"
        ]
      ]
    },
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "pos",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "Sets the selected sprite width or height to the inputed value.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_ontick",
  "message0": "On game tick %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "event"
    }
  ],
  "inputsInline": false,
  "colour": BlockColors["game"],
  "tooltip": "Runs every time the game runs a frame.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_flip",
  "message0": "Flip Sprite %1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "Horizontal",
          "hor"
        ],
        [
          "Vertical",
          "ver"
        ],
        [
          "None",
          "none"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "Flips the selected sprite verticaly, or horizontaly.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_direction",
  "message0": "Set direction on sprite %1 %2 to %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_dummy"
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
  "colour": BlockColors["game"],
  "tooltip": "Sets the direction of the selected sprite.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_keydown",
  "message0": "Is key %1 pushed?",
  "args0": [
    {
      "type": "input_value",
      "name": "key",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": BlockColors["game"],
  "tooltip": "Checks if the selected key is pushed.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_coliding",
  "message0": "Is sprite \"%1\" touching sprite \"%2\"?",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite1",
      "variable": "sprite"
    },
    {
      "type": "field_variable",
      "name": "sprite2",
      "variable": "sprite2"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": BlockColors["game"],
  "tooltip": "Checks if the selected sprite is touching another selected sprite.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprite_get",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite1",
      "variable": "sprite"
    },
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "x position",
          "x"
        ],
        [
          "y position",
          "y"
        ],
        [
          "direction",
          "direction"
        ],
        [
          "width",
          "width"
        ],
        [
          "height",
          "height"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": BlockColors["game"],
  "tooltip": "Gets an certian value for the selected sprite.",
  "helpUrl": ""
},
//sensing
{
  "type": "gvbvdxx_game_key",
  "message0": "%1 on keyboard",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "key",
      "options": [
        [
          "up arrow",
          "ArrowUp"
        ],
        [
          "down arrow",
          "ArrowDown"
        ],
        [
          "left arrow",
          "ArrowLeft"
        ],
        [
          "right arrow",
          "ArrowRight"
        ],
        [
          "space",
          " "
        ],
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ],
        [
          "9",
          "9"
        ],
        [
          "10",
          "10"
        ],
        [
          "a",
          "a"
        ],
        [
          "b",
          "b"
        ],
        [
          "c",
          "c"
        ],
		[
          "d",
          "d"
        ],
        [
          "e",
          "e"
        ],
        [
          "f",
          "f"
        ],
        [
          "g",
          "g"
        ],
        [
          "h",
          "h"
        ],
        [
          "i",
          "i"
        ],
        [
          "j",
          "j"
        ],
        [
          "k",
          "k"
        ],
        [
          "l",
          "l"
        ],
        [
          "m",
          "m"
        ],
        [
          "n",
          "n"
        ],
        [
          "o",
          "o"
        ],
        [
          "p",
          "p"
        ],
        [
          "q",
          "q"
        ],
        [
          "r",
          "r"
        ],
        [
          "s",
          "s"
        ],
        [
          "t",
          "t"
        ],
        [
          "u",
          "u"
        ],
        [
          "v",
          "v"
        ],
        [
          "w",
          "w"
        ],
        [
          "x",
          "x"
        ],
        [
          "y",
          "y"
        ],
        [
          "y",
          "y"
        ],
        [
          "z",
          "z"
        ],
        [
          "y",
          "y"
        ],
        [
          "z",
          "z"
        ],
        [
          "z",
          "z"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": BlockColors["game"],
  "tooltip": "Gets the key identifier of the selected key.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_mouse_x",
  "message0": "Mouse X Position",
  "inputsInline": true,
  "output": "Number",
  "colour": BlockColors["game"],
  "tooltip": "Gets the X position of the mouse.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_mouse_y",
  "message0": "Mouse Y Position",
  "inputsInline": true,
  "output": "Number",
  "colour": BlockColors["game"],
  "tooltip": "Gets the Y position of the mouse.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_mouse_down",
  "message0": "Mouse button pushed?",
  "output": "Boolean",
  "colour": BlockColors["game"],
  "tooltip": "Check if the mouse button is pushed.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_timer",
  "message0": "Timer",
  "inputsInline": true,
  "output": "Number",
  "colour": BlockColors["game"],
  "tooltip": "Get the current time from where the game started. (In seconds)",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_dayssince2000",
  "message0": "Days Since 2000",
  "inputsInline": true,
  "output": "Number",
  "colour": BlockColors["game"],
  "tooltip": "Gets how many days since 200.",
  "helpUrl": ""
},
//engine
{
  "type": "gvbvdxx_game_stop",
  "message0": "Stop Game",
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "Tries to stop the game",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_game_sprites_empty'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.makeSprite()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_sprites_set_img'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_image = Blockly.JavaScript.valueToCode(block, 'image', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.image = '+value_image+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_set_position'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.'+dropdown_name+' = Number('+value_pos+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_size'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.'+dropdown_name+' = Number('+value_pos+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_ontick'] = function(block) {
  var statements_event = Blockly.JavaScript.statementToCode(block, 'event');
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.events.tick.push(function () { '+statements_event+'});\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_flip'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.flip = "'+dropdown_name+'";\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_direction'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.direction = Number('+value_name+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_mouse_x'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.mouseX';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_mouse_y'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.mouseY';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_mouse_down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.mouseDown';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_keydown'] = function(block) {
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.getKeyPressed('+value_key+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_coliding'] = function(block) {
  var variable_sprite1 = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite1'), Blockly.Variables.NAME_TYPE);
  var variable_sprite2 = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite2'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.isTouching('+variable_sprite1+','+variable_sprite2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_sprite_get'] = function(block) {
  var variable_sprite1 = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite1'), Blockly.Variables.NAME_TYPE);
  var dropdown_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite1+'.'+dropdown_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_sprites_hide'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.hideSprite('+variable_sprite+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_show'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.showSprite('+variable_sprite+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_bg'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_name == '') {
	  value_name = '""';
  }
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.vm.renderer.bg.src = '+value_name+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_move'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.moveSteps('+variable_sprite+','+value_name+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_ghost'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_ghost = Blockly.JavaScript.valueToCode(block, 'ghost', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.ghost = '+value_ghost+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_key'] = function(block) {
  var dropdown_key = block.getFieldValue('key');
  // TODO: Assemble JavaScript into code variable.
  var code = '"'+dropdown_key+'"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_sprite_clicked'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.clicked.push(function () {\n'+statements_name+'\n});\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_on_key_pressed'] = function(block) {
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `if (!vm.project.keyListeners[${value_key}]){vm.project.keyListeners[${value_key}] = [];}\nvm.project.keyListeners[${value_key}].push(function () {\n${statements_name}\n});\n`;
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprite_t_mouse'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.getTouchMouse('+variable_sprite+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_sprites_byx'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.x += Number('+value_pos+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_byy'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.y += Number('+value_pos+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_rotr'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.direction += Number('+value_pos+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_rotl'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.direction -= '+value_pos+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sp_all'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(function () {var list = [vm.project.sprites];return list[0];})()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_sprites_setsize'] = function(block) {
  var variable_spr = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('spr'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = (variable_spr+'.width = '+variable_spr+'.image.width;\n')+(variable_spr+'.height = '+variable_spr+'.image.height;\n');
  return code;
};
Blockly.JavaScript['gvbvdxx_game_timer'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.timer';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_dayssince2000'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.daysSince2000()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_stop_everything'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.stop();try{return;}catch(e){};\n';
  return code;
};