

/**
 * 通过全局对象下的__filename能够获得当前文件的绝对路径(包含文件本身)
 * 表示当前执行脚本所在的目录
 */
let path = require('path');
 // console.log(__filename,__dirname);

// console.log(path.join(__dirname,'dadaada'));

//自动帮我们找当前文件路径和配置路径进行拼接;

console.log(path.resolve(__dirname,'./2.server.js'));
console.log(path.resolve('wwwroot','./tmp/file/'));

