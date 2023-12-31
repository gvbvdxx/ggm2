//insert this into your script for ggm2 cloud connections
var ws = require("ws");

var wss = new ws.WebSocketServer({port:8080});
var projectinfo = {};


wss.on("connection",(ws) => {
  console.log("GGM2 Client Connected");
  ws.on("message",(msg) => {
    var json = JSON.parse(msg.toString());
    if (json.command == "set") {
     if (!projectinfo[json.id]) {
       //create empty project cloud info, if it does not have it in memory.
       projectinfo[Number(json.id)] = {};
     }
      //GGM2 cloud servers ALLWAYS uses tolowercase on the name, as the program
      //expects to use toLowerCase on the reciver.
       projectinfo[Number(json.id)][json.name.toLowerCase()] = json.value;
    }
    //console.log(projectinfo)
    
  });
});

setInterval(() => {
  wss.clients.forEach((ws) => {
    //send the projectinfo, DIRECTLY, and not its variables in its id.
    ws.send(JSON.stringify(projectinfo,null,"\n"))
  })
},3);