<template>
  <div>
    <el-button
      v-for="item in list" :key="item.id"
      :class="item.className"
      :type="item.typeName"
    >
    </el-button>

    <!-- <el-button class="el-icon-bicycle" :type="list[0]"></el-button>
    <el-button class="el-icon-edit" :type="list[1]"></el-button>
    <el-button class="el-icon-bicycle" :type="list[2]"></el-button>
    <el-button class="el-icon-bicycle" :type="list[3]"></el-button>
    <el-button class="el-icon-bicycle" :type="list[4]"></el-button>
    <el-button class="el-icon-ship" round :type="list[5]"></el-button>
    <el-button class="el-icon-heavy-rain" :type="list[6]"></el-button>
    <el-button class="el-icon-food" :type="list[7]"></el-button> -->
    <br>
    <el-button class="el-icon-heavy-rain" @click="start()"></el-button>
    <el-button class="el-icon-food" @click="stop()"></el-button>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonName: "保存",
      list: [],
      timer: null,
    };
  },
  created() { },
  mounted() {  },
  methods: {
    typeColor() {
      // console.log(parseInt(Math.random()*10))
      let typeColorNumber = parseInt(Math.random() * 10)
      if (typeColorNumber < 2) {
        return 'primary'
      } else if (typeColorNumber < 4) {
        return 'warning'
      }else if (typeColorNumber < 6) {
        return 'success'
      }else if (typeColorNumber < 8) {
        return 'danger'
      }else if (typeColorNumber < 10) {
        return 'info'
      }
    },
    className() {
      // console.log(parseInt(Math.random()*10))
      let typeColorNumber = parseInt(Math.random() * 10)
      if (typeColorNumber < 2) {
        return 'el-icon-bicycle'
      } else if (typeColorNumber < 4) {
        return 'el-icon-edit'
      }else if (typeColorNumber < 6) {
        return 'el-icon-ship'
      }else if (typeColorNumber < 8) {
        return 'el-icon-heavy-rain'
      }else if (typeColorNumber < 10) {
        return 'el-icon-food'
      }
    },
    start() {
      for(let i = 0; i < 8; i++) {
          this.$set(this.list, i, {
            id: i,
            typeName: this.typeColor(),
            className: this.className(),
          });
        }
      this.timer = setInterval(() => {
        for(let i = 0; i < 8; i++) {
          this.$set(this.list, i, {
            id: i,
            typeName: this.typeColor(),
            className: this.className(),
          });
        }
      }, 2000);
    },
    stop() {
      clearInterval(this.timer)
    },
    // typeColor2(){
    //   return this.typeColor();
    // }
    open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
  }
};
</script>

<style scoped></style>
