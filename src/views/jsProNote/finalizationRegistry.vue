<template>

</template>
<script>
  let registry = new FinalizationRegistry(data => {
            console.log(data)
        })
        function foo() {
            let a = {
                name: 'hello'
            }
            registry.register(a, { msg: 'a 对象被回收了' })

            a = null
        }
        foo()
        setInterval(function () {
            console.log('hh')
        }, 1000)
</script>