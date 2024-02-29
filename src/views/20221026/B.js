let express = require('express'),
app = express();
app.listen(8080,()=>{
    console.log('服务已经启动！')
})
app.use(express.static('./static'));
app.use((req,res,next)=>{
    res.status(404);
    res.send('meifaxian!'); 
})
