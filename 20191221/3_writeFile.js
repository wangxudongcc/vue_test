const fs = require('fs');

// fs.writeFile('www/2.txt','567',function(error){
//     if(error){
//         console.log(error,'失败');
//     }
// });

fs.open('www/index.html','r+',function(error,fd){
    console.log(error,fd);
        if(error){
          return  console.log(error,'失败');
        }
        console.log('文件打开成功')
    })

fs.unlink('www/index.html',function(){});
    