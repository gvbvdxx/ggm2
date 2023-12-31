//We are doing some stuff to make the desktop version more reliable.
var console = require("log");

var nodeRequire = window.require; //basicly the real node js require function, from the desktop version.

var remote = nodeRequire("@electron/remote"); //Get out remote access to the app.

var win = remote.getCurrentWindow(); //The browser window.

var dialog = remote.dialog;

//First since the original display dialog that shows, is disabled on desktop,
//we will replace it with an electron friendly verison of it.

//Stack Overflow helped me with this peice of code here.
//Basicly asks if you want to close the window, when changes are done, and not saved.
var hasConfirmedClose = false;
async function handleClose() {
	var message = await dialog.showMessageBox(win,{
		type: 'question',
		buttons: ['Yes', 'No'],
		title: 'Confirm',
		message: 'Are you sure you want to quit?\nYour changes may not be saved.'
	});
	if (message.response == 0) {
		window.onbeforeunload = null;
		win.close();
	}
}
setInterval(() => {
	window.onbeforeunload = (event) => {
		if (window.showSaveDialog) {
			handleClose();
			event.preventDefault();
			return "Close Prevented";
		}
	};
});

