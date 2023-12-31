var elements = require("elements");

//fixes the screens scale problem, where it just stretches out the canvas to fit the screen.
//also adds hd rendering in.

var gs = elements.getGPId("gameScreen");
var ga = elements.getGPId("gameArea");
setInterval(() => {
    //gs.style.backgroundColor = "white";
    if (ga.getAttribute("class") == "fullscreenGame") {
        var screenScale = (window.innerHeight-32) / 360;
        gs.style.width = (screenScale * renderer.width) + "px";
        gs.style.height = (screenScale * renderer.height) + "px";
    } else {
        gs.style.width = renderer.width + "px";
        gs.style.height = renderer.height + "px";
    }
}, 10);
renderer.addEventListener("tick", function () {
    if (ga.getAttribute("class") == "fullscreenGame") {
        if (vm.control.running) {
            gs.width = gs.getBoundingClientRect().width;
            gs.height = gs.getBoundingClientRect().height;
        }
    } else {
        if (vm.control.running) {
            gs.width = renderer.width;
            gs.height = renderer.height;
        }
    }
});
