<template>
  <!-- <div id="root">
        <h1>学校信息</h1>
        <h2>河北：{{name}}</h2>
        <h2>石家庄{{address}}</h2>
        <button @click="addSex">++++++</button>
        <h1>学生信息</h1>
        <h2 >姓名：{{student.name}}</h2>
        <h2 v-if="student.sex">性别：{{student.sex}}</h2>
        <h1>校长是：{{leader}}</h1>
         <h2>年龄：{{student.age.rAge}}</h2> 
   <h2>
            朋友们
        </h2>
        <ul>
            <li v-for="(f,index) in student.friends" :key ="index">
                {{f.name}}--{{f.age}}
            </li>
        </ul>
    </div>  -->
  <!-- <div id="root">
        <ul>
            <li v-for="a,index in persons" >{{a}}-{{index}}</li>
        </ul>
        <ul>
            <li v-for="(value,key) in str" :key="key" >{{value}}-{{key}}</li>
        </ul>
        <ul>
            <li v-for="(number,index) of 5" :key="index" >{{number}}-{{index}}</li>
        </ul>
        <button @click="changeWeather">切换天气</button>
    </div> -->
</template>

<script type="text/javascript">
Vue.config.productionTip = false;
const vm = new Vue({
  el: "#root",
  data: {
    // name:'河北',
    // address:'石家庄',
    // student:{
    //     name:'王',
    //     address:'北京高碑店',
    // },
    // friends:[{name:'jerry',age:'35'},{name:'tony',age:36}]
    persons: [
      { id: "001", name: "张三", age: "18" },
      { id: "002", name: "里斯", age: "19" },
      { id: "003", name: "王武", age: "198" },
    ],
    car: {
      name: "aodiA8",
      price: "70W",
      color: "黑色",
      brand: "dazhong",
    },
    str: "hello",
  },
  methods: {
    // addSex(){
    //     this.$set(this.persons,'address','beijing')
    // }
  },
  computed: {},
  watch: {
    isHot: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log("isHot被修改了", newValue, oldValue);
      },
    },
  },
});
vm.$watch("isHot", {
  handle(newValue, oldValue) {},
});
</script>
