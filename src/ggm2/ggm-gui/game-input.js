var elements = require("elements");

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: ((evt.clientX - rect.left) / (rect.right - rect.left) * renderer.width) / 2,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * renderer.height
    };
}
elements.getGPId("gameScreen").onmousemove = function (event) {
    var pos = getMousePos(elements.getGPId("gameScreen"), event); // get adjusted coordinates as above
    var x = Math.round(pos.x / 1) - (renderer.width / 2) / 2;
    var y = Math.round(pos.y * -1) + (renderer.height / 2);

    vm.setMousePos({
        x: x,
        y: y
    });
}
elements.getGPId("gameScreen").onmousedown = function (event) {
    event.preventDefault();
    vm.setMouseDown(true);
}
document.body.onmouseup = function (event) {
    event.preventDefault();
    vm.setMouseDown(false);
}
setInterval(function () {
    elements.getGPId("testPos").innerHTML = vm.project.mouseX + "," + vm.project.mouseY + ", down:" + vm.project.mouseDown;
}, 1);
document.body.onkeydown = function (event) {
    vm.simulateKey({
        key: event.key,
        down: true
    });
    //event.preventDefault();
}
document.body.onkeyup = function (event) {
    vm.simulateKey({
        key: event.key,
        down: false
    });
};
//Yes! finaly touch screen support!
try {
    //mouse up and mouse down for touch screen
    elements.getGPId("gameScreen").addEventListener("touchstart", (event) => { //touch started = mouse down
        vm.setMouseDown(true);
        //also move the mouse after setting mouse down.
        var pos = getMousePos(elements.getGPId("gameScreen"), {
            clientX: event.touches[event.touches.length - 1].clientX,
            clientY: event.touches[event.touches.length - 1].clientY
        }); // get adjusted coordinates as above
        var x = Math.round(pos.x / 1) - (renderer.width / 2) / 2;
        var y = Math.round(pos.y * -1) + (renderer.height / 2);

        vm.setMousePos({
            x: x,
            y: y
        });
        event.preventDefault();
    });
    elements.getGPId("gameScreen").addEventListener("touchend", (event) => { //touch ended = mouse up
        vm.setMouseDown(false);
        event.preventDefault();
    });
    //mouse movement for touch screen
    elements.getGPId("gameScreen").addEventListener("touchmove", (event) => { //drag/touch
        //also move the mouse after setting mouse down.
        var pos = getMousePos(elements.getGPId("gameScreen"), {
            clientX: event.touches[event.touches.length - 1].clientX,
            clientY: event.touches[event.touches.length - 1].clientY
        }); // get adjusted coordinates as above
        var x = Math.round(pos.x / 1) - (renderer.width / 2) / 2;
        var y = Math.round(pos.y * -1) + (renderer.height / 2);

        vm.setMousePos({
            x: x,
            y: y
        });
        event.preventDefault();
    });
} catch (e) { /*Just in case something goes wrong so it won't break ggm2*/ console.warn(e);
}