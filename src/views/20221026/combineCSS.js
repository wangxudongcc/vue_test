let {
    readdir,readFile,mkdir,writeFile
}= require('./promiseFS');
let less = require('less');
/**
 * 
  找到css目录中所有的文件，找到后缀名为css文件
  依次读取css文件中的内容，最后把所有内容和并在一起；
  合并结果放在DIST文件夹的index.css文件夹
  */
 readdir('./').then(result=>{
    result = result.filter(item=>/\.CSS/i.test(item))
    result = result.map(item=>{
        return readFile(`./css/${result[0]}`)
    })
      return Promise.all(result)
 }).then(result=>{
    result = result.join('');
    return new Promise((resolve,reject)=>{
        less.render(results,{
            compress:true
        },(err,result)=>{
            if(err!==null)reject(err);
            //=>result是一个对象，对象的CSS属性包含压缩后的代码
            resolve(result.css)
        })
    });
    }).then(css=>{
        return writeFile('./dist/index.css',result)
})

 