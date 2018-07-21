const util = require('util')

// util.inherits
// util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。



// util.inspect
// util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。

console.log(util.inspect({dsdsa:3782197}));



// util.isArray(object)
// 如果给定的参数 "object" 是一个数组返回true，否则返回false。





// util.isRegExp(object)
// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。





// util.isDate(object)
// 如果给定的参数 "object" 是一个日期返回true，否则返回false。





// util.isError(object)
// 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。





util.isArray([])
// true
util.isArray(new Array)
// true
util.isArray({})
// false