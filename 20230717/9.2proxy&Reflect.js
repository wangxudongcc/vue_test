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
