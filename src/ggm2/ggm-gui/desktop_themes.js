//themes
var path = require("path");
try{
	fs.mkdirSync(path.join(require("os").homedir(),"GvbvdxxGameMaker2Data"));
}catch(e){}
var themePath = path.join(require("os").homedir(),"GvbvdxxGameMaker2Data");
try{
	fs.mkdirSync(path.join(themePath,"./themes"));
	fs.writeFileSync(path.join(themePath,"./themes/dark.json"),JSON.stringify(JSON.parse(`
		{
			"info": {
				"name":"Editor Dark"
			},
			"styles": {
				"background": {
					"backgroundColor":"#3b4252"
				},
				"main_menu": {
					"backgroundColor":"#343a40"
				},
				"gameTitle": {
					"backgroundColor":"#868e96",
					"borderColor":"#868e96"
				},
				"libarySelection": {
					"backgroundColor":"#2e3440"
				},
				"libary": {
					"backgroundColor":"#3b4252"
				},
				"files": {
					"backgroundColor":"#3b4252"
				},
				"loadingscreen": {
					"backgroundColor":"#3b4252"
				}
			},
			"classes":".buttonBlue {background-color:#868e96;}.buttonBlue:hover {background-color:#868e96;}.separatorBarMenu {color:#868e96;}.blocklyToolboxDiv {background-color:#3b4252;}"
		}
	`),null,"  "));
}catch(e){}
if (!(fs.existsSync(path.join(themePath,"./themeSelected.data"),{recursive: true, force: true}))) {
	fs.writeFileSync(path.join(themePath,"./themeSelected.data"),"none",{recursive: true, force: true})
}
var themes = fs.readdirSync(path.join(themePath,"./themes/"),{recursive: true, force: true});
var path = require("path");
window.themeData = [];
var themeSelect = document.getElementById('themeSelect');
var selectedTheme = fs.readFileSync(path.join(themePath,"themeSelected.data"),{encoding:"UTF-8"});
var option = document.createElement("option");
option.selected = selectedTheme == "none";
option.innerHTML = "Default";
option.value = "none";
themeSelect.appendChild(option);
function appendTheme(data) {
	var option = document.createElement("option");
	if (selectedTheme == data.info.name) {
		option.selected = true;
	}
	option.innerHTML = data.info.name;
	option.value = data.info.name;
	themeSelect.appendChild(option);
}
themeSelect.onchange = () => {
	fs.writeFileSync(path.join(themePath,"./themeSelected.data"),themeSelect.value,{recursive: true, force: true});
};
for (var i in themes) {
	try{
		if (themes[i].split(".").pop() == "json") {
			var contents = fs.readFileSync(path.join(themePath,"./themes/",themes[i]),{encoding:"UTF-8", recursive: true, force: true });
			window.themeData.push(JSON.parse(contents));
			appendTheme(JSON.parse(contents));
		} else {
			console.log("Desktop Themes:",themes[i],"is not a valid theme file")
		}
	}catch(e){dialog.showErrorBox("Failed To Read Theme",`Failed To Read Theme: ${e}`);console.error(e);}
}
function themes() {
	document.getElementById('themes').hidden = false;
}
function applyStylesToObject(styles,object) {
	var keys = Object.keys(styles);
	object.setAttribute("class","");
	for (var i in keys) {
		object.style[keys[i]] = styles[keys[i]];
	}
}
function applyTheme(themeStyles) {
	var keys = Object.keys(themeStyles);
	for (var i in keys) {
		if (document.getElementById(keys[i]) || document[keys[i]]) {
			var object = document.getElementById(keys[i]) || document[keys[i]];
			applyStylesToObject(themeStyles[keys[i]],object);
		}
	}
}
function setTheme() {
	if (!(selectedTheme == "")) {
		for (var i in themeData) {
			if (themeData[i].info.name == selectedTheme) {
				applyTheme(themeData[i].styles);
				var style = document.createElement("style");
				style.innerHTML = themeData[i].classes;
				document.body.appendChild(style);
			}
		}
	}
}
setTheme();