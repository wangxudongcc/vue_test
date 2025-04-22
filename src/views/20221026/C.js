export default{
    created () {
        console.log('混入对象的钩子被调用，此代码写在了混入里')
        this.sixsixsix(6)
      }
,
methods: {
    foo: function () {
      console.log('foo在混入里')
    },
    conflicting: function () {
      console.log('from mixin在混入里')
    }
  }
}