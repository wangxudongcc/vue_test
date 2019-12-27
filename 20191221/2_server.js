const http = require('http');
const fs = require('fs');

// let app = http.createServer(function(req,res){
//     fs.readFile('1.txt',function(err,data){
//         if(err){
//             res.write('404');
//         }
//         res.end();
//         console.log(data.toString());
//     })
// })


// let buf1 = Buffer.from('heaven11111dadas')
// let buf2 = Buffer.alloc(10);
let buf3 = Buffer.allocUnsafe(20);
// console.log(buf1,buf1.length)
// console.log(buf2,buf2.length)
console.log(buf3);

/**
 * 2d 66 90 0f 52 0c 00 00 00 00 00 00 00 00 00 00 00 64 5f 75
    -fsiRFF00000000000d--u
 */

/**
 * CommonJs 规范加载模块是同步的,也就是说只有加载完成,才能执行后面的操作
 */


// let url = req.url;
// if(url === '/'){
//     url = '/index.html';
// }

// try{
// let data = fs.readFileSync('www/index.html')  //=>如果是某个
// }catch{
    
// }

// let data = fs.readFileSync('1.txt');
// console.log(data.toString());

// app.listen(88);

// 我之前在八期写的是CRM管理系统,但那次是用jQuery写的,并且有些内容没有完善,还需要斟酌一下,所以这次的项目我写...Vue版的CRM管理系统;这次我打算把之前讲的内容重构一遍,再加一些之前没来及的完成的 那些一闪而过的 新想法;

