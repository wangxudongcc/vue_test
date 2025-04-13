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
        <!-- {{ change() }} -->
        <!-- 点击div，调用add方法，增加一个列表项 -->
        <div @click="add()">增加</div>
        <!-- 使用v-for指令，遍历list数组，显示每个列表项的id、name和索引 -->
        <div v-for="(item, index) in list" :key="item.asd">
            <span>{{ item.asd }}</span>-
            <span>{{ index }}</span>-
            <span>{{ item.id }} </span>
            <!-- 使用v-model指令，双向绑定输入框的值，与item.name关联 -->
            <input type="text" v-model="item.name">
            <!-- 点击span，调用dele方法，删除对应的列表项 -->
            <span @click="dele(index)">删除</span>
        </div>
        <!-- {{ dele(123) }} -->
        <!-- 点击span，调用destoryy方法，销毁组件 -->
        <span @click="destoryy">点我销毁</span>
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
        // 改变透明度
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
        },
        // 删除列表项
        dele(i) {
            this.list.splice(i, 1);
            // let list = this.list;
            // this.list = [];
            // this.$nextTick(() => {
            //     this.list = list;
            // });
            // console.log(Math.random(), i)
        },
        // 增加列表项
        add() {
            this.list.push({
                id: this.list.length + 1,
                name: '',
                asd: Math.random().toString(36).substr(2, 9),
            });
        },
        // 生成随机数
        randomSame(i) {
            let n1 = Math.random().toString(36).substr(2, 9),
                n2 = Math.random().toString(36).substr(2, 9);
            // while (true) {
            if (n1 == n2) {
                console.log(n1, i);
            } else {
                this.randomSame(i + 1);
            }
            // }
        },
        // 销毁组件
        destoryy() {
            console.log('bye')
            this.$destroy()
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