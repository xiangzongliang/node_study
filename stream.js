// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。



let fs = require('fs'),
	data = '',
	isRead = false,  //是否为读内容
	writeDate = '这是写入的文件内容'




//读取文件

if(isRead){

	//创建一个可读的流文件
	var readStream = fs.createReadStream('./file/stream.txt')


	// 设置编码为 utf8。
	readStream.setEncoding('UTF8')


	readStream.on('data',function (data) {
		console.log('读取到数据为:'+data)
	})

	readStream.on('end',function(){
		console.log('文件读取结束了');
	});

	readStream.on('error', function(err){
		console.log('读取发生错误'+err.stack);
	});





}else{//写入文件


	var writerStream = fs.createWriteStream('./file/writeFile.jpg')


	// 使用 utf8 编码写入数据
	writerStream.write(writeDate,'UTF8')

	// 标记文件末尾
	writerStream.end();



	// 处理流事件 --> data, end, and error
	writerStream.on('finish', function() {
		console.log("写入完成。");
	});

	writerStream.on('error', function(err){
		console.log(err.stack);
	});

	console.log("程序执行完毕");

	// 管道读写操作
	// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
	//readerStream.pipe(writerStream);

}




//链式流    ----  压缩文件
// var fs = require("fs");
// var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream('input.txt')
// 	.pipe(zlib.createGzip())
// 	.pipe(fs.createWriteStream('input.txt.gz'));
//
// console.log("文件压缩完成。");



//链式流    ----  解压文件
// var fs = require("fs");
// var zlib = require('zlib');
//
// 解压 input.txt.gz 文件为 input.txt
// fs.createReadStream('input.txt.gz')
// 	.pipe(zlib.createGunzip())
// 	.pipe(fs.createWriteStream('input.txt'));
//
// console.log("文件解压完成。");





