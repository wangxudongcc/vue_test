<template>
    <div>
        <h2> 当前的n值是:<span v-text="n"></span></h2>
        <h2>放大10倍的n值是：<span v-big="n"></span></h2>
        <button @click="n++">点我n+1</button>
        {{ p1 }}-'999'
        <h2 :style="{ opacity }">欢迎欢迎</h2>
        <h2>h2</h2>
        <!-- {{ change() }} -->
        <div @click="add()">增加</div>
        <div v-for="(item, index) in list" :key="item.asd">
            <span>{{ item.asd }}</span>-
            <span>{{ index }}</span>-
            <span>{{ item.id }} </span>
            <input type="text" v-model="item.name">
            <span @click="dele(index)">删除</span>
        </div>
        <!-- {{ dele(123) }} -->
        <span @click="destoryy">点我销毁</span>
    </div>
</template>
<script>
let a;
export default {

    name: 'Test',
    data() {
        return {
            n: Math.floor((Math.random()) * 100) / 100,
            p1: NaN,
            opacity: 1,
            a: '',
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
    directives: {
        big(e, b) {
            // console.log(b,'e,b')
            e.innerText = b.value * 10
        },

    },
    methods: {
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
        dele(i) {
            this.list.splice(i, 1);
            // let list = this.list;
            // this.list = [];
            // this.$nextTick(() => {
            //     this.list = list;
            // });
            // console.log(Math.random(), i)
        },
        add() {
            this.list.push({
                id: this.list.length + 1,
                name: '',
                asd: Math.random().toString(36).substr(2, 9),
            });
        },
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
        destoryy() {
            console.log('bye')
            this.$destroy()
        }
    },
    beforeCreate() { 
        console.log(this, this.beforeCreatethis,'beforeCreatethis')
        console.dir(this)
        this.beforeCreatethis = this

    },
    created() {
        this.list.forEach(item => {
            this.$set(item, "asd", Math.random().toString(36).substr(2, 9));
        });
        // this.randomSame(1)
    },
    beforeUpdate() {
        console.log(1, a, this, 'beforeUpdate')
    },
    updated() {
        console.log(2, a)
        clearInterval(a);
    },
    beforeMount() {

    },
    mounted() {
        console.log(this, 'this')
    },
   
    beforeDestroy() {
        console.log('beforeDestroy', this, 'this')
    },
    destroyed() {
        console.log('destroyed', this)
    },
}
</script>
