const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   get(target, property, receiver) {
//     return Reflect.get(...arguments);
//   },
//   set(target, property, value, receiver) {
//     return Reflect.get(...arguments);
//   },
//   has(target, property) {
//     return Reflect.has(...arguments);
//   },
// });
// proxy.foo = "a"
// console.log( proxy.foo = "a");
// console.log(proxy.foo);
// console.log("foo" in proxy);
// console.log("foo" in myTarget);

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   get(target, property, receiver) {
//     return Reflect.get(...arguments);
//   },
//   set(target, property, value, receiver) {
//     return Reflect.get(...arguments);
//   },
//   has(target, property) {
//     return Reflect.has(...arguments);
//   },
// });
// proxy.foo = "a"
// console.log( proxy.foo = "a");
// console.log(proxy.foo);
// console.log("foo" in proxy);
// console.log("foo" in myTarget);

// const proxy = new Proxy(myTarget,{
//   defineProperty(target,property,descriptor,a){
//     console.log(target,property,descriptor,a,'defineProperty()')
//     return Reflect.defineProperty(...arguments)
//   }
// })
// Object.defineProperty(proxy,'foo',{value:'bar'})

// getOwnPropertyDescriptor 返回四个参数configurable,enumerable,value,writable所对应的值
myTarget.foo = "bar";
// const proxy = new Proxy(myTarget,{
//   getOwnPropertyDescriptor(target,property){
//     console.log(target,property,'getOwnPropertyDescriptor()')
//     return Reflect.getOwnPropertyDescriptor(...arguments)
//   }
// })
// console.log(Object.getOwnPropertyDescriptor(proxy,'foo'))

// deleteProperty
// const proxy = new Proxy(myTarget,{
//   deleteProperty(target,property){
//     console.log(target,property,'deleteProperty()')

//     return Reflect.deleteProperty(...arguments)
//   }
// })
// delete proxy.foo
// console.log(proxy,myTarget)
// console.log(Object.deleteProperty(proxy,'foo'))

// ownKeys
//  const proxy = new Proxy(myTarget,{
//   ownKeys (target){
//       console.log(target,'ownKeys()')
//       return Reflect.ownKeys(...arguments)
//     }
//   })
//   console.log(Object.keys(proxy,{a:'1'}))
//   Object.getOwnPropertyNames(proxy)
//   Reflect.ownKeys(proxy)

// getPrototypeOf 获取了类似Object 原型链中的内容
// const proxy = new Proxy(myTarget, {
//   getPrototypeOf(target) {
//     console.log(target, "getPrototypeOf()");
//     return Reflect.getPrototypeOf(...arguments);
//   },
// });

// Object.getPrototypeOf(proxy);
// console.log(Object.prototype.isPrototypeOf(proxy))
// console.log(proxy instanceof Object)


