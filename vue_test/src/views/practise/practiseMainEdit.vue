
<template>
  <div>
    <name-list />
    <phone-list />
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
    <span v-for="(n, i) in personList" :key="i">{{ n[0] }}</span><br />
    <div style="margin: 15px 0;">
      行业：<el-input :value="cityOptions"></el-input>
    </div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
import nameList from "./components/nameList.vue";
import phoneList from "./components/phoneList.vue";
import dataForm from "./data";
export default {
  name: 'practiseMainEdit',
  data() {
    return {
      nameList1: [{ value: '' }],
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      phoneNumberList: [{ value: '18713102810' }],
      personList: [
        { name: 'wang', phoneNumber: 18713102810 },
        { name: '董欢迎', phoneNumber: 15530717659 },
        { name: 'wang', phoneNumber: 13102855460 },
        { name: '王旭东', phoneNumber: 13292874554 }],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: ['上海', '北京', '广州', '深圳'],
      isIndeterminate: true
    };

  },
  components: {
    nameList,
    phoneList
  },

  created() {
    console.log(dataForm, 'dataForm')
    console.log(dataForm.yesOrNoData(), this.phoneNumberList[this.phoneNumberList.length - 1].value)
  },
  computed: {
    phoneAmount() {
      return this.phoneNumberList.length
    },
    cityOptions() {
      let i = '';
      this.checkedCities.forEach((item) => {
        i = i + item + ','
      })
      return i
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? ['上海', '北京', '广州', '深圳'] : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    /**
     * @param {
     *   v-for 循环  (item,index) of items
     * 
     * } formName 
     */
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
      if (formName == 'nameList1') {
        this.nameList1 = [{ value: '' }]
      } else if (formName == 'phoneNumberList') {
        this.phoneNumberList = [{ value: '' }]
      }
      // this.$refs[formName].resetFields();
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
      this.nameList1.push({
        value: '',
        key: Date.now()
      });
    },
    xxx() {
      let b = this.personList.filter(item => item.name.match(/wang/))
      // let a = this.items.filter(item=> item.message.match(/Foo/))
      // console.log(a,'a')
      console.log(b, 'b')

    },
  }
}
</script>

<style scoped>
::v-deep .el-form-item.submitTable>label {
  font-size: 12px
}
</style>
 
