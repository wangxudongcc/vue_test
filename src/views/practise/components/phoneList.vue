<template>
  <div>
    <el-form ref="phoneNumberList" label-width="90px" class="demo-dynamic"
      style="border-bottom:1px solid;margin:0px auto;width:80%">
      <el-row v-for="(item, index) in phoneNumberList" :key="item.key">
        <el-col :span="7">
          <el-form-item label='手机号码'>
            <el-input v-model="item.value"></el-input> </el-form-item>
        </el-col>
        <el-col :span="5">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="2">
          <el-button type="text" @click="deletePhone(index)">删除</el-button>
        </el-col>
        <!-- prevent 提交事件不再重载页面 -->
      </el-row>
      <el-form-item>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6"> <el-button @click="addPhone">新增手机号</el-button>
          <el-button @click="$emit('resetForm','phoneNumberList')">重置</el-button>
        </el-col>
      </el-form-item>
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
