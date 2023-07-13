// let sum  =(...arg)=>eval(arg.join('+'));
// console.log(sum(10,2,304,45))
// module.exports = {
//     sum:sum
// }

// console.log(/^\(\d+\)\d{3}( ?)\d+$/.test('(202)515 5555'))

// const { readFile } = require('fs');
// let http = require('http');
// let {} = require('./utils/promiseFS ')
// let mime = require('mime');


// let server = http.createServer((req,res)=>{
// res.end('hello world!')
// });

// server.listen(8080,()=>{
//     console.log(`服务启动成功`)
// })
// pathname = path.resolve('./static')+pathname;
// readFile(pathname).then(result=>{
    // res.end 相当于基于响应主体返回信息，还
    // write-head (STATUS,OPTIONS)
//     res.writeHead(200,{
//         'content-type':''
//     })
//     res.end(result);
// }).catch(err=>{
//     res.end('not found!');
// })

// let PORT = 80;
// function listen(PORT){
//     try{
//         server.listen(80,()=>{
//             console.log(`服务已经基于${PORT}启动，请勿关闭！`)
//         })
//     }catch(err){
//         PORT++;
//         listen(PORT)
//     }
   
// }
// listen(80);



// let a = 4,b=NaN;
// console.log(a<b);


// if('BarcodeDetector' in window){
//     const barcodeDetector = new BarcodeDetector({
//         formats:['qr_code']
//     })
// }
// // 会报错，node  里没有window
// BarcodeDetector.getSupportedFormats().then((supporeedFormats)=>{
//     supporeedFormats.forEach((format)=>{
//         console.log(format);
//     })
//    })

// const sym = Symbol(),
//       obj = Object(),
//       obje = new Object(),
//       ary = Array(),
//       arry = new Array();

// const describeForNameMap = {
//         小:()=>console.log('111111'),
//         [sym]:'sym', 
//         [obj]:'obj',
//         [obje]:'obje',
//         [ary]:'ary',
//         [arry]:'arry'
// };

// console.log(Object.values(describeForNameMap));
// console.log(describeForNameMap);
// [func...,'',,,,]

let k1 = Symbol("k1")
let k2 = Symbol("k2")
let o = {
    1:1,
    first :"first",
    [k1]:'sym2',
   second:"second",
   0:0
}
o[k2]="sym2"
o[3]=3
o.third = 'third'
o[2]=2
o.obje = {}

// console.log(Object.values(o)[7] ===o.obje)
// console.log(Object.entries(o)[7][1]===o.obje)
// console.log(Object.getOwnPropertyDescriptor(o,'third'))
// console.log(Object.getOwnPropertySymbols(o,1))
const sym =Symbol()
const oSym={
    [sym]:'foo'
}
function Person(){}

Person.prototype = {
    name:"Nicholas",
    age:29,
    job:'Software Engineer',
    sayName(){
        console.log(this.name)
    }}
    Object.defineProperty(Person.prototype,"constructor",{
        enumerable:false,
        values:Person
    })
    Object.defineProperty(Person.prototype,"constructor",{
        values:Person,
        enumerable:false
    })
let application = function(){
    let components = new Array()
    components.push(new BaseComponent())
    console.log("components",components)
    return {
        getComponentCount(){
            return components.length
        },
        registerComponent(component){
            if(typeof component =="object"){
                components.push(component)
            }
        }
    }
}

// console.log(Object.values(sym))
// console.log(Object.entries(oSym))

// const target = {
//     id:'target'
// };
// const handler = {name:'handler'}
// const proxy = new Proxy(target,handler)
// // console.log(proxy)
// target.id ="foo"
// console.log(target.id,proxy)
// console.log(target.hasOwnProperty("id"))
// console.log(proxy.hasOwnProperty("id"))
// console.log( Proxy)
// console.log(target ===proxy)

// this指向
// window.identity  ="the window"
// let object = {
//     identity:'My Object',
//     getIdentity(){
//         return this.identity
//     }
// }
// console.log((object.getIdentity = object.getIdentity)())
// console.log(this)


function assignHandler(){
    let element = document.getElementById('someElement')
    let id = element.id
    element.onclick =()=>console.log(id)
    element = null
}
console.log(assignHandler())
 