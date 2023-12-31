var elements = require("elements");

var console = require("log");
//for setting up the vm

renderer.canvas = elements.getGPId("gameScreen");
vm.code = "";
vm.attachRenderer(renderer);
vm.attachAudioEngine(audioEngine);

//updates the vm code when you edit the script space
function myUpdateFunction(event) {
	window.currentMessages.length = 0;
	window.guiTopCode = "";
    var code = Blockly.JavaScript.workspaceToCode(workspace);
	vm.messageData = window.currentMessages;
    vm.code = guiTopCode+"\n"+code;
    window.showSaveDialog = true;
}
workspace.addChangeListener(myUpdateFunction);