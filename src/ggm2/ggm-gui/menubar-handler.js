var elements = require("elements");

window.save = function save() {
    gui.requestSaveFile();
}
window.load = function load() {
    gui.requestLoadFile();
}
elements.getGPId("gameFileUpload").onchange = function () {
    var reader = new FileReader();
    reader.onload = function () {
        gui.jsonTextToEditor(reader.result, "file");
        elements.getGPId("gameFileUpload").value = "";
    };
    if (elements.getGPId("gameFileUpload").files[0]) {
        reader.readAsText(elements.getGPId("gameFileUpload").files[0]);
    }
}
elements.getGPId("New_Game").onclick = function () {
    if (window.confirm('Do You Want To Start Over? Once You Click Ok, You Cannot Recover It.')) {
        workspace.clear();
        clearResources();
        loadDefaultGame();
    }
};