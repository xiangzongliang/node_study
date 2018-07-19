var fs = require("fs");

fs.readFile('file/index.txt', function (err, data) {
	if (err){
		console.error(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("程序执行完毕");