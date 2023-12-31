var elements = require("elements");

var console = require("log");
//dialogs
var dialogBox = elements.getGPId("dialogBox");
var dialogBackground = elements.getGPId("dialogBackground");
var dialogOptions = {
    inputs: {
        txt: elements.getGPId("dialogInput")
    },

    buttons: {
        ok: elements.getGPId("dialogButtonOk"),

        cancel: elements.getGPId("dialogButtonCancel")

    },
    name: elements.getGPId("dialogName"),

    txt: elements.getGPId("dialogText"),

    hideAll: function () {
        elements.getGPId("dialogInput").hidden = true;
        elements.getGPId("dialogText").hidden = true;
        elements.getGPId("dialogButtonOk").hidden = false;
        elements.getGPId("dialogButtonCancel").hidden = false;
    }
};
var app = elements.getGPId("app");
dialogBackground.style.display = "none";
window.gui.dialogs = {
    alert: (function (message, callback) {
        dialogBackground.style.display = "block";

        dialogBox.style.display = "block";

        dialogOptions.hideAll();

        dialogOptions.name.innerHTML = message;

        elements.getGPId("dialogButtonCancel").hidden = true;

        dialogOptions.buttons.ok.onclick = function () {
            try {
                app.hidden = false;
                try {
                    callback();
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };

        dialogOptions.buttons.cancel.onclick = function () {
            try {
                try {
                    callback();
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };
    }),
    confirm: (function (message, callback) {
        dialogBackground.style.display = "block";

        dialogBox.style.display = "block";

        dialogOptions.hideAll();

        dialogOptions.name.innerHTML = message;

        dialogOptions.buttons.ok.onclick = function () {
            try {
                app.hidden = false;
                try {
                    callback(true);
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };

        dialogOptions.buttons.cancel.onclick = function () {
            try {
                try {
                    callback(false);
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };
    }),
    prompt: (function (message, defaultValue, callback) {
        dialogBackground.style.display = "block";

        dialogBox.style.display = "block";

        dialogOptions.hideAll();

        dialogOptions.name.innerHTML = message;

        dialogOptions.inputs.txt.value = defaultValue;

        dialogOptions.inputs.txt.hidden = false;

        let dialogInput = dialogOptions.inputs.txt;

        dialogOptions.buttons.ok.onclick = function () {
            try {
                callback(dialogInput.value);
            } catch (e) {}
            dialogBackground.style.display = "none";
            dialogBox.style.display = "none";
        };

        dialogOptions.buttons.cancel.onclick = function () {
            try {
                callback(null);
            } catch (e) {}
            dialogBackground.style.display = "none";
            dialogBox.style.display = "none";
        };
    })
}
Blockly.alert = (function (message, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    elements.getGPId("dialogButtonCancel").hidden = true;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback();
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback();
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});

Blockly.confirm = (function (message, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback(true);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback(false);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});

Blockly.prompt = (function (message, defaultValue, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    dialogOptions.inputs.txt.value = defaultValue;

    dialogOptions.inputs.txt.hidden = false;

    let dialogInput = dialogOptions.inputs.txt;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback(dialogInput.value);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback(null);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});
