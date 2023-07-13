// function A(x){
//     this.x = x;
//   }
//   A.prototype.x = 1;
  
//   function B(x){
//     this.x = x;
//   }
//   B.prototype =new A();
//   var a = new A(2), b =new B(3);
//   delete b.x;
// console.log(a,b);

//concat 拼接的   
/**
 *  
 * 
 */
// let ary= [10,20,30,40,50];
// let ary2= [1,2,3,4,5]
// // let res = ary.concat(1,3,-1,ary.length,ary2);
// // let res = ary.toString(ary,ary2)
// let res = ary.join('+')
// console.log(res,ary,ary2);


/**
 * 数组转化为字符串
 * 原有数组是不变的
 * 不会改变原数组；
 * 检测数组中包含某一项
 * indexOf lastIndexOf   IE6-8中不兼容
 */

//  let ary2= [1,2,3,4,5]; 
//reverse 排列后的新数组，原有数组改变
//  let res = ary.reverse();
//  console.log(res,ary);

 /**
  * sort：如果不传递参数是无法处理10以上的数字排序；
  * 
  * @params 可以没有，
  * 
  */
  // let ary= [16,'1',38,39,26,17];
  // // let res = ary.sort((a,b)=>a-b);
  // console.log(res,ary);
/**
 * foreach :遍历数组中的每一项内容；
 * @params 回调函数
 * @return 数组不变
 * 
 */

// res = ary.forEach((item,index) => {
//     //=>数组中有多少项，函数就会被执行多少次
//     //=>每一次执行函数，item是数组中当前要操作的这一项
//     console.log('索引时',index,'值是',item)
// });

  // let res = ary.sort((a,b)=>a-b);


// let newAry = [];
// ary.forEach(item=>{
//     if(newAry.includes(item))
//     return;
//     newAry.push(item)
//   })
// console.log(newAry)

//循环数组每一项，每一次拿出来的值
//方案2：用这一项和'它后面的每一项'依次进行比较，


// var ary= [1,2,1,3,3,43,5,43,435,3,4];
// for(var i=0;i<ary.length;i++){
//   var item = ary[i];
//  for(var j=i+1;j<ary.length;j++){
//   var compare = ary[j]
//   //=>如果compare 和item相等，是重复的，把他删除
//   if(compare===item){
//     ary.splice(j,1);
//   }
//  }
// }
// console.log(ary);

// let obj = { num1: 117 };
// let res = obj;
// obj.child = obj = { num2: 935 };
// var x = (y = res.child.num2);
// console.log(obj.child);
// console.log(res.num1);
// console.log(y);

// let ary = [1,2,13,'数组',54,351,35,4684,1];
// let obj = {};
// 循环数组 中的某一项，把每一项对象中进行存储；

// for(let i=0;i<ary.length;i++){
//   let item = ary[i];
//   //每一次存储之前进行判断；验证obj中是否存在着一项；
//   if(obj[item]!==undefined)
//   {ary.splice(i,1);
//     i--;
//     continue;}
//   obj[item]  = item;
  
// }
// console.log(ary)


// for(let i=0;i<ary.length;i++){
//   let item = ary[i];
//   if(obj[item]!==undefined)
//   {ary.splice(i,1);
//     i--;
//     continue;}
//   obj[item]  = item;
  
// }


// for(let i=0;i<ary.length;i++){
//   let item = ary[i];
//   if(obj[item]!==undefined)
//   {  
//     ary[i]=ary[ary.length-1];
//     ary.length--;
//     i--;
//     continue;}
//   obj[item]  = item;
// }


/**
 * unique ：实现数组去重
 * @param {一个数组类型} ary 
 * @return 去重后的数组
 * by wang on 20221116
//  */
// function unique(ary){
//  let obj ={};
//   for (let i = 0;i<ary.length;i++){
    
//   }
// }

// var n = 1;
// function fn(){
//   var n =2;
//   function f(){
//     n--;
//     console.log(n);
//   }
//   f();
//   return f;
// }
// var x = fn();
// x();
// console.log(n)


// function test(){
//   this.flag=false;
//   this.change=()=>{
//   this.flag=true;
//   console.log(button.flag);}
//   ;}
// const button=new test();
// document.addEventListener("click",button.change);

/**
 * JS的特殊性
 * 一定是自己所属类的实例；
 * 但不一定是对象数据类型的；
 */
// console.log(1 instanceof Array)
// let str = "1,2,3";
// // let reg = /\d+/;
// let reg1 = new RegExp('/^\d+$/');
// console.log(reg1.test(str));
// console.log(reg1.exec(str));


//new 这个里面有两个参数，

// let reg = /^[1829]$/;
// console.log(reg.test(1))
// console.log(reg.test('8'))
// console.log(reg.test('29'))
// console.log(reg.test('0'));

//验证是否为有效数字
// let reg  = /^[+-]?(\d[1-9]\d+))(\.\d+)?$/;
// //验证密码的数字字母下划线+6-16位
// let val = userPassInp.value;
// // if(val.length<6||val.length>16){
// //   alert ('长度要介于6-16位之间');
// //   return;
// //   let area = []
// // }
// let reg1 = /^\w{6,16}$/;
// let flag = reg.test(val);
// //验证真实姓名的
// let reg2 = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0, 2}$/


//正则捕获，验证字符串是否符合规则
  
  // let reg = /\d+/g;
   
  // !function(){
  //   function execAll(str = ""){
  //     let ary = [],
  //     res = this.exec(str);
  //     while(res){
  //       ary.push(res[0]);
  //       res = this.exec(str);
  //     }
  //     return ary.length==0?null:ary;
  //   }
  //   RegExp.prototype.execAll = execAll
  // }();
  
  // // let reg  = /\{\d+\}/g;
  // // console.log(reg.exec(str));
  // console.log(str.match(reg))

  // let aryBig =[],
  // arySmall = [],
  // res = reg.exec(str);

  // let str1 = 'book';
  // let reg = /^[a-zA-z]([a-zA-Z]\1[a-zA-Z])$/;

// let str = '{100}你{2}和{3}呢';
// // 默认情况下，正则捕获的时候是按照正则匹配的最长结果来获取的；
// //取消贪婪性，在量词元字符后面设置? 取消捕获时候的贪婪性
// let reg= /\d+/g;
// console.log(str.match(reg));

// // 1?  出现0-1次
// //问号左边是量词元字符，取消捕获时候都贪婪性；
// // ?: 只匹配不捕获
// str = str.replace(/\d+/g,2)
// console.log(str);

// let time = '2022-11-30'; //=>变为“20221130”
// let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
// time = time.replace(reg,()=>{

// });
// console.log(time)

// let str = 'good good study!';
// // let reg = /\b\b/

// // $1 = $1.toupperCase();

//  str = str.split('').sort((a,b)=>a.localeCompare(b)).join('')
// let reg = /([a-zA-Z])\1+/g;

// let ary = str.match(reg);
// ary.sort((a,b)=>b.length-a.length);
// console.log(`出现次数最多的是${ary[0].slice(0,1)}`);
// let max = ary[0].length,
// res = [ary[0].substring(0,1)];
// for(let i =1;i<ary.length;i++){
  
// }

// !function(){
//   /**
//    * formatTime :时间字符串格式化处理
//    * @param  template:[string] 我们最后期望获取日期格式的模板；
//    * @return  格式化后的字符串  
//    * by wang on 20221201
//    */
//    function formatTime(template = '{0}年{1}月{2}日 {3}时{4}分{5}秒'){
//     //=>首先获取时间字符串中的年月日等信息；
//     let timeAry = this.match(/\d+/g);
//      template = template.replace(/\{(\d+)\}/g,(content,$1)=>{
// // content 当前本次大正则匹配的信息； $1小分组匹配的信息；
// //=>以$1 的值作为索引， 
// });

//    }
//    /***
//     * 扩展到内置类string.prototype
//     */
//    ['formatTime'].forEach(item=>{
//     String.prototype[item] = eval(item);
//    });

// }()
/**
 * queryURLParams:获取url地址问好后面的参数信息
 * @params
 * 
 * @return
 *      [object] 把所有问号参数信息以键值对的方式存储起来
 * 
//  */
// function queryURLParams (){
// let obj = {};
// this.replace(/([^?=&#]+)=([^?=&#]+)/g,(...[,$1,$2])=> obj[$1]=$2)
// this.replace(/#([^?=&#]+)/g,(...[,$1])=>obj['HASH']=$1)
// return obj;
// }
// let url = 'https://www.bilibili.com/video/BV1rV411n72v?p=157&vd_source=f1d038dac10f73af0ee1c784f485725a'

/**
 * millimeter:实现大数字的千分符处理；
 *     @params
 *     @return
 * 
 */
// function millimeter (){
//   return this.replace(/\d{1,3}(?=(\d{3})+$)/g,content=> content+',')
  
// }
// let num= '12222132134439';
// num = '61235543';
// num = num.  split('').reverse().join('');
// for(let i =2;i<num.length-1;i+=3){
//   let prev = num.substring(0,i+1),
//   next = num.substring(i+1);
//   num = prev +','+next;
// }
// num = num.split('').reverse().join('');



// npm i -g xxx
/**
 * npm i MD5 
 * 安装成开发依赖 --save-dev
 * 把模块设置为生产依赖npm i xxx --save-pro
 * 
 */

// function func(){
//   console.log('A');
// }
// // module.express是Node天生自带的用来导出模块的方法

// module.exports = {
//     // 这些属性方法就是需要暴露给外边调取使用的；

// }
// 可以省略后缀名，如果是调取自己定义的模块，需要加上根目录、
//不加上述地址，则先找第三方模块；
// let A = require('./A');
// function func(){
//   console.log('B');
// }
// func();
// A.func();
// 模块导入是同步的没导入完成，去掉最大值和最小值
// 剩余值求和，实现求和
// C 
// /\.(png|jpe?g|gif|bmp)(\?.*)?$/.test 
 

// const a = ['foo','bar','baz','qux'];
// const aKeys = Array.from(a.keys());
// const aValues = Array.from(a.values());
// const aEntries = Array.from(a.entries())
// console.log(aKeys,aValues,aEntries[1][0]);

// for(const [idx,element,ele] of a.entries()){
//   console.log(idx,element,ele)
// }
// const zeros = [1,2,3,4,5];
// console.log(zeros.fill());

// let  ints ;
// const res = ()=>ints = [0,8,9,1,2,3,4,5,6,7,8,9,10,11];
// res();
// ints.copyWithin(3,7,10);
// console.log(ints.toString(),"",ints.toLocaleString())

// let person1 = {
//   toLocaleString(){
//     return 'good'
//   },
//   toString(){
//     return 'study'
//   }
// },
// person2 = {
//   toLocaleString(){
//     return 'day'
//   },
//   toString(){
//     return 'up'
//   }
// };
// let people = [person1,person2,'empty'];
// console.log(people.join());

// function capitalized(word){
// return `${word[0].toUpperCase()}${word.slice(1)}`;
// }
// console.log(`${capitalized('hello')},${capitalized('world')}!`)
// console.log(`${capitalized('world')}!`)


// let target = {foo:'bar'};
// let handler = {
//   get(){
//     return '会被拦截吗'
//   },
//   a(){
//     return '设置东西了'
//   }
// };
// let proxy = new Proxy(target,handler);
// console.log(target.foo);
// console.log(handler.foo);
// console.log(proxy.foo,proxy.prototype)

let  o = {hasOwnProperty:'hehe'}
o.hasOwnProperty('foo');
Object.create(null).hasOwnProperty('foo');
let last = array.at(-1)