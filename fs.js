var fs = require("fs");



//异步读取文件
fs.readFile('file/index.txt', function (err, data) {
	if (err){
		console.error(err.stack);
		return;
	}
	console.log('异步读取:'+data.toString());
});
console.log("程序执行完毕");




//同步读取文件
var data = fs.readFileSync('file/index.txt');
console.log("同步读取: " + data.toString());





//打开文件
fs.open('file/index.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("文件打开成功！");
});