<template>
  <div>
    <div v-if="flag" ref="asdf">输出$on</div>
  </div>
</template>

<script>
import $eventBus  from "./eventBus"
-------------

export default {
name:"ComponentOne",
data(){
  return {
    name :'111',
    flag:true
  }
  },
created(){
  console.log("created")
},
  destroyed() {
 console.log("destroyed")
    },
  methods: {
    _zizujian(){  
      // this.flag=!this.flag
      console.log(this,"执行_zizujian")
      console.log("输出$off")
      $eventBus.$off("_zizujian");

      $eventBus.$on("_zizujian", (rucan1, rucan2) => {
        console.log(typeof rucan1, typeof rucan2)
      })
   
     
    }
  
  },
}

</script>
