<template>
    <div>
        <!-- 显示当前的n值 -->
        <h2> 当前的n值是:<span v-text="n"></span></h2>
        <!-- 使用自定义指令big，将n值放大10倍显示 -->
        <h2>放大10倍的n值是：<span v-big="n"></span></h2>
        <!-- 点击按钮，n值加1 -->
        <button @click="n++">点我n+1</button>
        {{ p1 }}-'999'
        <!-- 使用v-bind指令，动态绑定style属性，控制透明度 -->
        <h2 :style="{ opacity }">欢迎欢迎</h2>
        <h2>h2</h2>
    </div>
</template>
<script>
let a;
export default {

    name: 'Test',
    data() {
        return {
            // 初始化n值为0到1之间的随机数
            n: Math.floor((Math.random()) * 100) / 100,
            p1: NaN,
            // 初始化透明度为1
            opacity: 1,
            a: '',
            // 初始化列表，包含一个列表项
            list: [
                { id: 1, name: '' }
            ],
            beforeCreatethis:'',
            createdthis:'',
            beforeUpdatethis:'',
            updatedthis:'',
            beforeMountthis:'',
            mountedthis:'',
            beforeDestroythis:'',
            destroyedthis:''
        }
    },
    // 自定义指令，将n值放大10倍显示
    directives: {
        big(e, b) {
            // console.log(b,'e,b')
            e.innerText = b.value * 10
        },

    },
    methods: {
        // 改变透明度（保留，可能在其他地方调用）
        change() {
            a = setInterval(() => {
                console.log('this.opacity: ', this.opacity)
                this.opacity -= 0.01
                if (this.opacity <= 0) {
                    this.opacity = 1
                }
                clearInterval(a);
            }, 16)
            console.log(3, a)
        }
    },
    // 在创建组件之前调用
    beforeCreate() { 
        console.log(this, this.beforeCreatethis,'beforeCreatethis')
        console.dir(this)
        // 在创建组件之前调用
        this.beforeCreatethis = this

    },
    // 在创建组件之后调用
    created() {
        this.list.forEach(item => {
            this.$set(item, "asd", Math.random().toString(36).substr(2, 9));
        });
        // this.randomSame(1)
    },
    // 在组件更新之前调用
    beforeUpdate() {
        console.log(1, a, this, 'beforeUpdate')
    },
    // 在组件更新之后调用
    updated() {
        console.log(2, a)
        clearInterval(a);
    },
    // 在组件挂载之前调用
    beforeMount() {

    },
    // 在组件挂载之后调用
    mounted() {
        console.log(this, 'this')
    },
   
    // 在组件销毁之前调用
    beforeDestroy() {
        console.log('beforeDestroy', this, 'this')
    },
    // 在组件销毁之后调用
    destroyed() {
        console.log('destroyed', this)
    },
}
</script>