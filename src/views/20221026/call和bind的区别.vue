 
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
    !function(){
        function call(context){
            context = context||window;
            let args = [],result;
            for(let i = 1;i<arguments.length;i++){
                args.push(arguments[i]);
            }
            context.fn = this;
            context.fn(...args);
            delete context.fn;
        }
        Function.prototype.call = call;
    }()
    let obj = {name:'obj'};
    function fn(){
        console.log(this,这是被改变的this)
    }
    fn.call(obj,10,20);
</script>
