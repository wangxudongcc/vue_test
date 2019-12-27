const http = require('http');

let app = http.createServer(function(request,response){
    if(request.url !== '/favicon.ico'){
        let num = (/user=(\d)/.exec(request.url.split('?')[1]))[1];
        response.setHeader('Content-Type','text/html;charset=utf-8');
        if(num === '1'){
            response.write('{"name":"郝永旺"}');
        }else if(num ==='0'){
            response.write('{"name":"李磊"}');
        }
        response.end();
    }
})
app.listen(88)