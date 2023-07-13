const express = require('express');
const router = express.Router();

router.post('/login2',(req,res)=>{
    const {body} = req;
    let o = sql.find(item=>item.name ===body.name)
    let obj = null;
    if(o){
        obj = {
            code:0,
            type:o.type,
            user:o.name
        }
    }else{
        obj = {code:1}
    } 
    res.json(obj)
})

module.exports =router;