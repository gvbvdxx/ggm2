var elements = require("elements");


var console = require("log");

var gameArea = elements.getGPId('gameArea');
var gameScreen = elements.getGPId("gameScreen");
var files = elements.getGPId("files");
var mainMenu = elements.getGPId("main_menu");
var fullscreenButtonImage = elements.getGPId("fullscreenButtonImage");

function toggleFullScreen() {
    if (gameArea.className == 'fullscreenGame') {
        gameArea.className = '';
        gameScreen.setAttribute('style', 'image-rendering: pixelated;');
        files.hidden = false;
        if (window.desktopFullScreenFunction) {
            window.desktopFullScreenFunction(false);
        }
        mainMenu.setAttribute("hidemenu","false");
        elements.getGPId('fullscreenButtonImage').src = 'static/player/fullscreen-button.png';
		console.log("Exited full screen.");
    } else {
        gameArea.className = 'fullscreenGame';
        fullscreenButtonImage.src = 'static/player/exit-fullscreen-button.png';
        gameScreen.setAttribute('style', 'z-index:100000000;width:88.5%;height:calc(100vh - 18px);image-rendering:pixelated;');
        files.hidden = true;
        if (window.desktopFullScreenFunction) {
            window.desktopFullScreenFunction(true);
        }
        mainMenu.setAttribute("hidemenu","true");
		console.log("Entered full screen.");
    }
}

elements.getGPId("toggleFullscreenButton").onclick = function () {
	toggleFullScreen();
};