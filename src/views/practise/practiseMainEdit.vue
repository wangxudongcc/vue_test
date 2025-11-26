
<template>
  <div class="practise-main-edit">
    <!-- 主要功能区域 - 一行展示 -->
    <div class="main-functions-row">
      <!-- 点我n+1功能（调整大小和位置） -->
      <div class="function-card test-card" data-title="点我n+1功能">
        <test></test>
      </div>
      
      <!-- 新增信息与提交功能（紧凑布局） -->
      <div class="function-card info-submit-card" data-title="新增信息与提交">
        <div class="info-form-compact">
          <!-- 人员信息输入区域 -->
          <div class="input-section">
            <div v-for="(person, index) in personList" :key="person.key" class="person-row">
              <div class="form-row">
                <label class="form-label" >姓名：</label>
                <el-input 
                  v-model="person.name" 
                  size="small" 
                  style="flex: 1; min-width: 140px; margin: 5px 8px 5px 0;"
                  placeholder="请输入姓名"
                ></el-input>
                <label class="form-label">手机号：</label>
                <el-input 
                  v-model="person.phone" 
                  size="small" 
                  style="flex: 1; min-width: 140px; margin: 5px 8px 5px 0;"
                  placeholder="请输入手机号"
                ></el-input>
                <el-button 
                  type="text" 
                  @click="deletePerson(index)" 
                  size="small" 
                  style="color: red;"
                >删除</el-button>
              </div>
            </div>
            <div class="form-row action-row">
              <div class="form-label"></div>
              <div style="margin-left: auto;">
                <el-button type="primary" @click="addPerson" size="small" style="margin-right: 8px;">新增信息</el-button>
                <el-button @click="resetForm" size="small">重置</el-button>
              </div>
            </div>
          </div>
          
          <!-- 提交按钮 -->
          <div class="submit-section">
            <el-button type="primary" @click="submitForm" class="submit-btn">提 交</el-button>
          </div>
        </div>
      </div>
      
      <!-- 选择与数据展示功能组合 -->
      <div class="function-card combined-card" data-title="选择与数据展示">
        <!-- 选择功能区域 -->
        <div class="card-section">
          <h4 class="section-title">选择功能</h4>
          <!-- 城市选择 -->
          <div class="select-item">
            <label>城市：</label>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
            </el-checkbox-group>
          </div>
          
          <!-- 随机选择 -->
          <div class="select-item">
            <label>随机选择：</label>
            <a-select 
              v-model="selectedValue" 
              style="width: 120px;"
              @change="handleSelectChange"
              placeholder="请选择"
            >
              <a-select-option 
                v-for="item in randomOptions" 
                :key="item.value" 
                :value="item.value"
              >
                {{ item.label }}
              </a-select-option>
            </a-select>
          </div>
        </div>
        
        <!-- 数据展示区域（简化） -->
        <div class="card-section">
          <h4 class="section-title">数据展示</h4>
          <!-- 删除绿色背景框，只保留行业输入 -->
          <div class="industry-input">
            <label>行业：</label>
            <el-input :value="cityOptions" style="width: 180px;"></el-input>
          </div>
        </div>
      </div>
      
      <!-- 列表管理功能卡片（放在同一行） -->
      <div class="function-card list-management-card" data-title="列表管理功能">
        <!-- 增加按钮 -->
        <div class="list-management">
          <el-button type="primary" @click="addListItem" style="margin-bottom: 10px;">增加</el-button>
          
          <!-- 列表项 -->
          <div v-for="(item, index) in listItems" :key="item.id" class="list-item">
            <el-input 
              v-model="item.name" 
              placeholder="请输入内容" 
              size="small"
              style="width: 150px; margin-right: 10px;"
            ></el-input>
            <el-button 
              type="text" 
              @click="deleteListItem(index)" 
              size="small"
              style="color: red;"
            >删除</el-button>
          </div>
          
          <!-- 点我销毁按钮（删除最后一条） -->
          <div style="margin-top: 10px; text-align: right;">
            <el-button 
              type="danger" 
              @click="destroyLastItem" 
              size="small"
            >点我销毁</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 导入组件
import test from "./components/test.vue";
import dataForm from "./data";

// 组件定义
export default {
  name: 'practiseMainEdit',
  
  // 注册组件
  components: {
    test
  },

  // 数据定义
  data() {
    // 生成随机选项数据的工具函数
    const generateRandomOptions = () => {
      const labels = ['苹果', '香蕉', '橙子', '西瓜', '葡萄', '草莓', '桃子', '梨子', '芒果', '樱桃', '菠萝', '柠檬', '猕猴桃', '火龙果', '柚子', '石榴', '蓝莓', '覆盆子', '黑莓', '树莓'];
      return labels.map((label, index) => ({
        value: index + 1,
        label
      }));
    };

    return {
      // 自定义组件相关数据
      personList: [{ name: '', phone: '18713102810', key: Date.now() }],
      
      // 测试数据
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      
      // 原始人员列表数据
      originalPersonList: [
        { name: 'wang', phoneNumber: 18713102810 },
        { name: '董欢迎', phoneNumber: 15530717659 },
        { name: 'wang', phoneNumber: 13102855460 },
        { name: '王旭东', phoneNumber: 13292874554 }
      ],
      
      // 城市选择相关数据
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: ['上海', '北京', '广州', '深圳'],
      isIndeterminate: true,
      
      // 随机选择相关数据（ant-design-vue）
      randomOptions: generateRandomOptions(),
      selectedValue: undefined,
      
      // 列表管理功能数据
      listItems: [
        { id: 1, name: '' }
      ]
    };
  },

  // 生命周期钩子
  created() {
    console.log(dataForm, 'dataForm')
    console.log(dataForm.yesOrNoData(), this.phoneNumberList[this.phoneNumberList.length - 1].value)
  },

  // 计算属性
  computed: {
    // 计算电话号码数量
    phoneAmount() {
      return this.phoneNumberList.length
    },
    
    // 计算选中的城市选项
    cityOptions() {
      let i = '';
      this.checkedCities.forEach((item) => {
        i = i + item + ','
      })
      return i
    }
  },

  // 方法定义
  methods: {
    // 城市选择相关方法
    handleCheckAllChange(val) {
      this.checkedCities = val ? ['上海', '北京', '广州', '深圳'] : [];
      this.isIndeterminate = false;
    },
    
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    
    // 表单相关方法
    submitForm() {
      alert('submit!');
    },
    
    // 人员信息相关方法
    addPerson() {
      this.personList.push({
        name: '',
        phone: '',
        key: Date.now()
      });
    },
    
    deletePerson(index) {
      if (this.personList.length > 1) {
        this.personList.splice(index, 1);
      }
    },
    
    // 重置表单内容，只清空输入框，不删除
    resetForm() {
      this.personList.forEach(person => {
        person.name = '';
        person.phone = '';
      });
    },
    
    // 测试方法
    xxx() {
      let b = this.originalPersonList.filter(item => item.name.match(/wang/))
      console.log(b, 'b')
    },
    
    // 随机选择相关方法（ant-design-vue）
    handleSelectChange(value) {
      // 根据value找到对应的label
      const selectedOption = this.randomOptions.find(option => option.value === value);
      if (selectedOption) {
        // 检查label长度是否为2
        if (selectedOption.label.length === 2) {
          // 弹出提示
          this.$message.success('恭喜你！');
        }
      }
    },
    
    // 列表管理功能方法
    // 增加列表项
    addListItem() {
      this.listItems.push({
        id: this.listItems.length + 1,
        name: ''
      });
    },
    
    // 删除列表项
    deleteListItem(index) {
      this.listItems.splice(index, 1);
    },
    
    // 销毁最后一条列表项（点我销毁）
    destroyLastItem() {
      if (this.listItems.length > 0) {
        this.listItems.pop();
      }
    },
  }
}
</script>

<style scoped>
/* 主容器样式 */
.practise-main-edit {
  max-width: 100%;
  margin: 0;
  padding: 10px;
  font-family: Arial, sans-serif;
  font-size: 13px;
  line-height: 1.3;
  overflow-x: auto;
}

/* 主要功能区域 - 一行展示 */
.main-functions-row {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

/* 功能卡片通用样式 */
.function-card {
  border: 1px dashed green;
  border-radius: 4px;
  padding: 10px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* 鼠标悬停效果 */
.function-card:hover {
  background-color: #f0f8f0;
  box-shadow: 0 2px 8px rgba(0, 128, 0, 0.1);
}

/* 区域标题样式 */
.function-card::before {
  content: attr(data-title);
  display: block;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 8px;
  font-size: 14px;
  border-bottom: 1px solid #c8e6c9;
  padding-bottom: 4px;
}

/* 点我n+1功能卡片样式 */
.test-card {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 180px;
}

/* 新增信息与提交卡片样式 */
.info-submit-card {
  flex: 2;
}

/* 选择与数据展示卡片样式 */
.combined-card {
  flex: 1.5;
}

/* 列表管理功能卡片样式 */
.list-management-card {
  flex: 1;
}

/* 调整输入框宽度，适应较小的卡片 */
::v-deep .list-management-card .el-input {
  width: 150px !important;
  max-width: none !important;
}

/* 紧凑表单样式 */
.info-form-compact {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 10px;
}

/* 表单行样式 */
.form-row {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* 表单标签样式 */
.form-label {
  font-weight: bold;
  color: #4caf50;
  font-size: 12px;
  text-align: right;
  flex-shrink: 0;
}

/* 输入区域样式 */
.input-section {
  border-bottom: 1px solid yellow;
  padding-bottom: 10px;
  margin-bottom: 5px;
}

/* 操作行样式 */
.action-row {
  margin-top: 5px;
}

/* 提交按钮样式 */
.submit-btn {
  padding: 6px 16px;
  font-size: 13px;
  margin-left: auto;
}

/* 提交区域样式 */
.submit-section {
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}

/* 优化自定义组件内部样式 */
::v-deep .el-form {
  width: 100%;
  margin: 0;
  padding: 0;
}

::v-deep .el-form-item {
  width: 100%;
  margin-bottom: 0;
  margin-right: 0;
  padding: 0;
}

::v-deep .el-form-item__content {
  margin-left: 0 !important;
}

::v-deep .el-input {
  width: 100%;
  max-width: none;
}

/* 调整test组件内部样式，使其更居中 */
::v-deep .test-card .el-button {
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px;
}

/* 组合卡片样式 */
.combined-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 卡片内部区域样式 */
.card-section {
  border: 1px solid #c8e6c9;
  border-radius: 3px;
  padding: 10px;
  background-color: white;
}

/* 区域小标题样式 */
.section-title {
  font-size: 13px;
  font-weight: bold;
  color: #4caf50;
  margin: 0 0 8px 0;
  padding-bottom: 3px;
  border-bottom: 1px dashed #c8e6c9;
}

/* 选择项样式 */
.select-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 8px;
}

.select-item:last-child {
  margin-bottom: 0;
}

.select-item label {
  font-weight: bold;
  color: #2e7d32;
  font-size: 12px;
  white-space: nowrap;
}

/* 人员列表样式 */
.person-list {
  background-color: #f8fff8;
  padding: 6px;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  overflow-x: auto;
  margin-bottom: 8px;
  min-height: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.person-list span {
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 3px;
  padding: 2px 6px;
  background-color: #e8f5e8;
  border-radius: 2px;
  color: #2e7d32;
  font-size: 12px;
}

/* 行业输入样式 */
.industry-input {
  display: flex;
  align-items: center;
  gap: 5px;
}

.industry-input label {
  font-weight: bold;
  color: #2e7d32;
  font-size: 12px;
  white-space: nowrap;
}

/* 优化自定义组件内部样式 */
::v-deep .el-form-item {
  margin-bottom: 5px;
  min-height: 40px;
}

::v-deep .el-form-item__label {
  font-size: 11px;
  padding-right: 6px;
  width: auto !important;
}

::v-deep .el-form-item__content {
  margin-left: 0 !important;
}

::v-deep .el-button {
  padding: 4px 10px;
  font-size: 12px;
  height: auto;
}

::v-deep .el-input {
  width: 100%;
  max-width: 120px;
}

::v-deep .el-input__inner {
  font-size: 12px;
  height: 26px;
  line-height: 26px;
}

/* 优化ant-design-vue选择框样式 */
::v-deep .ant-select {
  width: 120px;
}

::v-deep .ant-select-selector {
  height: 26px !important;
  line-height: 26px !important;
}

::v-deep .ant-select-selection-item {
  font-size: 12px !important;
  line-height: 26px !important;
}

/* 优化复选框样式 */
::v-deep .el-checkbox {
  margin-right: 6px;
  margin-bottom: 3px;
}

::v-deep .el-checkbox__label {
  font-size: 12px;
}

/* 确保所有内容在一屏显示 */
@media (max-width: 1200px) {
  .main-functions-row {
    flex-direction: column;
  }
  
  .function-card {
    min-width: auto;
    max-width: none;
  }
  
  .info-inputs {
    flex-direction: column;
  }
}
</style>
 
