/* eslint-disable */
<template>
  <div id="app">
    <el-form :model="personData" ref="personData" label-width="100px" class="demo-dynamic">
      <el-form-item prop="name" label="姓名" :rules="[
        { required: true, message: '请输入姓名', trigger: 'blur' }]">
        <el-input v-model="personData.email"></el-input>
      </el-form-item>
      <el-form-item>
        
        <el-button @click="addPhone">新增姓名</el-button>
        <el-button @click="resetForm('personData')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-form :model="personData" ref="personData" label-width="100px" class="demo-dynamic">
     
      <el-form-item v-for="(item, index) in personData.phone" :label="'手机号码' + index" :key="item.key"
        :prop="'phone.' + index + '.value'" :rules="{
          required: true, message: '手机号码不能为空', trigger: 'blur'
        }">
        <el-input v-model="item.value"></el-input><el-button @click.prevent="removePhone(item)">删除</el-button>
      </el-form-item>
      <el-form-item>
        
        <el-button @click="addPhone">新增手机号</el-button>
        <el-button @click="resetForm('personData')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-form :model="personData" ref="personData" label-width="100px" class="demo-dynamic">
      <el-form-item prop="name" label="姓名" :rules="[
        { required: true, message: '请输入姓名', trigger: 'blur' }]">
        <el-input v-model="personData.email"></el-input>
      </el-form-item>
      <el-form-item   :label="'王旭东'+'留存手机号个数'"  >
        <el-input v-model="numberPhone"></el-input> 
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('personData')">提交</el-button>
        
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import ComponentOne from "./views/practise/components/componentOne.vue";
// import $eventBus from "./views/practise/components/eventBus";
export default {
  data() {
    return {
      personData: {
        phone: [{
          value: ''
        }],
        email: ''
      },
      numberPhone:'1'
    };
  },
  components: {
    // ComponentOne,
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removePhone(item) {
      var index = this.personData.phone.indexOf(item)
      if (index !== -1) {
        this.personData.phone.splice(index, 1)
      }
    },
    addPhone() {
      this.personData.phone.push({
        value: '',
        key: Date.now()
      });
    }
  }
}
</script>

