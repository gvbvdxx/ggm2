var elements = require("elements");

//project details:

var projectDetails = {
    element: "div",
    gid: "projectDetails",
    hidden: "true",
    children: [{
            element: "div",
            style: {
                top: "50%",
                left: "50%",
                position: "absolute",
                width: "600px",
                height: "400px",
                marginLeft: "-300px",
                marginTop: "-200px",
                backgroundColor: "white",
                zIndex: "1000",
                borderRadius: "8px",
                justifyContent: "center",
                display: "flex"
            },
            children: [{
                    element: "div",
                    style: {
                        textAlign: "center",
                        lineHeight: "32px",
                        backgroundColor: "#339af0",
                        width: "100%",
                        height: "32px",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        fontWeight: "bold",
                        color: "white",
                    },
                    textContent: "Project Details"
                }, {
                    element: "div",
                    style: {
                        width: "100%",
                        height: "calc(100% - 32px)",
                        overflowY: "scroll",
                        overflowX: "none",
                        borderRadius: "8px",
                        position: "absolute",
                        top: "32px",
                        left: "0"
                    },
                    children: [{
                            element: "button",
                            className: "buttonBlue",
                            gid: "closeDetailsButton",
                            textContent: "Close"
                        }, {
                            element: "br"
                        }, {
                            element: "span",
                            textContent: "Details:",
                            style: {
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center"
                            }
                        }, {
                            element: "div",
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: [{
                                    element: "textarea",
                                    gid: "discription",
                                    className: "gid_discription"
                                }
                            ]
                        }
                    ]
                }
            ]
        }, {
            element: "div",
            style: {
                top: "0",
                left: "0",
                position: "absolute",
                width: "100%",
                height: "100vh",
                backgroundColor: "#339af0",
                opacity: "0.5"
            }
        },
    ]
}

//menu bar separator:
var menuBarSep = {
    element: "p",
    className: "separatorBarMenu",
    style: {
        float: "left",
        fontSize: "32px",
        marginLeft: "10px",
        marginTop: "5px"
    },
    textContent: "|"
};

//main menu items:

var mainMenuItems = [{
        element: "img",
        className: "logo",
        width: 100,
        height: 27,
        style: {
            float: "left"
        },
        src: "static/logo.png"
    }, {
        element: "p",
        className: "main_menu_item main_menu_item_p",
        title: "Start over and create a new project.",
        gid: "New_Game",
        textContent: "New"
    }, {
        element: "p",
        className: "main_menu_item main_menu_item_p",
        title: "Save your project to be edited later.",
        textContent: "Save",
        onclick: "save();"
    }, {
        element: "p",
        className: "main_menu_item main_menu_item_p",
        title: "Load your project so it can be edited.",
        textContent: "Load",
        onclick: "load();"
    },
    menuBarSep, {
        element: "input",
        type: "text",
        className: "gid_gameTitle",
        gid: "gameTitle",
        title: "Your Games Title Goes Here",
        value: "Untitled Game"
    },
    menuBarSep, {
        element: "button",
        style: {
            float: "left",
        },
        gid: "details",
        textContent: "Details",
        className: "buttonBlue menuButton"
    }
];

//game area HTML:
var gameAreaHtmlJson = {
    element: "div",
    gid: "gameArea",
    className: "gid_gameArea",
    style: {
        backgroundColor: "#000000"
    },
    children: [{
            element: "div",
            style: {
                backgroundColor: "#e9ecef",
                borderRadius: "8px",
                width: "100%"
            },
            children: [{
                    element: "button",
                    gid: "startGameButton",
                    className: "playerButton",
                    title: "Go",
                    children: [{
                            element: "img",
                            src: "static/player/play-button.png",
                            height: 20
                        }
                    ]
                }, {
                    element: "button",
                    gid: "stopGameButton",
                    className: "playerButton",
                    title: "Stop",
                    children: [{
                            element: "img",
                            src: "static/player/stop-button.png",
                            height: 20
                        }
                    ]
                }, {
                    element: "button",
                    gid: "toggleFullscreenButton",
                    className: "playerButton",
                    title: "Toggle Full Screen.",
                    style: {
                        position: "absolute",
                        top: "0",
                        right: "0",
                        marginRight: "0px"
                    },
                    children: [{
                            element: "img",
                            src: "static/player/fullscreen-button.png",
                            height: 20,
                            gid: "fullscreenButtonImage"
                        }
                    ]
                },

            ]
        }, {
            element: "center",
			style:{
				height:"360px"
			},
            children: [{
                    element: "canvas",
                    gid: "gameScreen",
                    style: {
                        imageRendering: "pixelated",
                    },
                    width: 600,
                    height: 360
                }
            ]
        }
    ]
};

//dialog box HTML:

var dialogBox = {
    element: "div",
    children: [{
            element: "div",
            className: "dialog_background",
            gid: "dialogBackground"
        }, {
            element: "div",
            className: "dialog_box",
            gid: "dialogBox",
            hidden: "true",
            children: [{
                    element: "div",
                    className: "dialog_box_top",
                    children: [{
                            element: "center",
                            children: [{
                                    element: "h4",
                                    style: {
                                        marginLeft: "4px"
                                    }
                                }
                            ]
                        }
                    ]
                }, {
                    element: "br"
                }, {
                    element: "center",
                    children: [{
                            element: "h1",
                            gid: "dialogText"
                        }, {
                            element: "br"
                        }, {
                            element: "h1",
                            gid: "dialogName"
                        }, {
                            element: "input",
                            gid: "dialogInput",
                            style: {
                                outline: "none",
                                width: "90%",
                                height: "13px"
                            },
                            type: "text",
                            hidden: true
                        }, {
                            element: "button",
                            gid: "dialogButtonOk",
                            className: "buttonBlue",
                            style: {
                                width: "60px"
                            },
                            textContent: "OK"
                        }, {
                            element: "button",
                            gid: "dialogButtonCancel",
                            className: "buttonBlue",
                            style: {
                                width: "60px"
                            },
                            textContent: "Cancel"
                        }
                    ]
                }
            ]
        }
    ]
};

//left pane HTML:

var leftPane = {
    element: "div",
    gid: "leftPane",
    className: "gid_leftPane",
    children: [
        //tabs:
        {
            element: "div",
            style: {
                float: "left"
            },
            children: [{
                    element: "button",
                    gid: "codeTab",
                    className: "blueTab",
                    children: [{
                            element: "img",
                            src: "static/tabs/code.png",
                            style: {
                                marginRight: "5px",
                                marginTop: "10.7px"
                            },
                            height: "13"
                        }, {
                            element: "span",
                            textContent: "Code"
                        }
                    ]
                }, {
                    element: "button",
                    gid: "assetsTab",
                    className: "blueTab",
                    children: [{
                            element: "img",
                            src: "static/tabs/code.png",
                            style: {
                                marginRight: "5px",
                                marginTop: "10.7px"
                            },
                            height: "13"
                        }, {
                            element: "span",
                            textContent: "Assets"
                        }
                    ]
                }, {
                    element: "button",
                    gid: "consoleTab",
                    className: "blueTab",
                    children: [{
                            element: "img",
                            src: "static/tabs/code.png",
                            style: {
                                marginRight: "5px",
                                marginTop: "10.7px"
                            },
                            height: "13"
                        }, {
                            element: "span",
                            textContent: "Console"
                        }
                    ]
                },
            ]
        },
        //blockly area:
        {
            element: "div",
            gid: "blocklyArea",
            className: "gid_blocklyArea",
            children: [{
                    element: "div",
                    gid: "blocklyDiv",
                    className: "gid_blocklyDiv"
                }
            ]
        },
        //file container (assets window):
        {
            element: "div",
            hidden: "true",
            gid: "filecontain",
            className: "gid_filecontain",
            children: [{
                    element: "input",
                    hidden: "true",
                    type: "file",
                    gid: "resourceupload"
                }, {
                    element: "button",
                    type: "file",
                    className: "buttonBlue",
                    textContent: "Add Asset",
                    gid: "addAssetButton"
                }, {
                    element: "div",
                    className: "gid_files",
                    gid: "files"
                }
            ]
        },
        //console container (console window):
        {
            element: "div",
            hidden: "true",
            gid: "conscontain",
            className: "gid_conscontain",
            children: [{
                    element: "button",
                    gid: "clearConsoleButton",
                    className: "buttonBlue",
                    textContent: "Clear"
                }, {
                    element: "div",
                    className: "gid_console",
                    gid: "console"
                }
            ]
        }
    ]
};

//right pane HTML:

var rightPane = {
    element: "div",
    className: "right",
    children: [
        gameAreaHtmlJson, {
            element: "p",
            gid: "testPos",
            style: {
                textAlign: "right",
                fontSize: "8px",
                marginTop: "2px"
            }
        }
    ]
};

//loading screen html:

var loadingScreen = {
    element: "div",
    gid: "loadingscreen",
    className: "gid_loadingscreen",
    style: {
        zIndex: "1000000000000000000000",
    },
    children: [{
            element: "center",
            className: "loadingscreen_center_text",
            children: [{
                    element: "p",
                    className: "loadingscreen_text",
                    gid: "LOADINGSCREENTEXT"
                }, {
                    element: "h1",
                    style: {
                        color: "white"
                    },
                    gid: "loadingScreenHeader",
                    textContent: "Gvbvdxx Game Maker 2 Is loading"
                }, {
                    element: "img",
                    className: "loading",
                    src: "static/loading.png"
                }, {
                    element: "br"
                }, {
                    element: "b",
                    gid: "filesLoadedValue",
                    hidden: "true",
                    style: {
                        color: "white"
                    }
                }, {
                    element: "br"
                }, {
                    element: "progress",
                    gid: "filesLoaded",
                    hidden: "true",
                    style: {
                        width: "450px",
                        height: "35px"
                    }
                }
            ]
        }
    ]
};

var html = elements.createElementsFromJSON([
            ///////////////////////////////////////
            //Don't know what this is for.
            {
                element: "div",
                gid: "background",
                style: {
                    width: "100%",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                }
            },
            /////////////////////////////////////////////////
            //Tool box for block based coding.
            {
                element: "xml",
                gid: "toolbox",
                hidden: true
            },
            /////////////////////////////////////////////////
            //Loading Screen.
            loadingScreen,
            /////////////////////////////////////////////
            //Main Menu
            {
                element: "div",
                gid: "main_menu",
                className: "gid_main_menu",
                children: mainMenuItems
            },
            /////////////////////////////////////////////
            //Left Pane
            leftPane,
            /////////////////////////////////////////////
            //Right Pane
            rightPane,
            /////////////////////////////////////////////
            //Game file loader.
            {
                element: "input",
                hidden: "true",
                type: "file",
                gid: "gameFileUpload",
                accept: ".ggm2g"
            },
            /////////////////////////////////////////////
            //Dialog Box
            dialogBox,
            /////////////////////////////////////////////
            //Project Details
            projectDetails
        ]);

elements.getGPId("details").onclick = function () {
    elements.getGPId("projectDetails").hidden = false;
};
elements.getGPId("closeDetailsButton").onclick = function () {
    elements.getGPId("projectDetails").hidden = true;
};
elements.getGPId("clearConsoleButton").onclick = function () {
    elements.getGPId("console").innerHTML = "";
};
elements.getGPId("addAssetButton").onclick = function () {
    elements.getGPId('resourceupload').click();
};
elements.getGPId("startGameButton").onclick = function () {
    vm.start();
};
elements.getGPId("stopGameButton").onclick = function () {
    vm.stop();
};

module.exports = html;
