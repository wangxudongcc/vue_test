const http = require('http');
const fs = require('fs');

/**
 * 注册
 * /register?user=123 
 *                      localhost/index2.html
 *  1.看下有没有这个人
 *  2.
 *  失败
 * {
 *      code:0
 *      msg:"这个人已经注册了"
 * }
 *   成功
 * {
 *      code:1,
 *      msg:'可以注册'
 * }
 */
http.createServer((req,res)=>{
    let req.url = url;
    if(req.url !== '/favicon.ico'){
        if(url.includes('?')){
            //接口
           let ary = url.split('?');
           let jiekou = ary[0];
           let opt =queryString(ary[1]);
          
          
           switch(jiekou){
           }
        }else{
            //文件
        }
    }
    let sql = [{},{},{}];

    if(o){
        MSGesture.code=0;

    }
}).listen(88)