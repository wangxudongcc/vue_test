<template>
  <div>
    <div style="width: 450px;">
      <el-input v-model="totalNum" width="20%" maxlength="12" show-word-limit>
        <template slot="prepend">请输入要转换的数字：</template>
      </el-input>
    </div>
    <span>{{ changeToChinese(totalNum) }}</span>
   
  </div>
</template>
<script>
  
  export default {
  name: "index",
  data() {
    return {
      totalNum: "",
    };
  },
  components: {
     
  },

  created() {},
  computed: {},
  methods: {
    changeToChinese(n) {
      var fraction = ["角", "分"];
      var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
      var unit = [
        ["元", "万", "亿"],
        ["", "拾", "佰", "仟"],
      ];
      var head = n < 0 ? "欠" : "";
      n = Math.abs(n);
      var s = "";
      for (let i = 0; i < fraction.length; i++) {
        s += (
          digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
        ).replace(/零./, "");
      }
      s = s || "整";
      n = Math.floor(n);
      for (let i = 0; i < unit[0].length && n > 0; i++) {
        var p = "";
        for (var j = 0; j < unit[1].length && n > 0; j++) {
          p = digit[n % 10] + unit[1][j] + p;
          n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
      }
      return (
        head +
        s
          .replace(/(零.)*零元/, "元")
          .replace(/(零.)+/g, "零")
          .replace(/^整$/, "零元整")
      );
    },
  },
};
</script>

<style scoped>
::v-deep .main-down {
  margin-left: 20%;
}
::v-deep .el-input-group__append,
::v-deep .el-input-group__prepend {
  color:rgb(26, 65, 193);
  font-size:16px
}
</style>
