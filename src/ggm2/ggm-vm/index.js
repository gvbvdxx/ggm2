var console = require("log");
var ggm2path = require("src/paths.js");
var Sprite = require("src/"+ggm2path+"/ggm-vm/classes/sprite.js");
window.vm = {
	daysSince2000:function () {
		const msPerDay = 24 * 60 * 60 * 1000;
		const start = new Date(2000, 0, 1); // Months are 0-indexed.
		const today = new Date();
		const dstAdjust = today.getTimezoneOffset() - start.getTimezoneOffset();
		let mSecsSinceStart = today.valueOf() - start.valueOf();
		mSecsSinceStart += ((today.getTimezoneOffset() - dstAdjust) * 60 * 1000);
		return mSecsSinceStart / msPerDay;
	},
	messageData:[],
	idcounter:0,
	startTime:0,
	resetTimer:() => {
		vm.startTime = vm.daysSince2000()*86400;
		vm.project.timer = 0;
	},
	control: {
		start:async function (a) {
			if (vm.audioEngine) {
				if (vm.renderer) {
					for (var name of vm.project.resources) {
						if (vm.project.resources[name].type == "audio") {
							await vm.audioEngine.addToPreload(vm.project.resources[name].data);
						}
					}
					for (var m of vm.messageData) {
						vm.messages[m] = [];
					}
					vm.control.stop();
					vm.resetTimer();
					vm.control.running = true;
					vm.idcounter = 0;
					vm.project.monitors = [];
					window.vm.renderer.camghost = 0;
					window.vm.renderer.bg.src = "";
					try{
						eval("(async function () {\ntry{\n"+vm.code+"\n} catch (e) {\nvm.console.error(e);\n}\n})();");
					}catch(e){
						vm.console.error("Error in script:"+e);
					}
				} else {
					throw Error("Renderer Must Be Attached");
				}
			} else {
				throw Error("AudioEngine Must Be Attached");
			}
		},
		stop: function () {
 			for (var i in vm.project.timeouts) {
				clearTimeout(vm.project.timeouts[i]);
			}
			vm.project.timeouts = [];
			vm.idcounter = 0;
			vm.control.running = false;
			vm.project.sprites = [];
			vm.project.events.tick = [];
			vm.project.sprites = [];
			vm.project.keysPressed = [];
			vm.project.keyListeners = {};
			vm.audioEngine.stop();
			try{
				window.vm.onstop();
			}catch(e){console.error(e);}
		},
		running:false
	},
	code: "",
	renderer:null,
	attachRenderer:function (a) {
		vm.renderer = a;
		vm.renderer.start();
		return a;
	},
	attachAudioEngine:function (a) {
		vm.audioEngine = a;
		return a;
	},
	setCompiadiblityMode:function (a) {
		this.compiadiblityMode = a;
	},
	compiadiblityMode: false,
	messages:{},
	project: {
		keyListeners:{},
		mouseDown: false,
		mouseX:0,
		mouseY:0,
		keysPressed:[],
		sprites:[],
		events: {
			tick: []
		},
		monitors:[],
		resources:[],
		timer:0,
		timeouts:[],
		block:{
            cloudVarSet:function(name,value) {
                try{
                    if (vm.cloudAPI) {
                        vm.cloudAPI.updateVariable(name,value);
                    }
                }catch(e){vm.console.error("Error in script:"+e);}
            },
            cloudVarGet:function(name) {
                try{
                    if (vm.cloudAPI) {
                        var realValue = vm.cloudAPI.getVariable(name);
                        //so users can understand the blocks easier
                        if (Number(realValue)) {
                            realValue = Number(realValue);
                        }
                        return realValue;
                    }
                }catch(e){vm.console.error("Error in script:"+e);}
            },
			tickAsync:function () {
				return new Promise((a) => {
					setTimeout(a,1);
				})
			},
			waitAsync:function (s) {
				return new Promise((a) => {
					vm.project.timeouts.push(setTimeout(a,s*1000));
				})
			},
			moveSteps:function (sprite,steps) {
				try{
				var realsteps = steps;
				var realdir = 90-sprite.direction;
				var xBy = Math.cos(realdir * (Math.PI/180))*realsteps;
				var yBy = Math.sin(realdir * (Math.PI/180))*realsteps;
				var realxby = xBy + xBy;
				sprite.x = sprite.x + realxby;
				sprite.y = sprite.y + (yBy+yBy);
				}catch(e){vm.console.error("Error in script:"+e);}
			},
			deleteList:function (array,number) {
				try{
				delete array[number];
				var index = 0;
				var genaratedArray = [];
				while (array.length > index) {
					if (!(array[index] == undefined)) {
						genaratedArray.push(array[index]);
					}
					index += 1;
				}
				return genaratedArray;
				}catch(e){vm.console.error("Error in script:"+e);}
			},
			makeSprite:function () {
				try{
				vm.idcounter += 1;
				var spr = new Sprite(vm.idcounter);
				this.showSprite(spr);
				return spr;
				try{
					window.vm.onspritecreate(spr);
				}catch(e){console.error(e);}
				}catch(e){}

			},
			makeMonitor: function () {
				try{
				var monitor = {
					x:0,
					y:0,
					value:0,
					name:"monitor",
					visible:true,
					clicked: []
				};
				window.vm.project.monitors.push(monitor);
				return monitor;
				}catch(e){vm.console.error("Error in script:"+e);}
			},
			showSprite:function (spr) {
				try{
					this.hideSprite(spr); //ensure there is only one sprite when showing again.
					vm.project.sprites.push(spr);
				}catch(e){vm.console.error("Error in script:"+e);}
			},
			hideSprite:function (spr) {
				try{
				var i = vm.project.sprites.indexOf(spr);
				if (i > -1) {
					vm.project.sprites.splice(i, 1); // 2nd parameter means remove one item only
				}
				}catch(e){}
			},
			cos:function (number) {
				try{
				return Math.cos((number)* (Math.PI/180));
				}catch(e){vm.console.error(e);}
			},
			sin:function (number) {
				try{
				return Math.sin((number)* (Math.PI/180));
				}catch(e){vm.console.error(e);}
			},
			getMoseData:function () {
				try{
				return {
					x:vm.project.mouseX,
					y:vm.project.mouseY,
					down:vm.project.mouseDown
				};
				}catch(e){}
			},
			dataToImg:function (dataURI) {
				try{
				var img = document.createElement("img");
				img.src = dataURI;
				img.setAttribute("style","image-rendering: pixelated;");
				return img;
		}catch(e){}
			},
			random: function (a, b) {
			  if (a > b) {
				// Swap a and b to ensure a is smaller.
				var c = a;
				a = b;
				b = c;
			  }
			  return Math.floor(Math.random() * (b - a + 1) + a);
			},
			isTouching: function (sprite1,sprite2, mode) {
				/*if (sp1.x > sp2.x) {
					var devideNumX = -2;
				} else {
					var devideNumX = 2;
				}
				sp1.x -= sp1.width/devideNumX;
				var res = (
				sp1.x < sp2.x + (sp2.width/1) &&
				sp1.x + (sp1.width/1) > sp2.x &&
				sp1.y < sp2.y + sp2.height &&
				sp1.height + sp1.y > sp2.y
				);
				sp1.x += sp1.width/devideNumX;
				return res;*/
				try{
				return vm.___CHECKCOLLIDE(sprite1,sprite2);
				}catch(e){vm.console.error("Error in script:"+e);}
			},
			getKeyPressed: function (keyname) {
				try{
				if (vm.project.keysPressed[keyname]) {
					return true;
				} else {
					return false;
				}
				}catch(e){}
			},
			wait:function (secs,callback) {
				try{
					/**Update For V1.5.0!
					Fixed A Bug Where If You Stop The Project And Run It,
					All The Waits Will Run If They Are Not Over Yet.
					To Fix This, I Used An clearTimeout() Function For Each One.
					*/
					vm.project.timeouts.push(setTimeout(() => {
						if (window.vm.control.running) {
							callback();
						}
					},secs*1000)); /*1000ms = 1 second*/
				}catch(e){}
			},
			getTouchMouse: function (spr) {
				return window.vm.___CHECKCOLLIDE({x:window.vm.project.mouseX,y:window.vm.project.mouseY,width:1,height:1},spr);
			},
			changeColorEffect:function (img,r,g,b) {
				img.src = window.vm.renderer.getColorEffect(img,r,g,b);
			},
			micVolume:function () {
				if (window.vm.renderer.camrun) {
					return window.vm.renderer.micvol;
				} else {
					return 0;
				}
			},
			openCamera:function () {
				window.vm.renderer.startCameraStream();
			},
			stopCamera:function () {
				window.vm.renderer.stopCameraStream();
			}
		}
	},
	variables:{
		canDrag:false
	},
	vmTick: function () {
		if (vm.control.running) {
			vm.project.timer = (vm.daysSince2000()*86400)-vm.startTime;
			for (var i in vm.project.events.tick) {
				try{
					vm.project.events.tick[i]()
				}catch(e){vm.console.error(e);}
			}
			try{
				vm.renderer.tick(vm.project.sprites,vm.project.monitors);
			}catch(e){}
			this.ticks += 0;
			try{
				window.vm.ontick();
			}catch(e){console.error(e);}
		} else {
			this.ticks = 0;
		}
		window.requestAnimationFrame(vm.vmTick);
	},
	start:function () {
		vm.control.start();
	},
	stop:function () {
		vm.control.stop();
	},
	setMousePos: function (data) {
		this.project.mouseX = data.x;
		this.project.mouseY = data.y;
	},
    setCloudAPI: function(api) {
        this.cloudAPI = api;
    },
	setMouseDown: function (data) {
		if (data == true) {
			for (var i in vm.project.sprites) {
				try{
					if (this.___CHECKCOLLIDE({x:this.project.mouseX,y:this.project.mouseY,width:1,height:1},vm.project.sprites[i])) {
						var currentSprite = vm.project.sprites[i];
						for (var i2 in currentSprite.clicked) {
							try{
								currentSprite.clicked[i2]()
							}catch(e){vm.console.error(e);}
						}
						//console.log("clicked sprite.");
					}
				}catch(e){console.error(e);}
			}
		}
		this.project.mouseDown = data;
	},
	console: {
		log: function (text) {
			console.log("[vm - program]: " + text);
		},
		error: function (text) {
			console.error("[vm - program]: " + text);
			vm.stop();
		},
		clear: function (text) {
			console.clear();
		}
	},
	simulateKey: function (data) {
		if (data.down) {
			this.project.keysPressed[data.key] = true;
			if (this.project.keyListeners[data.key]) {
				this.project.keyListeners[data.key].forEach((func) => {
					func();
				})
			}
		} else {
			this.project.keysPressed[data.key] = false;
		}
	},
	collideWidth:0,
	collideHeight:0,
	___CHECKCOLLIDE:function (spr1,spr2){
		return false;
	},
	collideDiv:document.createElement("div"),
	addEventListener:function (name,eventName) {
		this["on"+name] = eventName;
	},
	ontick: function(){},
	onspritecreate: function(sprite){},
	onstop: function(){},
	__decodeDataBase64URI: function (dataURI) {
		return atob(dataURI.split(";").pop().split(",").pop());
	}
}
vm.___CHECKCOLLIDE = function isCollide(a2, b2) {
	function getRealCanvasPos(x,y,width,height,canvas) {
		var mainX = x-(width/2);
		var mainY = y-(height/2);
		return {
			x:mainX-(canvas.width/2),
			y:mainY-(canvas.height/2)
		};
	}
	var a = {
		width:a2.width/2,
		height:a2.height,
		x:getRealCanvasPos(a2.x,a2.y,a2.width/2,a2.height,vm.renderer.canvas).x,
		y:getRealCanvasPos(a2.x,a2.y,a2.width/2,a2.height,vm.renderer.canvas).y
	};
	var b = {
		width:b2.width/2,
		height:b2.height,
		x:getRealCanvasPos(b2.x,b2.y,b2.width/2,b2.height,vm.renderer.canvas).x,
		y:getRealCanvasPos(b2.x,b2.y,b2.width/2,b2.height,vm.renderer.canvas).y
	};
	var result = (
		a.x + a.width >= b.x &&
		a.x <= b.x + b.width &&
		a.y + a.height >= b.y &&
		a.y <= b.y + b.height
    );
	/*if (a2.image) {
		document.body.appendChild(a2.image);
		a2.image.style.position = 'fixed';
		a2.image.style.top = a2.y+(vm.renderer.canvas.height / 2)+'px';
		a2.image.style.left = a2.x+(vm.renderer.canvas.width / 2)+'px';
		a2.image.width = a2.width;
		a2.image.height = a2.height;
	}
	if (b2.image) {
		document.body.appendChild(b2.image);
		b2.image.style.position = 'fixed';
		b2.image.style.top = b2.y+(vm.renderer.canvas.height / 2)+'px';
		b2.image.style.left = b2.x+(vm.renderer.canvas.width / 2)+'px';
		b2.image.width = b2.width;
		b2.image.height = b2.height;
	}*/
    return result;
};
window.requestAnimationFrame(vm.vmTick);
/*
TEST SCRIPTS:
while in devlopment i ran code to check if everything is working.
basic test:
var sprite = vm.project.block.makeSprite();
sprite.image = document.getElementById("testImage");

hide sprite test:

vm.project.block.hideSprite(sprite);

second sprite test:

var sprite2 = vm.project.block.makeSprite();
sprite2.image = document.getElementById("testImage");

rotating sprite test:
var sprite3 = vm.project.block.makeSprite();
sprite3.image = document.getElementById("testImage");
vm.project.events.tick.push(function () {
	sprite3.direction += 1;
});
*/