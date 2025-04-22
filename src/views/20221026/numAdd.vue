<template>
    <div>
        <div style="display: flex;white-space: nowrap;">
            <slot :num="number"></slot>
            子组件：<el-input v-model.number="number" disabled></el-input>
        </div>
        <div class="input-line">
            定时间隔：<el-input v-model.number="input" :disabled="disabled"></el-input>
            累加数值：<el-input v-model.number="leijiashuzhi" :disabled="disabled"></el-input>
        </div>
        <div class="box">
            <el-button type="text" :disabled="disabled" @click="start">开始</el-button>
            <el-button type="text" :disabled="!disabled" @click="stop">停止</el-button>
            <el-button type="text" @click="reload">重置</el-button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            input: 0,
            disabled: false,
            timer: '',
            leijiashuzhi: 1,
            xxxxxxx: null
        }
    },
    props: {
        num: {
            type: Number,
            default: 0,
        },
    },
    mounted() {
        console.log(this.$parent, 'this.$parent', '这是子组件的mounted生命周期')
        console.log(this.$root, 'this.$root')
        console.log(this.$refs, 'this.$refs')
        console.log(this.$el, 'this.$el')
        console.log(this.$vnode, 'this.$vnode')
        this.$emit('asdf', '这是子组件的emit')
        this.$on('update:num', (val) => {
            console.log(val, 'this.$on')
        })
        this.$once('update:num', (val) => {
            console.log(val, 'this.$once')
        })
        this.$off('update:num', (val) => {
            console.log(val, 'this.$off')
        })
    },
    computed: {
        number: {
            get() {
                return this.num
            },
            set(value) {
                this.$emit('update:num', value)
            }
        }
    },
    methods: {
        start() {
            clearInterval(this.timer)
            this.disabled = true
            this.timer = setInterval(() => {
                this.number = this.num + this.leijiashuzhi
            }, this.input * 1000 > 1 ? this.input * 1000 : 1000); // 1000 毫秒 = 1 秒
        },
        stop() {
            this.disabled = false
            clearInterval(this.timer)
        },
        reload() {
            this.disabled = false,
                this.number = this.xxxxxxx,
                this.stop()
            clearInterval(this.timer)
        }
    }
}
</script>
<style scoped>
div {
    border: 1px solid rgb(0, 18, 216);
}

.input-line {
    white-space: nowrap;
    display: flex;
    align-items: center;
    /* 垂直居中 */
    gap: 10px;
    /* 文字和输入框间距 */
}

.box {
    display: flex;
    gap: 10px;
    /* justify-content: center;  */
}
</style>
