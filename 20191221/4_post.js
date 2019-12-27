




if(url.includes('/post')){
    let html = '';
    req.on('data',(data)=>{
        html +=data;
        console.log(data);
    });
    // 传输完触发
    req.on('end',()=>{
        let opt = queryString(html);
    })
}