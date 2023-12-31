/*
	GGM2 1.5 DOES NOT USE THIS ANYMORE!!!
	this version of ggm2 desktop runtime is outdated.
*/
//do whatever you want for desktop version here
console.log("desktop mode enabled.");
var electron = require('@electron/remote');
var fs = require('fs');
var dialog = electron.dialog;
var electronConsole = electron.app.console;
var electronWindow = electron.getCurrentWindow(); //unlike in the electron main, you cant overwrite window, so you cant crash the editor.
var devloperStuff = null;
var devTools = false;
try{
	devloperStuff = fs.readFileSync("devloper.json",{encoding:"UTF-8"},{recursive: true, force: true});
	devTools = JSON.parse(devloperStuff).devloperTools;
}catch(e){}
if (devTools) {
	electronWindow.openDevTools();
}
//give it a second to do something.
setTimeout(() => {
	window.onerror = function (e) {
		if (!(devTools)) {
			/**
			UPDATE 1.5.4, Removed The Unexpected Error,
			Sometimes Slow PC's Can Cause Crashes, Due To
			Slow Renderering Times, Or An Error Of The PC's
			Reading Times, With Loading The Default Project
			*/
/*  			dialog.showErrorBox("Unexpected Error!",`Gvbvdxx Game Maker 2 Desktop Has Crashed,
We Are Sorry But We Need To Quit,
The Error Was Logged With:
${e}`);
			window.onbeforeunload = (event) => {
			};
			electronWindow.close(); */
		}
	};
/* 	setInterval(() => {
		errors
	}); */
},300);
electronConsole.log("loaded desktop scripts");
window.desktopFullScreenFunction = function (value) {
	electronWindow.setFullScreen(value);
};

//overite new game function
document.getElementById("New_Game").onclick = function () {
	var response = dialog.showMessageBoxSync(electronWindow,{
		title:"Start Over?",
		type:"question",
		buttons:["yes","no"],
		message:"If you start over,\nwithout saving changes,\nyou can't recover it, are you sure?"
	});
	if (response == 0) {
		workspace.clear();
		clearResources();
		loadDefaultGame();
		window.saveFilePath = "";
	}
};
window.saveFilePath = "";
document.getElementById("saveOnlineDesktop").onclick = function () {
	
};
function saveFunction() {
	
}
function openGameSaveSelect() {
	return dialog.showSaveDialogSync(electronWindow,{
		title:"Save Gvbvdxx Game Maker 2 Project",
		filters:[
			{name:"All Game Formats",extensions:["gb2"]},
			{name:"gvbvdxx game maker 2 game (zip)",extensions:["gb2"]}
		]
	});
}
var path = require("path");
try{
	fs.mkdirSync(path.join(require("os").homedir(),"Documents","Gvbvdxx Game Maker 2 Projects"));
}catch(e){}
var gamesPath = path.join(require("os").homedir(),"Documents","Gvbvdxx Game Maker 2 Projects");
function openGameOpenSelect() {
	var path = require("path");
	return dialog.showOpenDialogSync(electronWindow,{
		title:"Open Gvbvdxx Game Maker 2 Project",
		filters:[
			{name:"All Game Formats",extensions:["ggm2g","gb2"]},
			{name:"gvbvdxx game maker 2 game",extensions:["ggm2g"]},
			{name:"gvbvdxx game maker 2 game (zip)",extensions:["gb2"]}
		],
		defaultPath:gamesPath
	});
}
async function saveAs() {
	window.saveFilePath = openGameSaveSelect();
	//TODO: update this script here if you updated the code for saving in the gui script.
	if (window.saveFilePath) {
		fs.writeFileSync(window.saveFilePath,await (await gui.exportZip()).generateAsync({type:"base64"}),{encoding:"Base64"});
	} else {
		window.saveFilePath = "";
	}
}
async function save() {
	if (window.saveFilePath.split(".").pop().toLowerCase() == "ggm2g") {
		dialog.showMessageBoxSync(electronWindow,{
			title:"Old File Type",
			message:`This File Is Saved As An GGM2G You Must Resave The File As An GB2 To Propely Save.`,
			buttons:["ok"],
			type:"info"
		});
		window.saveFilePath = "";
	}
	if (window.saveFilePath == "") {
		saveAs();
	} else {
		try{
			//TODO: update this script here if you updated the code for saving in the gui script.
			fs.writeFileSync(window.saveFilePath,await (await gui.exportZip()).generateAsync({type:"base64"}),{encoding:"Base64"});
		}catch(e){}
	}
}
function load() {
	var paths = openGameOpenSelect();
	if (paths) {
		window.saveFilePath = paths[0];
		var contents = fs.readFileSync(window.saveFilePath);
		//TODO: update this script here if you updated the code for loading in the gui script.
		if (paths[0].split(".").pop().toLowerCase() == "ggm2g") {
			gui.jsonTextToEditor(contents,"file");
		}
		if (paths[0].split(".").pop().toLowerCase() == "gb2") {
			gui.importZip(contents);
		}
		document.getElementById("gameFileUpload").value = "";
	}
}


//exe exporting. (not finished)
let electronLink = "https://github.com/electron/electron/releases/download/v19.0.3/electron-v19.0.3-win32-arm64-pdb.zip";

//load from opened file
try{
	var path = electron.process.argv[1];
	//TODO: update this script here if you updated the code for loading in the gui script.
	setTimeout(() => {
		try{
			
			gui.jsonTextToEditor(fs.readFileSync(electron.process.argv[1]),"file");
			window.saveFilePath = path;
		}catch(e){electronConsole.error(e)}
	},600);
	//TODO: update this script here if you updated the code for loading in the gui script.
	setTimeout(async () => {
		try{
			await gui.importZip(fs.readFileSync(electron.process.argv[1]));
		}catch(e){electronConsole.error(e)}
	},600);
}catch(e){electronConsole.error(e)}

//close exit dialog
var quitMessage = `================
THIS DOES NOT AUTO BACKUP!!!
if you don't save, then you cant recover it,
Are you sure you want to leave?
================`;
window.onbeforeunload = (event) => {
	var message = dialog.showMessageBoxSync(electronWindow,{
		title:"Exit?",
		message:quitMessage,
		buttons:["yes","no"],
		type:"question"
	})
	if (message == 1) {
		event.preventDefault();
		return false;
	}
};
try{
	console.log("loading themes...");
	require("./ggm-gui/desktop_themes.js")
}catch(e){console.error(e);}
function closeThemes() {
	var message = dialog.showMessageBoxSync(electronWindow,{
		title:"Restart App?",
		message:`Do You Want To Restart The App, You Will Need To Do This To Update The Theme.`,
		buttons:["yes","no"],
		type:"question"
	});
	if (message == 0) {
		window.onbeforeunload = (event) => {
		};
		window.location.reload();
	}
}