const target = {
    id:'target',
    foo:'bar',
    thisValueEqualsProxy(){
        return this === proxy
    }
}
// 处理程序的对象
// const handler={
// get (targetObj,queryProperty,receiver){
//     console.log(targetObj)
//     console.log(queryProperty)
//     console.log(receiver)
//     return targetObj[queryProperty]
// }
// }  
// 使用Reflect 反射创建空代理
// const handler={
//     get(){
//         return Reflect.get
//     }
// }
// 直接使用Reflect方法创建空代理
// const proxy = new Proxy(target,handler)
// const proxy = new Proxy(target,Reflect)

// 最终的代码
const handler ={
    get(targetObj,queryProperty,receiver){
        console.log(targetObj,queryProperty,receiver,666)
        let decoration =''
        if(queryProperty ==='foo'){
            decoration="???"
        }
        return Reflect.get(...arguments)+decoration
    }
}
const proxy = new Proxy(target,handler)
console.log(target.foo,1)
console.log(proxy,Reflect,2)
console.log(proxy.foo,3)
 
// 9.1.4 捕获器不变式
// const target ={
//     name:'wang'
// }
// Object.defineProperty(target,'foo',{
//     configurable:fasle,
//     writable:false,
//     value:'bar'
// })
// const handler ={
//     get(){
//         return 'qux'
//     }
// }
// const proxy = new Proxy(target,handler)
// console.dir(target)

// 9.1.5 可撤销代理
// const handler ={
//     get(){
//         return 'intercepted'
//     }
// }
// const {revoke,proxy}= Proxy.revocable(target,handler)
// console.log(proxy.foo)
// console.log(target.foo)
// revoke()
// console.log(proxy.foo)


const o = {}
// try{
//     Object.defineProperty(o,'color',{value:'red'})
//     console.log('success!!')
// }catch{
//     console.log('fail--')
// }
// console.log(Reflect)

// 反射返回的是true/false
// if(Reflect.defineProperty(o,'color',{value:'red'})){
//     console.log(Reflect.defineProperty(o,'color',{value:'red'}))
// }else{
//     console.log(false)
// }

// 代理另一个代理
// const firstProxy = new Proxy(target,{
//     set(){
//   Object.defineProperty(target,'name',{
//     value:'wang'
//   })
//     },
//     get:Reflect.get
// })
// const secondProxy = new Proxy(firstProxy,{
//     get: Reflect.get 
// })

// const {proxy,revoke} = Proxy.revocable(target,secondProxy)
// revoke()
// console.log(proxy,firstProxy,secondProxy)


// console.log(target.thisValueEqualsProxy())
// console.log(firstProxy.thisValueEqualsProxy(),secondProxy.thisValueEqualsProxy(),'------')

// const wm = new WeakMap()
// class User{
//     constructor(userId){
//         wm.set(this,userId)
//     }
//     set id(userId){
//         wm.set(this,userId)
//     }
//     get id(){
//         return wm.get(this)
//     }
// }
// const user = new User(123,456,789)
// console.log(user,wm)
// const userInstanceProxy = new Proxy(user,{})
// console.log(userInstanceProxy)

// const dateTarget = new Date()
// const proxy =new Proxy(target,{})
// console.log(proxy instanceof Date)
// proxy.getDate()

 
