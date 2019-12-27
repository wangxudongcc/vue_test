const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session =require('express-session');
const multer = require('multer');

let sql = [{id:-1,name:'zy'},{id:0,name:'lilei',type:0}
,{id:1,name:'zzk',type:1},{
    id:2,name:'ydz',type:9
}]

app.use(session({
    secret:'12期',
    name:'session_id',
    cookie:{maxAge:5000},
    resave:false,
    saveUninitialized:true
}));

app.use(express.static('www'));
app.use(multer({dest:'upload/'}).single('filename'))

app.use('/',(req,res,next)=>{
    req.sql=sql;
    console.log('也能进');
    if(req.session.userinfo ||req.url==='/login2'){
        next();
    }else{
        res.json({code:100});
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/login',require('./routers/user/login'));
app.use('/login2',require('./routers/user/login2'));
app.use('/getary',require('./routers/data/getary'));
app.use('/noloading',require('./routers/data/noloading'))
app.use('/upload',require('./routers/upload/upload'));

app.listen(80)
