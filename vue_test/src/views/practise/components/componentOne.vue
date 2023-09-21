<template>
  <div>
    <div v-if="flag" ref="asdf">输出$on</div>
  </div>
</template>

<script>
import $eventBus from "./eventBus";

export default {
  name: "ComponentOne",
  data() {
    return {
      name: "111",
      flag: true,
      formData: {},
    };
  },
  beforeDestroy() {
    this._zizujian();
  },
  methods: {
    _zizujian() {
      let that = this;
      $eventBus.$off("_zizujian");
      $eventBus.$on("_zizujian", (rucan1, rucan2) => {
        that.formData = rucan1;
        that.name = rucan2;
      })
    }
  }
};
</script>
