var console = require("log");
//cloud scripts
window.enableCloudSend = true;
class cloudProvider {
    constructor(wss, id) {
        //basic setup for cloud use
        var t = this;
        this.open = false;
        this.variables = {};
        this.ws = new WebSocket(wss);
        this.variables = {};
        this.variables[id] = {};
        this.id = id;
        this.ws.addEventListener("message", function (e) {
            if (window.enableCloudSend) {
                var data = e.data.toString();
                t.variables = JSON.parse(data);
            }
        });
        this.ws.onopen = function () {
			console.log("Connected to Cloud provider successfully!");
            t.open = true;
        };
    }
    updateVariable(name, value) {
        if (!(this.variables[this.id])) {
            this.variables[this.id] = {};
        }
        this.variables[this.id][name.toLowerCase()] = value;
        if (window.enableCloudSend) {
            if (this.open) {
                //the vm calls this everytime there is a cloud update.
                this.ws.send(JSON.stringify({
                        command: "set",
                        name: name,
                        value: value,
                        id: this.id
                    }, null, "\t")) //i think formating it this can make it faster
            }
        }
    }
    getVariables() {
        if (this.open) {
            /*
            it will return something like this format:{
            "my-var":"my-value"
            }
             */
            return this.variables[this.id];
        }
    }
    getVariable(name) {
        if (this.open) {
            var vars = this.getVariables();
            if (vars) {
                return vars[name.toLowerCase()];
            } else {
                return null;
            }
        }
    }
}
if (window.cloudsetup) {
    function connectLoop() {
		console.log("Connection opening to Cloud provider...");
        var api = new cloudProvider(window.cloudsetup.ws, window.cloudsetup.id)
        vm.setCloudAPI(api);
        api.ws.onclose = function () {
			console.log("Connection Closed! Reconnecting to Cloud provider...");
            connectLoop();
        };
        api.ws.onerror = function () {
			api.ws.onclose = null;
			console.error("Unable to connect to Cloud provider! Retrying...");
            connectLoop();
        }
    }
    connectLoop();
}
