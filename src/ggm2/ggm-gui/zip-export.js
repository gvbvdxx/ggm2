var elements = require("elements");

var fselect = document.createElement("input");
fselect.type = "file";
fselect.accept = ".gb2,.ggm2g";
fselect.onchange = async function () {
    if (fselect.files[0]) {
        if (fselect.files[0].name.split(".").pop().toLowerCase() == "ggm2g") {
            var reader = new FileReader();
            reader.onload = function () {
                gui.jsonTextToEditor(reader.result, "file");
                fselect.value = "";
            };
            reader.readAsText(fselect.files[0]);
        } else {
            await window.gui.importZip(fselect.files[0]);
            fselect.value = "";
        }
    }
};
window.gui.exportZip = async function () {
    var zip = new JSZip();
    var fileList = [];
    var resources = zip.folder("resources");
    for (var name of Object.keys(vm.project.resources)) {
        resources.file(name, vm.project.resources[name].data.split(",").pop(), {
            base64: true
        });
        fileList.push({
            path: "resources/" + name,
            type: vm.project.resources[name].type,
            name: name,
            dataurlStart: vm.project.resources[name].data.split(",")[0]
        });
    };
    zip.file("blocks.xml", Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)), {});
    zip.file("code.js", vm.code, {});
    zip.file("main.json", JSON.stringify({
            files: fileList,
            title: elements.getGPId("gameTitle").value,
            thumb: elements.getGPId("gameScreen").toDataURL(),
            shared: window.shared,
            dis: elements.getGPId("discription").value,
            messages: vm.messageData
        }), {});
    return zip;
};
window.gui.importZip = async function (file) {
    elements.getGPId("filesLoadedValue").hidden = false;
    elements.getGPId("filesLoadedValue").innerHTML = "";
    elements.getGPId("filesLoadedValue").innerHTML = `Loading File...`;
    window.zip = await JSZip.loadAsync(file);
    clearResources();
    workspace.clear();
    elements.getGPId("filesLoadedValue").innerHTML = `Extracting Data...`;
    var data = JSON.parse(await window.zip.files["main.json"].async("text"));
    vm.messageData = data.messages;
    elements.getGPId("gameTitle").value = data.title;
    elements.getGPId("discription").value = data.dis;
    elements.getGPId("filesLoaded").max = data.files.length;
    elements.getGPId("filesLoaded").hidden = false;
    var countFiles = 0;
    elements.getGPId("filesLoaded").value = 0;
    for (var file of data.files) {
        elements.getGPId("loadingscreen").hidden = false;
        elements.getGPId("filesLoadedValue").innerHTML = `Extracting Resources: ${Math.round((countFiles / data.files.length) * 100)}%`;
        var contents = await zip.files[file.path].async("base64");
        countFiles += 1;
        elements.getGPId("filesLoaded").value = countFiles;
        var dataURL = `${file.dataurlStart},${contents}`;
        readFileAsResource(dataURL, file.name, file.type);
    }
    elements.getGPId("filesLoaded").hidden = true;
    elements.getGPId("filesLoadedValue").innerHTML = `Loading Code...`;
    vm.code = await window.zip.files["code.js"].async("text");
    elements.getGPId("filesLoadedValue").innerHTML = `Loading Blocks...`;
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(await window.zip.files["blocks.xml"].async("text")), workspace);
    elements.getGPId("loadingscreen").hidden = true;
    elements.getGPId("filesLoadedValue").hidden = true;
};
window.gui.requestSaveFile = async function () {
    var zip = await window.gui.exportZip();
    var blob = await zip.generateAsync({
        type: "blob"
    });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${elements.getGPId("gameTitle").value}.gb2`;
    a.click();
}
window.gui.requestLoadFile = function () {
    fselect.click();
};

elements.getGPId("discription").value = [
    "Put information about your game, or project inside this section.",
    "Everyone will see the information.",
    "For example: Game controls, and how to play the game.",
    "Give credit to other people if they ask you to."
].join("\n");
