var elements = require("elements");

var console = require("log");

function addToConsole(msg, preElm) {
    if (!preElm) {
        var preElm = {
            element: "div"
        };
    }
    var parsedMsg = "";
    try {
        parsedMsg = JSON.stringify(msg, null, "\t");
    } catch (e) {
        parsedMsg = "NOTE: Unable to parse logged object.";
    }
    var consoleElements = elements.createElementsFromJSON([
                preElm, {
                    element: "span",
                    textContent: parsedMsg.toString()
                }, {
                    element: "br"
                }
            ]);
    elements.appendElements(elements.getGPId('console'), consoleElements);
}

vm.console.log = function (text) {
    console.log("VM Console [LOG]: " + text);
    addToConsole(text, {
        element: "span",
        textContent: "[Project]: ",
		style:{
			fontWeight: "bold"
		}
    });
}
vm.console.error = function (text) {
    console.log("VM Console [ERROR]: " + text.toString());
    addToConsole(text.toString(), {
        element: "span",
        textContent: "[ERROR]: ",
        style: {
            color: "red",
            fontWeight: "bold"
        }
    });
    vm.stop();
}
vm.console.clear = function () {
    elements.getGPId('console').textContent = "";
}
