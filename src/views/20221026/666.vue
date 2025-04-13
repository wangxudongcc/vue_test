<template>
  <div style="margin: 30px 30px" id="someElement" @click="assignHandler">
    <div id="box" class="box" @click="boxClick">
      <i class="dot1"></i>
      <span class="line"></span>
      <i class="dot2"></i>
    </div>
    <br />
    <button id="button">随机两个点</button>
    这是：<input type="text" @click="boxInput">
  </div>
</template>
<script src="./A.js"></script>

<script>
export default {
  props: ['title'],
  data() {
    return {
      // title: '666'
    } 
  },
  mounted() {
    console.log(this.title,'title',this.$event) // 可以获取到dom元素
    console.log(this.$listeners,'$listeners')
    console.log(this.$attrs,'$attrs')
    console.log(this.$slots,'$slots')
    console.log(this.$props,'$props')
  },
  methods: {
    boxClick(){
      let box = document.getElementById("box");
      box.style.setProperty("--x1", Math.round(150 * Math.random()));
      box.style.setProperty("--y1", Math.round(150 * Math.random()));
      box.style.setProperty("--x2", 150 + Math.round(150 * Math.random()));
      box.style.setProperty("--y2", Math.round(150 * Math.random()));
    },
    assignHandler(){
    let element = document.getElementById('someElement')
    let id = element.id
    console.log(id)
    element = null
    },
    boxInput(){
      this.$emit('sixsixsix1', '666')
    }
  }
}
</script>
<style scoped>
.box {
  max-width: 360px;
  height: 150px;
  border: 1px solid red;
  transform: rotate(asin(1.5));
  position: relative;
  --p1x: calc(var(--x1) * 1px);
  --p1y: calc(var(--y1) * 1px);
  --p2x: calc(var(--x2) * 1px);
  --p2y: calc(var(--y2) * 1px);
}

.box>i {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: currentColor;
}

.dot1,
.line {
  left: var(--p1x);
  top: var(--p1y);
}

.dot2 {
  left: var(--p2x);
  top: var(--p2y);
}

.line {
  position: absolute;
  border-top: 1px solid;
  width: 100px;
  width: hypot(var(--p2y) - var(--p1y), var(--p2x) - var(--p1x));
  /* hypot函数目前仅Safari浏览器支持 */
  transform-origin: left bottom;
  transform: rotate(atan((var(--y2) - var(--y1)) / (var(--x2) - var(--x1))));
}
</style>
