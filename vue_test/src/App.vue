/* eslint-disable */
<template>
  <div id="app">
    <el-form :model="personData" ref="personData" label-width="100px" class="demo-dynamic">
      <el-form-item prop="name" label="姓名" :rules="[
        { required: true, message: '请输入姓名', trigger: 'blur' } 
      ]">
        <el-input v-model="personData.name"></el-input>
      </el-form-item>
      <el-form-item v-for="(item, index) of personData.domains" :label="'手机号码' + index" :key="index"
        :prop="'phone.' + index" 
        :rules="{required: true, message: '手机号码不能为空', trigger: 'blur'}">
        <el-input v-model="item.value"></el-input><el-button @click.prevent="removeDomain(item)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('personData')">提交</el-button>
        <el-button @click="addDomain">新增</el-button>
        <el-button @click="resetForm('personData')">重置</el-button>
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
        name:'',
        phone: [{value:''}]
      }
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
    removeDomain(item) {
      var index = this.personData.domains.indexOf(item)
      if (index !== -1) {
        this.personData.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.personData.domains.push({
        value: '',
        key: Date.now()
      });
    }
  }
};
</script>
