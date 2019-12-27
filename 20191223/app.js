const express = require('express');
const app = express();
const bp = require('body-parser');

app.get('/login',(req,res)=>{
    console.log(req.query);
    if(req.query.name ==='xxx'){
        res.json({
            code:1,
            msg:'哈哈'
        });
        res.send({
            code:1,
            msg:'邦邦'
        })
    }
})
app.post('/register',(req,res)=>{
    console.log(req.body);
})
app.listen(80);