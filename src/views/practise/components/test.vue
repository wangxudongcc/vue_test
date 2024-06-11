<template>
    <div>
       <h2> 当前的n值是:<span v-text="n"></span></h2>
       <h2>放大10倍的n值是：<span v-big="n"></span></h2>
       <button @click="n++">点我n+1</button>
       {{ p1}}-'999'
       <h2 :style="{opacity}">欢迎欢迎</h2>
       {{ change() }}
    </div>
  
</template>
<script>
let a;
export default {
 
    name:'Test',
    data(){
        return{
            n:Math.floor((Math.random())*100)/100,
            p1:NaN,
            opacity:1,
            a:'',
        }
    },
    directives:{
        big(e,b){
            // console.log(b,'e,b')
            e.innerText = b.value*10
        },
        
    },
    methods:{
        change(){
            a = setInterval(()=>{
                console.log('this.opacity: ',  this.opacity)
                this.opacity -=0.01
                if(this.opacity <= 0){
                    this.opacity = 1
                }
                // clearInterval(a);clearInterval(a);
            },16)
            console.log(3, a)
        }
    },
    beforeUpdate() {
        console.log(1,a)

        // clearInterval(a);
    },
    updated() {
        console.log(2, a)
        clearInterval(a);
    }
}
</script>