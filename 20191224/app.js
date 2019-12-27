const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(express.static('www'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret:'12期',
    name:'session_id',
    cookie:{maxAge:60000},
    resave:false,
    saveUninitialized:true,
    rolling:true
}));

let sql = [{
    id:0,
    user:'wxd',
    pw:'123'
}];

const userFn = (req,res)=>{
    const {body} = req;
    let re = /^[a-zA-Z]\w$/;
    let msgObj = {};
    if(body.user&&re.test(body.user)){
        let o = sql.find(item=>item.user === body.user);
    if(o){
        msgObj.code=1;
        msgObj.msg = '用户名已存在';
    }else{
        msgObj.code = 0;
        msgObj.msg = '可以注册';
    }
}else{
    msgObj.code =2;
    msgObj.msg = '请输入正确的用户名';
}
res.json(msgObj);
}
app.post('/getName',userFn);

app.post('/register',(req,res)=>{
    const {body:{user,pw}} = req;
    let re = /^[a-zA-Z]\w$/;
    let msgObj ={};

    if(user && pw &&re.test(user)){
    let o =sql.find(item=>item.user === user);
    if(o){
        msgObj.code = 1;
        msgObj.msg = '用户名已存在';
    }else{
        msgObj.code =0;
        msgObj.msg = '可以注册';
        sql.push({id:Date.now(),user,pw});
    }
}else{
    msgObj.code =2;
    msgObj.msg='请正确输入用户名';
}
res.json(msgObj);
});


app.post('/login',(req,res)=>{
    let msgObj ={};
    const {body:{user,pw}}=req;
  if(user&&pw){
      let o = sql.find(item=>item.user ===user);
      if(o){
          if(o.pw ===pw){
              msgObj.code =0;
              msgObj.msg = '登陆成功';
              req.session.userInfo =user;
          }else{
              msgObj.code = 3;
              msgObj.msg = '用户名或密码错误';
          }
      }else{
          msgObj.code =1;
          msgObj.msg = '此用户没有注册';
      }
  }else{
      msgObj.code = 2;
      msgObj.msg = '请核对用户信息';
  }
    res.json(msgObj);
});

app.get('/islogin',(req,res)=>{
    if(req.session.userInfo){
        res.json({
            code:0,
            msg:'欢迎回来',
            user:req.session.userInfo
        })
    }else{
        res.json({
            code:1,
            msg:'没有登录'
        })
    }
})

