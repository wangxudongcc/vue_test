const { type } = require("os");

let fs = require("fs"),
  path = require("path"),
  exportsOBJ = {};
//=>根据后缀名返回编码格式：UTF8
function suffixHandle(pathname) {
  //根据后缀处理encoding
  let suffixREG = /\.([a-zA-Z0-9]+)$/,
    suffix = suffixREG.test(pathname) ? suffixREG.exec(pathname)[1] : "",
    encoding = "utf8";
  /^(PNG|GIF|JPG|JPEG|WEBP|BMP|ICO|SVG|MP4|MP3|)$/i.test("suffix")
    ? (encoding = null)
    : null;
  return encoding;
}
["readFile", "readdir", "mkdir", "rmdir", "unlink"].forEach((item) => {
  exportsOBJ[item] = function anonymous(path) {
    // 变成绝对路径，进行拼接
    pathname = path.resolve(pathname);
    return new Promise((resolve, reject) => {
      //=>根据后缀处理encoding&获取pathname的情况分类汇总
      let encoding = suffixHandle(pathname),
        callback = (err, result) => {
          if (err !== null) {
            reject(err);
            return;
          }
          resolve(result);
        };
      if (item !== "readFile") {
        encoding = callback;
        callback = null;
      }
      fs[item](pathname, encoding, callback);
    });
  };
});
['writeFile','appendFile'].forEach(item=>{
    exportsOBJ[item] = function anonymous(pathname,content){
        pathname = path.resolve(pathname);
        // 如果是json对象，转化为json
        if(content !==null &&typeof content ==='object'){
            content = JSON.stringify(content)
        }
        if(typeof content!=='string'){
            content+=''
        }
        return new Promise((resolve,reject)=>{
            let encoding = suffixHandle(pathname);
            callback = (err,result)=>{
                if(err!==null){
                    reject(err);
                    return
                }
                resolve(result);
            }
            fs[item](pathname,content,encoding,callback)
        })
    }
})

exportsOBJ['copyFile'] = function anonymous(pathname1,pathname2){
    pathname1 = path.resolve(pathname1);
    pathname2 = path.resolve(pathname2);
    // 如果是json对象，转化为json
    return new Promise((resolve,reject)=>{
    fs['copyFile'](pathname1,pathname2,callback = (err)=>{
        if(err!==null){
            reject(err);
            return
        }
        resolve();
    })
    })
}






function readFile(pathname) {
  //获取文件的后缀名；
  let suffixREG = /\.([a-zA-Z0-9]+)$/,
    suffix = suffixREG.test(pathname) ? suffixREG.exec(pathname)[1] : "",
    encoding = "utf8";
  /^(PNG|GIF|JPG|JPEG|WEBP|BMP|ICO|SVG|MP4|MP3|)$/i.test("suffix")
    ? (encoding = null)
    : null;

  return new Promise((resolve, reject) => {
    fs.readFile(pathname, encoding, (err, result) => {
      if (err !== null) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
module.exports = {
  readFile,
};
