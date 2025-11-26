<template>
  <div class="name-list-compact">
    <el-form ref="nameList" label-width="60px" class="demo-dynamic" style="margin: 0; padding: 0; width: 100%;">
      <!-- 姓名输入行 -->
      <el-row v-for="(item, index) in nameList" :key="index" style="margin-bottom: 5px;">
        <el-col :span="18">
          <el-form-item style="margin-bottom: 0; margin-left: 60px;">
            <el-input v-model="item.value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" style="text-align: right;">
          <el-button type="text" @click="deleteName(index)">删除</el-button>
        </el-col>
      </el-row>
      <!-- 操作按钮行 -->
      <el-row style="margin-top: 5px;">
        <el-col :span="24" style="text-align: right;">
          <el-button @click="addName">新增姓名</el-button>
          <el-button @click="$emit('resetForm','nameList')">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "nameList",
  props:{
    nameList:{
      type:Array,
      default:()=>[]
    }
  },
  methods:{
     //增加姓名
    addName() {
      this.$emit("changeList", "nameList", this.nameList.length, 0, {
        value: '',
        key: Date.now()
      });
    },
    deleteName(index) {
      this.$emit("changeList", "nameList", index, 1);
    }
  }
}

</script>