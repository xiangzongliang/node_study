const http = require('http'),
	url = require('url')



function start(router) {
	function onRequest(request, response) {

		console.log('请求了服务器..')

		var urlData = url.parse(request.url)
		router(urlData)

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log('启动服务器成功...')
}

exports.start = start;
