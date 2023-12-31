var console = require("log");
var logger = require("log");
var elements = require("elements");
var ggm2path = require("src/paths.js");
function doScriptAdd(s) {
	return require("src/"+ggm2path+"/"+s);
}
window.shared = false;

window.gui = {
    loadScript: function (src, callback) {
		var val = doScriptAdd("ggm-gui" + "/" + src);
		if (callback) {
			callback(val);
		}
		return val;
    },
    blocks: {
        addExtension: function (json) {
            Blockly.defineBlocksWithJsonArray(json.blocks);
            toolboxHTML += "<category name='" + json.title + "' colour='" + json.color + "'>" + json.contents + "</category>";
            workspace.updateToolbox("<xml>" + toolboxHTML + "</xml>")
        }
    },
    editorToJsonText: function (type) {
        var loadingScreen = elements.getGPId("loadingscreen");
        return JSON.stringify({
            blocklyXML: Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)),
            files: fileResourcesArray,
            title: elements.getGPId("gameTitle").value,
            thumb: elements.getGPId("gameScreen").toDataURL(),
            shared: window.shared,
            dis: elements.getGPId("discription").value,
            code: vm.code
        });
    },
    jsonTextToEditor: function (JsonText, type) {
        var loadingScreen = elements.getGPId("loadingscreen");
        loadingScreen.hidden = false;
        clearResources();
        var JsonTextParsed = JSON.parse(JsonText);
        var i = 0;
        while (JsonTextParsed.files.length > i) {
            readFileAsResource(JsonTextParsed.files[i].data, JsonTextParsed.files[i].name, JsonTextParsed.files[i].type);
            i += 1;
        }
        workspace.clear();
        elements.getGPId("gameTitle").value = JsonTextParsed.title
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(JsonTextParsed.blocklyXML), workspace);
        if (type == "file") {}
        else {
            if (JsonTextParsed.shared) {
                window.shared = JsonTextParsed.shared;
            }
        }
        elements.getGPId("discription").value = JsonTextParsed.dis;
        loadingScreen.hidden = true;
    }
}
var toolbox = elements.getGPId('toolbox');
var toolboxHTML = elements.getGPId('toolbox').innerHTML;
//blockly injection starts
var blocklyArea = elements.getGPId('blocklyArea');
var blocklyDiv = elements.getGPId('blocklyDiv');
window.workspace = Blockly.inject(blocklyDiv, {
    toolbox: toolbox,
    collapse: false,
    sounds: true,
    move: {
        scrollbars: {
            horizontal: true,
            vertical: true
        },
        drag: true,
        wheel: false
    },
    zoom: {
        controls: true,
        wheel: false,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: false
    },
    trashcan: false,
    grid: {
        spacing: 20,
        length: 3,
        colour: '#bac8ff',
        snap: false
    },
    theme: Blockly.Themes.GGM,
    renderer: "custom_renderer",
    media: "./static/blockmedia/"
});
gui.loadScript("blockly-resize-handler.js");
gui.loadScript("vm-setup.js");
gui.loadScript("game-input.js");
gui.loadScript("html-console.js");
gui.loadScript("resources-tab.js");
gui.loadScript("menubar-handler.js");
gui.loadScript("dialog-handler.js");

//Toolbox Management
window.toolboxManagement = class {
    constructor() {
        this.blockly = Blockly;
        this.workspace = workspace;
        this.addCategory = function (info) {
            elements.getGPId("toolbox").innerHTML += `
			<category name='${info.name}' colour='${info.color}'>
			${this.blockXML}
			</category>
			`;
            this.workspace.updateToolbox("<xml>" + elements.getGPId("toolbox").innerHTML + "</xml>")
        };
        this.blockXML = "";
        this.log = function (text) {
            console.log("extension: " + text)
        };
        this.vm = window.vm;
    }
};
function loadDefaultGame() {
	clearResources();
	workspace.clear();
};
gui.loadScript("export-code.js");
gui.loadScript("ask-save-dialog.js");
gui.loadScript("scalefix.js");
gui.loadScript("cloud-runtime.js");
window.loadDefaultGame = loadDefaultGame;
gui.loadScript("blocks/index.js");
gui.loadScript("left-tabs.js");

gui.loadScript("fullscreen-handler.js");

//make it so the user cannot select everything.

gui.loadScript("selection-fix.js");

//make discription easier to edit.

gui.loadScript("discriptiontools/index.js");

//GGM2 1.5 Desktop Stuff:
gui.loadScript("desktop/index.js");