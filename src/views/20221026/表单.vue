
<template>
    <div class="modufyQuery">
        <el-form ref="formRef" :show-message="false" :model="formData" :inline="true" label-position="right"
            label-width="120px"
            style="background: #fff; padding: 12px 0 16px 0; margin: 0; border-top: 1px #3358ec solid">
            <el-row type="flex">
                <el-col :span="8">
                    <el-form-item label="报案号" prop="registNo">
                        <div class="before">
                            *
                        </div>
                        <el-input v-model.trim="formData.registNo" placeholder="请输入" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="原操作人" prop="operatorName">
                        <el-select v-model="formData.operatorName" filterable clearable placeholder="请选择"
                            :filter-method="(value) => (companycode = value)" @change="clearOperator">
                            <el-option v-for="item in OperatorNameCode" :key="item.code" :label="item.code"
                                :value="item.code">
                                <span>{{item.code}}-{{item.name}}</span>
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="任务类型" prop="taskType">
                        <el-select  placeholder="请选择" >
                            <el-option v-for="item in taskTypeOption" :key="item.value" :label="item.label"
                                :value="item.value">
                                <span>{{item.label}}</span>
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="24">
                    <el-form-item class="btns">
                        <el-button type="primary" round @click="setFormData">
                            查询
                        </el-button>
                        <el-button type="primary" round @click="showRecord">
                            批量平级移交
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
