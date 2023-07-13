const http =require('http'),
query =require('jquery'),
fs = require('fs'),
urlModel = require('url'),    //=>能够把url分割为路径,查询信息,hash...
qs = require('querystring');  //=>能够url序列化操作;

const app = http.createServer((req,res)=>{
    const {pathname,query} = urlModel.parse(req.url);
    let lastName = ['\.js$','\.html$','\.css$','\.txt$','\.jpg$'];

    let re = new RegExp(lastName.join('|'));
    if(pathname ==='/'){
        let data = fs.readFileSync('www/index.html');
        res.end(data.toString());
    }
    else if(re.test(pathname)){
        console.log(urlModel.parse(req,url));
        try{
            let data = fs.readFileSync('www'+pathname);
            res.end(data.toString());
        }catch{
            let data = fs.readFileSync('www/404.html');
            res.end(data.toString());
        }
    }
    if(re.test(pathname)){
        console.log(urlModel.parse(req.url));
        try{
            let data = fs.readFileSync('www'+pathname);
            res.end(data.toString());
        }catch{
            let data = fs.readFileSync('www/404.html');
            res.end(data.toString());
        }
    }
    console.log(qs.parse((urlModel.parse(req.url).query)));
    res.writeHend('','')
    res.end(JSON.stringify({name:'哈哈'}));
});

app.on('error',(e)=>{
console.log(e);
if(e.code==='EADDRINUSE'){
    port ++;
    console.log(port);
    app.listen(port);
}
})
function listen(){
    if(port ===80){
        app.listen(port);
    }else {
       switch(pathname){
           case './add':
               const {mirname} = qs.parse(query);
                fs.mkdir('www/'+mirname+'/',(err)=>{
                    if(err){
                        console.log('创建失败');
                    }else{
                        // console.log('创建成功');
                        res.end(JSON.stringify({code:'1',msg:'创建文件夹成功'}));
                    }
                });
                break;
            case '/rename':
                //add?mirname=xxx
                console.log(req.url.method);
                if(/post/i.test(req.method)){//=>如果是post请求
                    req.on('data',(e,d)=>{
                        temp += d;
                        console.log(e);
                    });
                    req.on('end',()=>{
                        let o = qs.parse(temp.toString());
                        // console.log(temp.toSting());
                        fs.rename('www/'+o.oldname,'www/'+o.newname,()=>{
                            res.end(JSON.stringify({code:1,msg:'rename success!'}));
                        })
                    })
                }
                break;
            default:
                break;
       }
       
    }
}
