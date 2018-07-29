//node当前进程中堆内存调用及查看的方式



let os = require('os')
console.log('操作系统中的总共内存大小' + os.totalmem())
console.log('操作系统中的闲置内存大小' + os.freemem())

//--------------------------------------------------------------------


var showMem = () => {
    let men = process.memoryUsage()
    /**
     * {
     *      rss:73812973289,    //进程的常驻内存部分
     *      heapTotal:67328367, //是指V8的堆中总共申请的内存量
     *      heapUsed:7483297879 //目前V8中使用的内存量
     * }
     */
        console.log(men)
     let format = (bytes) => {
         let byt = parseInt(bytes)
        return (bytes/1024/1024).toFixed(2) + 'mb'
     }
     console.log('Process:heapTotal' + format(men.heapTotal) + ' heapUsed' + format(men.heapUsed) + ' rss' + format(men.rss))
     console.log('------------------------------------------------------------------')
}

let useMen = () =>{
    var size = 20*1024,
        arr = new Array(size)
    for(let i = 0;i<size;i++){
        arr[i] = 0
    }
    return arr
}

var total = []

for(var j = 0 ;j<3;j++){
    showMem()
    total.push(useMen())
}
showMem()