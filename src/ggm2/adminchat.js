window.onjoin = function () {
	var server = new chat.server();
	server.fakeMessage({
		message:"admin commands has been loaded",
		color:"blue",
		name:"Admin Commands"
	});
}