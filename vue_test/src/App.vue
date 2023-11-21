
<template>
  <div id="app">
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
          <el-button type="text" @click.prevent="removeName(index)">删除</el-button>
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
      <el-row v-for="(item, index) in phoneNumberList" :key="item.key">
        <el-col :span="7">
          <el-form-item label='手机号码'>
            <el-input v-model="item.value"></el-input> </el-form-item>
        </el-col>
        <el-col :span="5">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="2">
          <el-button type="text" @click.prevent="removePhone(index)">删除</el-button>
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

    <el-form label-width="80px" class="demo-dynamic" style="margin:24px auto;width:80%">
      <el-row>
        <el-col :span="10">
          <el-form-item class="submitTable" label-width="auto" style="{ font-size: 10px ;color:'red'}"
            :label="labelJudge">
          </el-form-item>
        </el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
      </el-row>
      <el-row>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">&nbsp;</el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button type="primary" @click="submitForm('personList')">提 交</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// import ComponentOne from "./views/practise/components/componentOne.vue";
// import $eventBus from "./views/practise/components/eventBus";
import dataForm from "./views/practise/data.js";
export default {
  data() {
    return {
      nameList: [{ value: '' }],
      phoneNumberList: [{ value: '18713102810' }],
      personList: [
       { name: 'wang', phoneNumber: 18713102810 }, 
       { name: '董欢迎', phoneNumber: 15530717659 }, 
       { name: 'wang', phoneNumber: 13102855460 },
       { name: '王旭东', phoneNumber: 13292874554 }]
    };
  },
  components: {
    // ComponentOne,
  },
  created(){
console.log(dataForm,'dataForm')
console.log(dataForm.yesOrNoData(), this.phoneNumberList[this.phoneNumberList.length-1].value)
},
  computed: {
    labelJudge() {
      // let labelInfo;
      // this.personList.forEach((item, index) => {
      //   console.log(item, index, 'item,index')
      //   if (item.phoneNumber==this.phoneNumberList[this.phoneNumberList.length-1].value) {
      //     labelInfo= '手机号：' + this.personList[index].phoneNumber + '存在于本系统中,该用户名为' + item.name
      //   } else if (item.name==this.nameList[this.nameList.length-1].value) {
      //     labelInfo= item.name+'存在于本系统中,手机号为'+ item.phoneNumber 
      //   }else{
      //     labelInfo='需要填写手机号码或者姓名'
      //   }
      // })


      // let labelInfo = dataForm.yesOrNoData( this.phoneNumberList[this.phoneNumberList.length-1].value)
      
      // this.personList.find(item => item.phoneNumber == this.phoneNumberList[this.phoneNumberList.length-1].value);
      // let personNameItem = this.personList.find(item =>item.name == this.nameList[this.nameList.length-1].value);
      // if (personItem) {
      //   labelInfo= '手机号：' + personItem.phoneNumber + '存在于本系统中,该用户名为' + personItem.name
      // }else if(personNameItem){
      //   labelInfo=
      // }else{
      //     labelInfo='需要填写手机号码或者姓名'
      //   }
      // return labelInfo
      return false
    },
    phoneAmount() {
      return this.phoneNumberList.length
    }

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
      if (formName == 'nameList') {
        this.nameList = [{ value: '' }]
      } else if (formName == 'phoneNumberList') {
        this.phoneNumberList = [{ value: '' }]
      }
      // this.$refs[formName].resetFields();
    },
    // 移除手机号
    removePhone(index) {
      this.phoneNumberList.splice(index, 1)

    },
    // 移除姓名
    removeName(index) {
      this.nameList.splice(index, 1)
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
        value: '',
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
 
