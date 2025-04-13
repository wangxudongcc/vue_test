<template>
    <div></div>
</template>
<!-- <script>
        ~function(){
            function call(context){
                context= context||window;
                let args = [],result;
                for(let i = 1;i<arguments.length;i++){
                    args.push(arguments[i]);
                }
                context.fn = this;
                context.fn(...args); 
                delete context.fn;
                
            }
            Function.prototype.call = call;
        }();
        let obj = {name:'obj'};
        function fn(){
            console.log(this);
        }
        fn.call(obj,10,20);
    </script> -->
<!-- <script>
        Function.prototype.myCall = function(context){
            context.fn = this;
            context.fn();
        }
        const obj = {
            value:1
        }
        function fn(value){
            value = 2;
            console.log(this);
            console.log(this.value)
        }
        fn.myCall(obj);
    </script> -->
<!-- <script>    
        !function(){
        function call (context){
            context = context || window;
            let args = [],result;
            for(let i = 1;i<arguments.length;i++){
        args.push(arguments[i]);
}
            context.fn = this;
            context.fn(...args);
            delete context.fn;
        }    
        Function.prototype.call = call;
        }();
        let obj = {name:'obj'};
        function fn(){
            console.log(this);
        }
        fn.call(obj,10,20);
        // fn(obj);
    </script> -->
<script>

export default {
    data() {
        return {
            obj: { name: 'obj' }
        }
    },
    mounted() {
        console.log('目前实在callVsBind.vue中')
        // !function () {
        //     function call(context) {
        //         context = context || window;
        //         let args = [];
        //         for (let i = 1; i < arguments.length; i++) {
        //             args.push(arguments[i]);
        //         }
        //         context.fn = this;
        //         context.fn(...args);
        //         delete context.fn;
        //     }
        //     Function.prototype.call = call;
        // }();
        // this.fn.call(this.obj);
    },
    methods: {
        fn() {
            console.log(this, '这是被改变的this')
        }
    }
}
</script>
