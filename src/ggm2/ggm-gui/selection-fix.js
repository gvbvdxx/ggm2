function patchSelectionBug(elm) {
	for (var child of elm.children) {
		if (!(child.contentEditable == "inherit")) {
			child.onselectstart = function (e) {return true;};
			child.ondragstart = function (e) {return true;};
			child.onselect = function (e) {return true;};
		} else {
			child.onselectstart = function (e) {
				return false;
			};
			child.ondragstart = function (e) {
				return false;
			};
			child.onselect = function (e) {
				return false;
			};
			patchSelectionBug(child);
		}
	}
}

patchSelectionBug(document.body);
