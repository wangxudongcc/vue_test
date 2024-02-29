/**
 * 服务器端要做的常规任务；
 *    1.首先想干事需要有一个服务，即服务员，让他帮我去IIS、NGINX、APPACHE，NODE[HTTP/HTTPS]
 * 内资模块
 *    2.接收客户端的请求信息；
 *    3.查找到对应的资源文件内容，或者对应的数据信息；
 *    4.把找到的内容返回给客户端；
 */
let http = require('http'),
    url = require('url');
let server = http.createServer();
// server.listen 监听端口号；
server.listen(80,()=>{

})