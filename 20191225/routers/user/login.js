const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
        setTimeout(()=>{
            res.json({code:0})
        },2000)
    });

module.exports =router;