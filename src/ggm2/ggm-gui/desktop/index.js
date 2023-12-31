var ggm2path = require("src/paths.js");
var isDesktop = require("src/"+ggm2path+"/ggm-gui/desktop/desktop-checker.js");
if (isDesktop()) {
	module.exports = require("src/"+ggm2path+"/ggm-gui/desktop/desktop-runtime.js");
	window.gui.isDesktopVersion = true;
} else {
	window.gui.isDesktopVersion = false;
	module.exports = null;
}