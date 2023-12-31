//make it so a dailog will show when the user closes the page


window.showSaveDialog = true;
if (window.useConfirmDialog) {
    setInterval(() => {
		if (window.showSaveDialog && (!window.gui.isDesktopVersion)) {
			window.onbeforeunload = function () {
				return "empty";
			};
		} else {
			window.onbeforeunload = null;
		}
    },1000/60);
}