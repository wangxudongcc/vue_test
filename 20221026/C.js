
// // let {
// //     avg
// // } = require('./B');
// // console.log(avg(43.,231,3,5,45,23,214));

// let fs = require('fs');
// fs.readdir('./',(err,result)=>{
//     //=>err存储读取失败后的错误信息；
//     //=>result 存储读取成功后的结果
//     if(err===null){
//         console.log(result);
//     }
//     console.log(err);
// })
// // 同步或者异步读取某一个文件的内容
// //=>fs.readFileSync([path],[encoding]);
// // let result = fs.readFileSync('./package.json','utf-8')
// // console.log(result);

// // fs.readFile('./package.json','utf8',(err,result)=>{
// //     if(err!==null)return;
// //     console.log(result);
// // })
// let result = fs.writeFileSync('./AA.txt','你好，node!','utf8');

// console.log(result)
// let err= null;
// try{fs.appendFileSync('./AA.txt','\nnihao，node','utf8');
// }catch(e){
// err=e
// }
// if(err!== null){
//     console.log('执行报错！')
// }
// fs.mkdir('./js',(err,result)=>{
//     console.log(err);
// })
// fs.rmdir('./js',()=>{

// })
// let path = require('path');
// let {
//     readFile
// } = require('./promiseFS');


// readFile('../').then(result=>{
//     console.log(result)
// }).catch(reason=>{
//     console.log(reason)
// });
//=>__dirname 目录绝对路径；__filename 文件的绝对路径
// console.log(__dirname,__filename)
//=>获取当前node执行时所在的目录；（我们一般认为执行目录）
// console.log(path.resolve('./AA.txt'));

// pathname 都以根目录作为参照，执行JS也是在根目录执行；
// 为什么node里面的东西需要模块引入，而不能直接用呢？像是path,fs什么的；
// 为什么FS 要封装promise呢?

const fs = require('fs');
 
setImmediate(()=>console.log(1));
console.log(2);
Promise.resolve().then(()=>{
    
})