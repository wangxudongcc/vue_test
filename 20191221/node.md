### 如何才能请求数据?
URI URL(地址) URN(名字)
    fetch('/s?ie=utf-8&f=3')
    fetch('/get?user=name')  http://localhost:80/get?user=name
    fetch('/post?a=b') [a=b是没用的]

    let data = [];
    fetch('./data.json') 等同于 http://localhost/index.html

    Node 基于chrome V8引擎开发,能够让js运行在服务端,通过npm 去下载功能模块包;
    Node 特性
        单线程
        非阻塞I/O
        事件驱动
    Node擅长处理高密集I/O,高并发的业务,前端小玩具;
    
NodeJs 使用的是commonJs规范;(AMD require JS CMD sea.js);
    引入(require('文件')
    不加路径的情况: 
    node自带模块
    node_modules中的模块;)/导出(module.exports={
        a:xxx,b:xxx
    })



 * request 请求  =>ajax
 * response 响应;    {发送数据}
 * request获取客户端发送给服务器的信息; URL ,需要注意的是favicon.icon
 * response 服务器发送给客户端的信息;
 *  write(写字符串)
 end();


fs文件系统 
    readFile(读的文件地址,回调函数(失败,文件数据))
    readfileSync(读的文件地址) //=>同步,如果读取失败
    writeFile,writeFileSync 

    -unlink 删除文件
    添加文件夹

不管是请求找页面还是找借口,都是通过一个url的方式与后端进行交互,在访问服务器的时候,最好就把要访问的服务器要做什么事说清楚;

open('get','/get?user=123');

