<template>
    <div class="modufyQuery">
        <el-form ref="formRef" :show-message="false" :model="formData" :inline="true" label-position="right"
            label-width="120px"
            style="border: 1px #3358ec solid">
            <el-row >
                <el-col :span="8">
                    <el-form-item label="报案号" prop="registNo">
                        <div style="display: flex; align-items: center;">
                           <div>*</div>
                        <el-input v-model.trim="formData.registNo" placeholder="请输入" /> 
                        </div>
                    </el-form-item>
                </el-col>
                <el-col :span="8"> 
                    <el-form-item label="原操作人" prop="operatorName"> 
                            <el-select
                            v-model="formData.operatorName" filterable clearable placeholder="请选择"
                            :filter-method="(value) => (companycode = value)" @change="clearOperator"> 
                             <el-option v-for="item in OperatorNameCode" :key="item.code" :label="item.code" :value="item.code"> 
                                <span>{{ item.code }}-{{ item.name }}</span> 
                               </el-option>  
                            </el-select>
                        </el-form-item>
                </el-col> 
                <el-col :span="8"> 
                    <el-form-item label="任务类型" prop="taskType">
                        {{ riskTypeOption }}
                        <el-select v-model="riskTypeOption" placeholder="请选择">
                            <el-option v-for="item in taskTypeOption" :key="item.value" :label="item.label"
                                :value="item.value"> <span>{{ item.label }}</span> </el-option> 
                        </el-select>
                    </el-form-item> </el-col>
               
            </el-row>
            <el-row type="flex" style="justify-content: center;align-items: center;">
                <el-col>
                    <el-form-item>
                        <div style="display: flex; gap: 10px;">
                            <el-button type="primary" round @click="setFormData" size="small">
                            查询
                        </el-button>
                        <el-button type="primary" round @click="showRecord" size="medium ">
                            批量平级移交
                        </el-button>
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                registNo: '001', //报案号
                operatorName: 'wang', //原操作人
                taskType: 'losstype', //任务类型
            },
            OperatorNameCode: [ //原操作人
                { code: 'wang', name: '王' },
                { code: 'li', name: '李' },
                { code: 'zhang', name: '张' }],
            taskTypeOption: [ //任务类型
                { label: '报案', value: 'losstype' },
                { label: '理赔', value: 'claimtype' },
                { label: '理赔2', value: 'claimtype2' }],
            companycode: '001',
            riskTypeOption:''
        }
    },
    mounted() {
        console.log(this.OperatorNameCode, 'OperatorNameCode'); //获取到的是select的value值
    },
    methods: {
        clearOperator() {
            console.log(this.formData.operatorName, 'clearOperator'); //获取到的是select的value值
        },
        setFormData() { //查询  
            console.log(this.formData, 'setFormData');
        },
        showRecord() {
            console.log('showRecord');
        }
    }
}
</script>