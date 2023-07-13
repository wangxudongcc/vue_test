const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');

router.post ('/',(req,res)=>{
    let files = req.files;
    files.forEach(file=>{
        let oldPath = path.resolve(file.path);
        let newPath = path.resolve(file.destination,file.originalname);
        fs.renameSync(oldPath,newPath);
    });
    res.json({code:1,msg:'成功'});
})

module.exports =router;