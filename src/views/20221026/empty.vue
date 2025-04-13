<template>
  <div class="box">
    <div class="container">
      <div class="circle"></div>
      <sixsixsix></sixsixsix>
      <internalRelations></internalRelations>
      <callVsBind></callVsBind>
      <form1></form1>
    </div>
  </div>
</template>

<script>
import sixsixsix from './666.vue';
import internalRelations from '@/views/20221026/internalRelations.vue';
import callVsBind from '@/views/20221026/callVsBind.vue';
import form1 from '@/views/20221026/form.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    sixsixsix,
    internalRelations,
    callVsBind,
    form1
  },
  mounted() {
    let a = [["name", "wang"], ["10"], ["age", "19", "12"], ["sex", "男"]];
    console.log(Object.fromEntries(a));
    console.log(Object.entries(a));
  },
  methods: {

  }
}</script>

<style>
.box {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-image: radial-gradient(transparent 1px, #fff 2px);
  background-size: 9px 9px;
  backdrop-filter: blur(9) saturate(50%);
}

.container {
  padding-top: 40px;
}

.circle {
  height: 60px;
  background-color: red;
}
</style>
