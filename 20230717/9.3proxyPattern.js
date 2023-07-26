// // 9.3.3属性验证
// const target = {
//  onlyNumberGoHere:0
// }
// const proxy = new Proxy(target,{
//     set(target,property,value){
//         console.log(target,property,value)
//         if(typeof value !== 'number'){
//             // 不是数字就不让设置对象的属性值
//             return false 
//         }else{
//             return Reflect.set(...arguments)
//         }
//     }
// })
// proxy.onlyNumberGoHere = 1
// console.log(proxy.onlyNumberGoHere)
// proxy.onlyNumberGoHere =['foo','bar']
// console.log(proxy.onlyNumberGoHere)

// function median(...nums){
//     return nums.sort()[Math.floor(nums.length/2)]
// }
// const proxy = new Proxy (median,{
//     apply(target,thisArg,argument){
       
//         for(const arg of argument){
//             if(typeof arg !== 'number'){
//                 throw "提供了非数字参数(Non-number argument provided)"
//             }
//         }
//         return Reflect.apply(...arguments)
//     }
// })
// console.log(proxy(4,7,1))
// console.log(proxy(4,[7,1])) //如果传参中出现非数值类型就会报错

// class User {
//     constructor(id){
//         this._id=id
//     }
// }

// const proxy = new Proxy(User,{
//     construct(target,argumentsList,newTarget){
//         if(argumentsList[0] ===undefined){
//             throw '没有id就无法实例化用户(User cannot be instantiated without id)'
//         }
//         else{
//             return Reflect.construct(...arguments)
//         }
//     }
// })
// console.log(new proxy(1))
// console.log(new proxy) //  如果不传参会报错


const target = []
// class User {
//     constructor(id){
//         this._id=id
//     }
// }
// const proxy=new Proxy (User,{
//     construct(){
//         const newUser = Reflect.construct(...arguments)
//         target.push(newUser)
//         return newUser
//     }
// })
// console.log(new proxy(1))
// console.log(new proxy(2 ))
// console.log(new proxy(3))

// console.log(new User(4))
// console.log(target)
// 可检测对象
// function emit (a){
//     console.log(a)
// }
// const proxy = new Proxy(target,{
//     set(target,property,value,receiver){
//         console.log(target,property,value,receiver)
//         const result = Reflect.set(...arguments)
//         if(result) {
//             emit(Reflect.get(target,property,receiver))
//         }
//         return result
//     }
// })
// proxy.push('wang')
// proxy.push("dong")
// console.log(target)

// --------------------------------------------
function OneClass() {
    this.name = 'one';
}

function OtherClass() {
    this.name = 'other';
}

// 创建一个对象：
var obj1 = Reflect.construct(OneClass, target, OtherClass);

// 与上述方法等效：
var obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, target);

console.log(obj1); // 'one'
console.log(obj2); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true

console.log(OtherClass.prototype); // true


//---------------------------------------------