<template>
  <div>
    <el-form ref="nameList" label-width="80px" class="demo-dynamic"
      style="border-bottom:1px solid black;margin:50px auto;width:80%">
      <el-row v-for="(item, index) in nameList" :key="item.key">
        <el-col :span="6">
          <el-form-item label="姓名">
            <el-input v-model="item.value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="2">
          <el-button type="text" @click="nameList.splice(index, 1)">删除</el-button>
        </el-col>
      </el-row>
      <el-form-item>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6"><el-button @click="addName">新增姓名</el-button>
          <el-button @click="resetForm('nameList')">重置</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "nameList",
}
</script>