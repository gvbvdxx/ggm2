var console = require("log");

//Checks for desktop support.
function isDesktop() {
	//Let me explain, since ggm2 is going to have desktop support, it will need to check for the support,
	//this way, i can easily add build files to GGM2 desktop, and I dont need to change anything to get
	//the original builds.
	
	//since GGM2 desktop has global node JS variables defined, I can just check for them.
	//Also handle errors if there is no @electron/remote module installed.
	if (window.require && window.process) {
		try{
			//Yes! found The @electron/remote module module!
			return true;
		}catch(e){
			//Welp no @electron/remote module, too bad!
			//Log the errors.
			console.log("Could not find @electron/remote? Is it installed properly? Error: "+e);
			return false; 
		}
	} else {
		//Welp, we are running it in a web browser.
		console.log("No GGM2 Desktop detected, continuing.");
		return false;
	}
}

module.exports = isDesktop;