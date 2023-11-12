<template>
  <div id="app">
    <span @click="xxx">输出emit</span>
    <el-button @click="showOrHide" :autofocus="autof" plain>显示隐藏</el-button>
    <component-one v-if="!qufan" ref="templateOne" />
  </div>
</template>
<script>
import ComponentOne from "./views/practise/components/componentOne.vue";
import $eventBus from "./views/practise/components/eventBus";
export default {
  data() {
    return {
      qufan: false,
      autof: false,
    };
  },
  components: {
    ComponentOne,
  },
  methods: {
    showOrHide() {
      this.qufan = !this.qufan;
    },
    xxx() {
      console.log("执行xxx");
      $eventBus.$emit("_zizujian", [{}, 666], "4");
    },
  },
};
</script>
