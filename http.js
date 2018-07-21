const http = require('http'),
	url = require('url'),
	fs = require('fs')




function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");


	response.writeHead(200, {"Content-Type": "text/plain"});
	response.body = `<a>Hello World</a>`;
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");