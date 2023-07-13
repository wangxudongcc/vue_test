const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    setTimeout(()=>{
        res.json({code:0,ary:[1,2,3,4]})
    },4000)
});

module.exports = router;