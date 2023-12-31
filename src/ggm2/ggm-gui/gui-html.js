var console = require("log");

var loader = require("file-loader");
var ggm2path = require("src/paths.js");
module.exports = loader.read("src/"+ggm2path+"/ggm-gui/html.html");