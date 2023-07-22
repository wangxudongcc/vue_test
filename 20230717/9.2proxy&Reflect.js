<<<<<<< HEAD
const myTarget = {};
const proxy = new Proxy(myTarget, {
  get(target, property, receiver) {
    return Reflect.get(...arguments);
  },
  set(target, property, value, receiver) {
    return Reflect.get(...arguments);
  },
  has(target, property) {
    return Reflect.has(...arguments);
  },
});
proxy.foo = "a"
console.log( proxy.foo = "a");
console.log(proxy.foo);
console.log("foo" in proxy);
console.log("foo" in myTarget);
=======
const myTarget = {};
const proxy = new Proxy(myTarget, {
  get(target, property, receiver) {
    return Reflect.get(...arguments);
  },
  set(target, property, value, receiver) {
    return Reflect.get(...arguments);
  },
  has(target, property) {
    return Reflect.has(...arguments);
  },
});
proxy.foo = "a"
console.log( proxy.foo = "a");
console.log(proxy.foo);
console.log("foo" in proxy);
console.log("foo" in myTarget);
>>>>>>> 6a0780528c0c1f3bf90b064d45ce15c0dfd88d06
