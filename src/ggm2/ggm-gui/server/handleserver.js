//this is responsable for the desktop version of the upload to website feature
async function waitForServerScriptDownload() {
	console.log("Downloading serverscript...");
	var script = document.createElement("script");
	script.src = "https://ggm2community.glitch.me/servers.js"; //link to server scripts
	return new Promise((resolve,reject) => {
		script.onload = resolve;
		script.onerror = reject;
	})
}
async function readServerFileAsync(p) {
	return new Promise((r) => {
		servers.readFile(p,r);
	})
}
async function saveServerFileAsync(p,f) {
	return new Promise((r) => {
		servers.readFile(p,f,r);
	})
}
async function handleUploadData(username,password) {
	//keep some json data of the project.
	var projectData = JSON.parse(gui.editorToJsonText());
	projectData.username = username;//so ggm2 community knows who's project it is, only giving edit access to them.
	projectData.thumb = null;//ggm2 used to have thumbanials for the explore page, but then removed.
	//ggm2's userdata database part is not "that" secure
	//just check and make sure username and password are correct
	
	
	await waitForServerScriptDownload(); //download the server script.
	//let me explain how ggm2community's database works. (for creating new project)
	//reading stuff to then apply when uploading.
	console.log("Getting project id stuff from ggm2commuity...");
	var latestID = await readServerFileAsync("ggm-community-accountid-latest-id.txt"); //ggm2 reads from this file to get the latest id for the project, and changes it by one for every project created after it.
	var projectId = Number(latestID) + 1; //turn it into a number than add one
	//save a new project with the parsed id
	await saveServerFileAsync("ggm-community-accountid-project-" + projectId + ".ggm2gserver")
}