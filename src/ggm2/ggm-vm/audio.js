window.audioEngine = {
	addToPreload: async function (url) {
		var request = await fetch(url);
		var data = await request.arrayBuffer();
		window.audioEngine.audPreload[url] = window.audioEngine.copyArrayBuffer(window.audioEngine.audPreload[url]);
	},
	audPreload: {},
	copyArrayBuffer: function (src)  {
		var dst = new ArrayBuffer(src.byteLength);
		new Uint8Array(dst).set(new Uint8Array(src));
		return dst;
	},
	sfx:{
		audio:null,
		audioelements:[],
		play:async function (a) {
			/**
			Bug Fix!
			
			fixed the audio bug when playing mutiple sounds, including long ones,
			making it imposible to stop in desktop app.
			
			*/
			window.audioEngine.audioRunning = true;
			if (!(window.audioEngine.audPreload[a])) {
				var request = await fetch(a);
				var data = await request.arrayBuffer();
				window.audioEngine.audPreload[a] = window.audioEngine.copyArrayBuffer(data);
			} else {
				var data = window.audioEngine.copyArrayBuffer(window.audioEngine.audPreload[a]);
			}
			var audioBuffer = await window.audioEngine.decodeAudioDataAsync(data);
			var source = window.audioEngine.context.createBufferSource();
			if (window.audioEngine.audioRunning) {
				source.buffer = audioBuffer;
				this.source = source;
				
				source.connect(window.audioEngine.context.destination);
				source.loop = false;
				source.start();
				window.audioEngine.sources.push(source);
				source.onended = function () {
					var dat = [];
					for (var obj of window.audioEngine.sources) {
						if (!(obj == source)) {
							dat.push(obj);
						}
					}
					window.audioEngine.sources = dat;
				};
			}
/* 			//bug pach starts here
			this.audio.onended = function () {
				delete audioEngine.sfx.audioelements.indexOf(this.audio);
				var allSfx = [];
				for (var i in audioEngine.sfx.audioelements) {
					if (audioEngine.sfx.audioelements) {
						allSfx.push(audioEngine.sfx.audioelements[i]);
					}
				}
				audioEngine.sfx.audioelements = allSfx;
			}; */
		}
	},
	decodeAudioDataAsync: (data) => {
		return new Promise((resolve,reject) => {
			window.audioEngine.context.decodeAudioData(data,resolve,reject);
		})
	},
	sources: [
	
	],
	audioRunning:false,
	bgm:{
		audio:{src:""},
		isPlaying:false,
		running:false,
		stopRunningSource: () => {
			if (this.source) {
				try{
					this.source.stop();
				}catch(e){}
			}
		},
		play:async function () {
			try{
				this.running = true;
				this.isPlaying = false;
				this.stopRunningSource();
				var source = window.audioEngine.context.createBufferSource();
				window.audioEngine.sources.push(source);
				window.audioEngine.audioRunning = true;
				if (!(window.audioEngine.audPreload[this.audio.src])) {
					this.stopRunningSource();
					var request = await fetch(this.audio.src);
					this.stopRunningSource();
					this.isPlaying = false;
					this.stopRunningSource();
					var data = await request.arrayBuffer();
					this.stopRunningSource();
					this.isPlaying = false;
					window.audioEngine.audPreload[this.audio.src] = window.audioEngine.copyArrayBuffer(data);
				} else {
					this.isPlaying = false;
					this.stopRunningSource();
					var data = window.audioEngine.copyArrayBuffer(window.audioEngine.audPreload[this.audio.src]);
					this.isPlaying = false;
					this.stopRunningSource();
				}
				this.isPlaying = false;
				this.stopRunningSource();
				var audioBuffer = await window.audioEngine.decodeAudioDataAsync(data);
				this.stopRunningSource();
				this.isPlaying = false;
				source.buffer = audioBuffer;
				this.isPlaying = false;
				source.connect(window.audioEngine.context.destination);
				source.loop = true;
				this.isPlaying = false;
				if (this.source) {
					try{
						this.source.stop();
					}catch(e){}
				}
				this.source = source;
				if (window.audioEngine.audioRunning) {
					if (!(this.isPlaying)) {
						this.isPlaying = true;
						source.start();
					}
				}
			}catch(e){
				console.warn("[AudioEngine]:error ignored" + e);
			};
		},
		setSrc:function (a) {
			this.audio.src = a;
		}
	},
	audPreload:{
		
	},
	stop:function () {
		try{
		if (this.sfx.audio) {
			this.sfx.audio.pause();
			this.sfx.audio = null;
		}
		this.bgm.running = false;
		this.bgm.isPlaying = false;
		this.audioRunning = false;
		for (var source of this.sources) {
			try{
				source.stop()
			}catch(e){}
		}
		this.sources = [];
		}catch(e){
			console.warn("[AudioEngine]:error ignored" + e);
		};
		vm.betterAudio.stopAllAudios();
	},
	tickAudio:function () {
		//console.log(this.bgm.isPlaying);
		if (window.audioEngine.bgm.isPlaying) {
			//if (!(window.audioEngine.bgm.running)) {
			//	window.audioEngine.bgm.play();
			//}
		} else {
			try{
				window.audioEngine.bgm.running = false;
				window.audioEngine.bgm.source.stop();
			}catch(e){}
		}
	}
}
window.audioEngine.bgm.audio.loop = true;
setInterval(window.audioEngine.tickAudio,1);
window.audioEngine.context = new AudioContext();
setInterval(() => {
	if (!(window.audioEngine.context.state == "running")) {
		window.audioEngine.context = new AudioContext
	}
},10);
/*
the idea was to use context, but scrapped, because of more load lag and how mutch time it takes
window.audioEngine = {
	context:new AudioContext(),
	source: null,
	sources:[],
	apiGetAudio: async (audioBufferData,callback) => {
	  const context = window.audioEngine.context;
		function copy(src)  {
			var dst = new ArrayBuffer(src.byteLength);
			new Uint8Array(dst).set(new Uint8Array(src));
			return dst;
		}
	  context.decodeAudioData(copy(audioBufferData),function (audioBuffer) {
		window.audioEngine.source = context.createBufferSource();
		var source = window.audioEngine.source
		source.buffer = audioBuffer;
		source.connect(context.destination);
		source.start();
		window.audioEngine.sources.push(source);
		source.running = true;
		source.onended = function () {
			if (callback) {
				delete window.audioEngine.sources.indexOf(source);
				var sources = [];
				for (var i in window.audioEngine.sources) {
					if (window.audioEngine.sources[i]){
						sources.push(window.audioEngine.sources[i]);
					}
				}
				window.audioEngine.sources = sources;
				callback(source);
			}
		};
	  });
	},
	sfx:{
		audio:null,
		play:function (a) {
			fetch(a).then((a) => {a.arrayBuffer().then((data) => {
				window.audioEngine.apiGetAudio(data);
			})});
		}
	},
	bgm:{
		audio:"",
		isPlaying:false,
		play:function () {
			console.log("loading audio data")
			fetch(window.audioEngine.bgm.audio).then((data1) => {data1.arrayBuffer().then((data) => {
				console.log("playing audio.");
				window.audioEngine.apiGetAudio(data,function (source) {
					if (source.running) {
						window.audioEngine.bgm.play();
					}
				});
			})});
		},
		pause:function () {
			for (var i in window.audioEngine.sources) {
				try{
					window.audioEngine.sources[i].stop();
					window.audioEngine.sources[i].running = false;
				}catch(e){console.warn(`[AudioEngine]:Failed to stop audio context source: ${e}`);}
			}
		},
		setSrc:function (a) {
			window.audioEngine.bgm.audio = a;
		}
	},
	stop:function () {
		try{
		this.bgm.isPlaying = false;
		}catch(e){
			console.warn("[AudioEngine]:error ignored" + e);
		};
	},
	tickAudio:function () {
		if (window.audioEngine.bgm.isPlaying == true) {
			window.audioEngine.bgm.isPlaying = false;
			window.audioEngine.bgm.play();
		} else {
			if (window.audioEngine.bgm.isPlaying == false) {
				window.audioEngine.bgm.isPlaying = null;
				window.audioEngine.bgm.pause();
			} else {
				window.audioEngine.bgm.isPlaying = null;
			}
		}
		if (!(audioEngine.context.state == "running")) {
			audioEngine.context = new AudioContext();
		}
	},
	active:false
}
window.audioEngine.bgm.audio.loop = true;
setInterval(window.audioEngine.tickAudio,1);*/