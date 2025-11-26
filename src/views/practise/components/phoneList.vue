<template>
  <div>
    <el-form ref="phoneNumberList" label-width="80px" class="demo-dynamic" style="margin: 0; padding: 0; width: 100%;">
      <!-- 手机号输入行 -->
      <el-row v-for="(item, index) in phoneNumberList" :key="item.key" style="margin-bottom: 5px;">
        <el-col :span="18">
          <el-form-item style="margin-bottom: 0; margin-left: 80px;">
            <el-input v-model="item.value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" style="text-align: right;">
          <el-button type="text" @click="deletePhone(index)">删除</el-button>
        </el-col>
      </el-row>
      <!-- 操作按钮行 -->
      <el-row style="margin-top: 5px;">
        <el-col :span="24" style="text-align: right;">
          <el-button @click="addPhone">新增手机号</el-button>
          <el-button @click="$emit('resetForm','phoneNumberList')">重置</el-button>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script>

export default {
  name: "phoneList",
  props:{
    phoneNumberList:{
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
       
    }
  },
  methods: {
    //增加手机号
    addPhone() {
      this.$emit("changeList", "phoneNumberList", this.phoneNumberList.length, 0, {
        value: '',
        key: Date.now()
      });
    },
    deletePhone(index) {
      this.$emit("changeList", "phoneNumberList", index, 1);
    }
  }
};
</script>
