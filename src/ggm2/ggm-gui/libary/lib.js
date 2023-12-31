(function () {
//DO NOT USE, UNUSED AND OLD
window.libary = [
];
var index = 0;
while (index < libary.length) {
	var div = document.createElement("div");
	
	div.setAttribute("class","libary_item");
	var src = window.getDirectory().gui+"/libary/"+libary[index].name;
	var name = libary[index].name.split(".")[0];
	div.style.float = "left";
	if (libary[index].type == "audio") {
		div.innerHTML = `<p>${name}:</p><audio controls src="${src}"></audio>
		<br><a download target="_blank" href="${src}"><button class="buttonBlue" style="margin-left:0px;margin-top:0px;">download</button></a>
		`;
	}
	if (libary[index].type == "image") {
		div.innerHTML = `<p>${name}:</p><br><img src="${src}" style="image-rendering:pixelated;" width=190 height=190>
		<br><a download target="_blank" href="${src}"><button class="buttonBlue" style="margin-left:0px;margin-top:0px;">download</button></a>
		`;
	}
	document.getElementById('libarySelection').appendChild(div);
	index += 1;
}
})();