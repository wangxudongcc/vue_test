
<template>
  <div id="app">
    <el-form  ref="nameList" label-width="80px" class="demo-dynamic"
      style="border-bottom:1px solid black;margin:50px auto;width:80%">
      <el-row>
        <el-col :span="6">
          <el-form-item v-for="(item, index) in nameList" label="姓名" :key="item.key" :index="index"
          :prop="item.value" >
            <el-input v-model="item.value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="2">
          <el-button type="text" @click.prevent="removeName(item)">删除</el-button>
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

    <el-form ref="phoneNumberList" label-width="90px" class="demo-dynamic"
      style="border-bottom:1px solid;margin:0px auto;width:80%">
      <el-row>
        <el-col :span="7">
          <el-form-item v-for="(item, index) in phoneNumberList" 
          :label="'手机号码' + index" 
          :key="item.key"
          :prop="item.value">
            <el-input v-model="item.value"></el-input> </el-form-item>
        </el-col>
        <el-col :span="5">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="2">
          <el-button type="text" @click.prevent="removePhone(item)">删除</el-button>
        </el-col>
      </el-row>
      <el-form-item>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6"> <el-button @click="addPhone">新增手机号</el-button>
          <el-button @click="resetForm('phoneNumberList')">重置</el-button>
        </el-col>
      </el-form-item>
    </el-form>

    <el-form  label-width="80px" class="demo-dynamic"
    style="margin:24px auto;width:80%" >
    <!-- :model="phoneNumberAmount" -->
      <el-row>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="10" >
          <el-form-item
          class="submitTable"
          label-width="140px"
          style="{ font-size: 10px ;color:'red'}"
          label="'王旭东' + '留存手机号个数'" >
            <el-input v-model="phoneNumberAmount"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
      </el-row>
      <el-row>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6"> 
        <el-form-item>
        <el-button type="primary" @click="submitForm('phoneNumberAmount')">提 交</el-button>
        </el-form-item>
      </el-col>
      </el-row>
    </el-form>

  </div>
</template>
<script>
// import ComponentOne from "./views/practise/components/componentOne.vue";
// import $eventBus from "./views/practise/components/eventBus";
export default {
  data() {
    return {
        nameList: [{value:''}],
        phoneNumberList: [{value:''}],
        phoneNumberAmount: '1'
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
      if(formName=='nameList'){
        this.nameList= [{value:''}]
      }else if(formName=='phoneNumberList'){
        this.phoneNumberList= [{value:''}]
      }
      // this.$refs[formName].resetFields();
    },
    // 移除手机号
    removePhone(item) {
      var index = this.phoneNumberList.indexOf(item)
      if (index !== -1) {
        this.phoneNumberList.splice(index, 1)
      }
    },
    // 移除姓名
    removeName(item) {
      var index = this.nameList.indexOf(item)
      if (index !== -1) {
        this.nameList.splice(index, 1)
      }
    },
    //增加手机号
    addPhone() {
      this.phoneNumberList.push({
        value: '',
        key: Date.now()
      });
    },
    //增加姓名
    addName() {
      this.nameList.push({
        value:'',
        key: Date.now()
      });
    }
  }
}
</script>

<style scoped>
::v-deep .el-form-item.submitTable>label {
  font-size: 12px 
}
</style>
 
