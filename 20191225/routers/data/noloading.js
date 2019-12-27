const express = require('express');
const router = express.Router();

router.get('/noloading',(res)=>{
    setTimeout(()=>{
        res.json({code:1})
    },3000)
})

module.exports = router;