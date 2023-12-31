/*
Uncomment this if you want cloud variables


window.cloudsetup = {
	ws:"ws://localhost:4726", //websocket url
	id:12345 //connection id, to separate cloud messages from others
};
*/

window.useBlocklyBlocks = false; //change this to true to have more blocks (from blockly)
window.useConfirmDialog = true; //asks the user if they want to save their changes (if true)

//this here loads everything.
var ggm2path = require("src/paths.js");
require("src/"+ggm2path+"/ggm-gui/main.js");
