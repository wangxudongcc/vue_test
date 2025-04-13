<template>
    <div>
        <div class="box">
            <zht-select  v-model="value" :options="options" multiple>
                <template #option="{ item }">
                    <span>{{ item.label }}</span>
                    <span>{{ item.value }}</span>
                </template>
            </zht-select>
        </div>
    </div>
</template>
<script>
/*
使用指南：
1.单选：正常使用
2.多选在myselect标签中增加multiple属性
3.远程搜索在myselect标签中增加remote属性，remoteMethod属性为远程搜索方法，返回值为数组，数组中的每个元素为对象
4.自定义模板在myselect标签中增加slot属性，slot的值为option，slot-scope为item，item为当前选中的项
5.清空在myselect标签中增加clearable属性
6.禁用在myselect标签中增加disabled属性，也可以在data中给对应的单独项目定义disabled属性，值为true或false
*/
// import mySelect1 from './components/mySelect1.vue';
import zhtSelect from './components/zhtSelect.vue';
export default {
    components: {
        zhtSelect
    },
    data() {
        return {
            value: '',
            options: [
                { value: '选项1', label: '黄金糕' },
                { value: '选项2', label: '双皮奶' },
                { value: '选项3', label: '蚵仔煎' },
                { value: '选项4', label: '龙须面' },
                { value: '选项5', label: '北京烤鸭' }
            ],
            remoteOptions: [],
            isLoading: false,
            selectedValue: null,
            left: true,
        }
    },
    methods: {
        handleChange(item) {
            console.log('选中项:', item, this.value);
        },
        handleInput(item) {
            console.log('选中项3456456:', item, this.value);
        }
    }
}
</script>
<style>
.box {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin: 0 auto;
}

select {
    width: 150px;
    height: 30px;

}
</style>