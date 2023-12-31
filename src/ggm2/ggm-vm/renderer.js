var console = require("log");
window.renderer = {
	canvas: null,
	bg: document.createElement("img"),
	backgroundImg:null,
	getUserMedia: function (a) {
	    return new Promise((resolve, reject) => {
	        navigator.getUserMedia(a, resolve, ()=>{resolve("CamDenied");});
	    });
	},
	camcanvas:document.createElement("canvas"),
	camcontext:null,
	camvid:document.createElement("video"),
	camrun:false,
	startCameraStream: async function () {
		if (!(this.camrun)) {
			//not to creep out the user from thinking that they are trying to get spyed on...
			var stream = await this.getUserMedia({
				video: true,
				audio: true
			});
			if (stream == "CamDenied") {
				return; //denied access (do they think that they are trying to get spyed on?)
			}
			//ok! we got access, so now we need to use it!
			this.camstream = stream;
			this.camvid.srcObject = stream;
			this.camcanvas.width = this.camvid.width;
			this.camcanvas.height = this.camvid.width;
			this.camrun = true;
			var audioContext = window.vm.audioEngine.context;
			var analyser = audioContext.createAnalyser();
			var microphone = audioContext.createMediaStreamSource(stream);

			analyser.smoothingTimeConstant = 0.8;
			analyser.fftSize = 1024;
			var rend = this;
			microphone.connect(analyser);
			this.caminterval = setInterval(function () {
				var array = new Uint8Array(analyser.frequencyBinCount);
				analyser.getByteFrequencyData(array);
				var arraySum = array.reduce((a, value) => a + value, 0);
				var average = arraySum / array.length;
				rend.micvol = average/200*100;
				// colorPids(average);
			},1);
		}
	},
	stopCameraStream: async function () {
		//quick check to see if we are running the camrea
		if (this.camrun) {
			this.camrun = false; //stop rendering the camrea!
			//stop recording video!
			renderer.camstream.getVideoTracks().forEach((t) => {
				t.stop();
			});
			//stop recording audio!
			renderer.camstream.getAudioTracks().forEach((t) => {
				t.stop();
			});
			//end video!
			this.camvid.pause();
			this.camvid.srcObject = null;
			this.camstream = null;
			clearInterval(this.caminterval);
		}
	},
	start: function () {
		this.context = this.canvas.getContext("2d");
		this.context.globalAlpha = 1;
		this.context.strokeStyle = this.color;
		this.context.fillStyle = this.color;
		this.context.beginPath();
		this.context.fillRect(0, 0, this.canvas.width + 2, this.canvas.height + 2);
		this.context.stroke();
		this.test=0;
		this.canvas.style.imageRendering = "Pixelated";
	},
	camghost: 0,
	tick: function (sprites,monitors) {
		this.events.tick.forEach((funct) => {
			try{
				funct();
			}catch(e){console.error("renderer ran event, but an error was thrown.",e)}
		});
		this.context.globalAlpha = 1;
		this.context.fillStyle = this.color;
		this.context.strokeStyle = this.color;
		this.context.beginPath();
		this.context.fillRect(0, 0, this.canvas.width + 2, this.canvas.height + 2);
		this.context.stroke();
		this.context.webkitImageSmoothingEnabled = false;
		this.context.mozImageSmoothingEnabled = false;
		this.context.imageSmoothingEnabled = false;
		if (this.camrun) {
			this.camcontext.globalAlpha = 1;
			this.camcontext.drawImage(this.camvid,0,0,this.camcanvas.width,this.camcanvas.height);
			this.context.globalAlpha = 1 - (this.camghost / 100);
			this.context.drawImage(this.camvid,0,0,this.canvas.width,this.canvas.height);
			this.context.globalAlpha = 1;
		}
		try{
			this.context.drawImage(this.bg,0,0,this.canvas.width,this.canvas.height);
		}catch(e){}
		for (var i in sprites) {
			sprites[i];
			this._drawSprite(sprites[i]);
		}
		for (var i in monitors) {
			monitors[i];
			this._drawMonitor(monitors[i]);
		}
		this.events.ticked.forEach((funct) => {
			try{
				funct();
			}catch(e){console.error("renderer ran event, but an error was thrown.",e)}
		});
	},
	events:{
		beforedraw:[],
		afterdraw:[],
		drawsprite:[],
		beforemonitordraw:[],
		aftermonitordraw:[],
		tick:[],
		ticked:[]
	},
	addEventListener: function (name,funct) {
		if (this.events[name.toLowerCase()]) {
			this.events[name.toLowerCase()].push(funct);
		} else {
			console.warn("renderer tried adding event \""+name+"\" but cant find it. check the spelling and try again.");
		}
	},
	width:600,
	height:360,
	getScaleInfo: function (x,y,width,height) {
		var sw = this.canvas.width/this.width;
		var sh = this.canvas.height/this.height;
		return {
			x:sw*x,
			y:sh*y,
			w:sw*width,
			h:sh*height,
			scalewidth:sw,
			scaleheight:sh
		};
	},
	drawImage: function (img,x,y,w,h) {
		var si = this.getScaleInfo(x,y,w,h);
		this.context.drawImage(img,si.x,si.y,si.w,si.h);
	},
	translate: function (x,y) {
		var si = this.getScaleInfo(x,y,0,0);
		this.context.translate(si.x,si.y);
	},
	_drawSprite: function (json) {
		this.events.beforedraw.forEach((funct) => {
			try{
				funct();
			}catch(e){console.error("renderer ran event, but an error was thrown.",e)}
		});
		this.context.save();
		//use the try to not throw an error when renderering failed, so the renderer keeps ticking.
		try{
			this.events.drawsprite.forEach((funct) => {
				try{
					funct(json);
				}catch(e){console.error("renderer ran event, but an error was thrown.",e)}
			});
			var __calculated_x = json.x;
			var __calculated_y = 0 - json.y;
			var ghost = json.ghost;
			if (ghost > 100) {
				ghost = 100;
			}
			if (ghost < 0) {
				ghost = 0;
			}
			this.context.globalAlpha = 1 - (ghost / 100);
			//this.context.translate(this.canvas.width/2+json.x+__calculated_x, this.canvas.height/2+__calculated_y);
			this.translate(this.width/2+json.x+__calculated_x, this.height/2+__calculated_y); //this moves the image to the sprite position.
			this.context.rotate((json.direction - 90)*Math.PI/180);
			if (json.flip == "hor") {
				this.context.scale(-1,1);
			} else {
				if (json.flip == "ver") {
					this.context.scale(1,-1);
				}
			}
			this.drawImage(json.image, json.width/-2, json.height/-2, json.width, json.height); //draw the image and offset it so it rotates in the center.
		}catch(e){}
		this.context.restore();
		this.events.afterdraw.forEach((funct) => {
			try{
				funct();
			}catch(e){console.error("renderer ran event, but an error was thrown.",e)}
		});
	},
	_drawMonitor: function (json) {
		//Scale Update!!
		//this also fixes some bugs when rendering vars
		this.events.beforemonitordraw.forEach((funct) => {
			try{
				funct();
			}catch(e){console.error("renderer ran event, but an error was thrown.",e)}
		});
		this.context.save();
		//use the try to not throw an error when renderering failed, so the renderer keeps ticking.
		try{
			if (json.visible) {
				this.context.globalAlpha = 1;
				this.context.translate(0,0);
				var textscale = this.getScaleInfo().scalewidth;
				renderer.context.font = 'bold '+(15*this.getScaleInfo().scalewidth)+'px arial';
				var textWidth = renderer.context.measureText(json.value).width/textscale;
				var textNameWidth = renderer.context.measureText(json.name).width/textscale;
				this.context.globalAlpha = 1;
				renderer.context.fillStyle = "#868e96";
				renderer.fillRect(json.x-2,json.y-2,24+textNameWidth+textWidth,24);
				renderer.context.fillStyle = "#ced4da";
				renderer.fillRect(json.x,json.y,20+textNameWidth+textWidth,20);	
				renderer.context.fillStyle = "#ff8c00";
				renderer.fillRect(json.x+textNameWidth+10,json.y+3,5+textWidth,15);
				renderer.context.fillStyle = "white";
				renderer.fillText(json.value, json.x+textNameWidth+10,json.y + 15);
				renderer.context.fillStyle = "black";
				renderer.fillText(json.name, json.x + 6,json.y + 15);
				return {
					width:74+textNameWidth+textWidth,
					height:24,
					x:json.x,
					y:json.y
				};
			}
		}catch(e){console.error(e);}
		this.context.restore();
		this.events.aftermonitordraw.forEach((funct) => {
			try{
				funct();
			}catch(e){console.error("renderer ran event, but an error was thrown.",e)}
		});
	},
	fillRect: function (x,y,w,h) {
		var si = this.getScaleInfo(x,y,w,h);
		this.context.fillRect(si.x,si.y,si.w,si.h);
	},
	fillText: function (txt,x,y) {
		var si = this.getScaleInfo(x,y,0,0);
		this.context.fillText(txt,si.x,si.y);
	},
	color:"#ffffff",
	getColorEffect: function (img,r,g,b) {
		try{
			var cvs = document.createElement("canvas");
			var ctx = cvs.getContext("2d");
			cvs.width = img.width;
			cvs.height = img.height;
			ctx.drawImage(img,0,0,cvs.width,cvs.height);
			var imgdata = ctx.getImageData(0,0,cvs.width,cvs.height);
			var imageData = imgdata.data;
			for (let i = 0; i < imageData.length; i += 4) {
				imageData[i] += r;
				imageData[i+1] += g;
				imageData[i+2] += g;
			}
			ctx.putImageData(imgdata,0,0);
			return cvs.toDataURL();
		}catch(e){console.error(e);}
	},
	getRandomColorEffect: function (img,randomness) {
		try{
			var cvs = document.createElement("canvas");
			var ctx = cvs.getContext("2d");
			cvs.width = img.width;
			cvs.height = img.height;
			ctx.drawImage(img,0,0,cvs.width,cvs.height);
			var imgdata = ctx.getImageData(0,0,cvs.width,cvs.height);
			var imageData = imgdata.data;
			for (let i = 0; i < imageData.length; i += 4) {
				imageData[i] += Math.random()*randomness;
				imageData[i+1] += Math.random()*randomness;
				imageData[i+2] += Math.random()*randomness;
			}
			ctx.putImageData(imgdata,0,0);
			return cvs.toDataURL();
		}catch(e){console.error(e);}
	},
	getGlitchColorEffect: function (img,randomness) {
		try{
			var cvs = document.createElement("canvas");
			var ctx = cvs.getContext("2d");
			cvs.width = img.width;
			cvs.height = img.height;
			ctx.drawImage(img,0,0,cvs.width,cvs.height);
			var imgdata = ctx.getImageData(0,0,cvs.width,cvs.height);
			var imageData = imgdata.data;
			for (let i = 0; i < imageData.length; i += 4) {
				imageData[i] = Math.random()*randomness;
				imageData[i+1] = Math.random()*randomness;
				imageData[i+2] = Math.random()*randomness;
			}
			ctx.putImageData(imgdata,0,0);
			return cvs.toDataURL();
		}catch(e){console.error(e);}
	},
	getInvertColorEffect: function (img) {
		try{
			var cvs = document.createElement("canvas");
			var ctx = cvs.getContext("2d");
			cvs.width = img.width;
			cvs.height = img.height;
			ctx.drawImage(img,0,0,cvs.width,cvs.height);
			var imgdata = ctx.getImageData(0,0,cvs.width,cvs.height);
			var imageData = imgdata.data;
			for (let i = 0; i < imageData.length; i += 4) {
				var r = imageData[i];
				var g = imageData[i+1];
				var b = imageData[i+2];
				imageData[i] = b;
				imageData[i+1] = g;
				imageData[i+2] = r;
			}
			ctx.putImageData(imgdata,0,0);
			return cvs.toDataURL();
		}catch(e){console.error(e);}
	},
	getInvertColorEffect: function (img) {
		try{
			var cvs = document.createElement("canvas");
			var ctx = cvs.getContext("2d");
			cvs.width = img.width;
			cvs.height = img.height;
			ctx.drawImage(img,0,0,cvs.width,cvs.height);
			var imgdata = ctx.getImageData(0,0,cvs.width,cvs.height);
			var imageData = imgdata.data;
			for (let i = 0; i < imageData.length; i += 4) {
				var r = imageData[i];
				var g = imageData[i+1];
				var b = imageData[i+2];
				imageData[i] = b;
				imageData[i+1] = g;
				imageData[i+2] = r;
			}
			ctx.putImageData(imgdata,0,0);
			return cvs.toDataURL();
		}catch(e){console.error(e);}
	},
	componentToHex:function (c) {
	  var hex = c.toString(16);
	  return hex.length == 1 ? "0" + hex : hex;
	},
	rgbToHex:function (r, g, b) {
	  return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
	},
	hexToRgb:function (hex) {
	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    return result ? {
	        r: parseInt(result[1], 16),
	        g: parseInt(result[2], 16),
	        b: parseInt(result[3], 16)
	    }
	     : null;
	},
	getColorAtPos: function (x,y) {
		var __calculated_x = x;
		var __calculated_y = 0 - y;
		var pos = this.getScaleInfo(this.width/2+x+__calculated_x, this.height/2+__calculated_y,0,0);
		var c = this.context.getImageData(pos.x, pos.y, 1, 1).data;
		return this.rgbToHex(c[0],c[1],c[2]);
	},
	changeColorInImage: function (img,find,replace) {
		try{
			var cvs = document.createElement("canvas");
			var ctx = cvs.getContext("2d");
			cvs.width = img.width;
			cvs.height = img.height;
			ctx.drawImage(img,0,0,cvs.width,cvs.height);
			var rgbFind = this.hexToRgb(find);
			var rgbReplace = this.hexToRgb(replace);
			var imgdata = ctx.getImageData(0,0,cvs.width,cvs.height);
			var imageData = imgdata.data;
			for (let i = 0; i < imageData.length; i += 4) {
				var r = imageData[i];
				var g = imageData[i+1];
				var b = imageData[i+2];
				if (rgbFind.r = r && rgbFind.g == g && rgbFind.b == b) {
					//found an match!
					imageData[i] = rgbReplace.r;
					imageData[i+1] = rgbReplace.g;
					imageData[i+2] = rgbReplace.b;
				}
			}
			ctx.putImageData(imgdata,0,0);
			return cvs.toDataURL();
		}catch(e){console.error(e);}
	},
	changeColorsInImage: function (img,findreplaceArray) {
		try{
			var cvs = document.createElement("canvas");
			var ctx = cvs.getContext("2d");
			cvs.width = img.width;
			cvs.height = img.height;
			ctx.drawImage(img,0,0,cvs.width,cvs.height);
			var imgdata = ctx.getImageData(0,0,cvs.width,cvs.height);
			var imageData = imgdata.data;
			for (var index2 = 0; index2 < findreplaceArray.length; index2 += 2) {
				var rgbFind = this.hexToRgb(findreplaceArray[index2]);
				var rgbReplace = this.hexToRgb(findreplaceArray[index2+1]);

				for (var i = 0; i < imageData.length; i += 4) {
					var r = imageData[i];
					var g = imageData[i+1];
					var b = imageData[i+2];
					if (rgbFind.r = r && rgbFind.g == g && rgbFind.b == b) {
						//found an match!
						imageData[i] = rgbReplace.r;
						imageData[i+1] = rgbReplace.g;
						imageData[i+2] = rgbReplace.b;
					}
				}
			}

			ctx.putImageData(imgdata,0,0);
			return cvs.toDataURL();
		}catch(e){console.error(e);}
	}
};
renderer.camcontext = renderer.camcanvas.getContext("2d");
setInterval(() => {
	if (renderer.camrun) {
		renderer.camvid.play(); //start the recording!
		renderer.camvid.volume = 0; //do not echo!
		renderer.camcanvas.width = renderer.camvid.videoWidth;
		renderer.camcanvas.height = renderer.camvid.videoHeight;
	} else {
		renderer.camvid.pause(); //stop the recording
	}
},10)
