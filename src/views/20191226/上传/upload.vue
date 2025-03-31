<template>
    <div>
        注册的用户名:<el-input v-model="user" placeholder="请输入内容" @blur="checkUser" clearable></el-input>
        注册的密码::<el-input v-model="password" placeholder="请输入内容" @blur="checkPassword" clearable></el-input>
        验证码:<el-input v-model="CAPTCHA" placeholder="请输入内容" @blur="checkCAPTCHA"></el-input>
        <el-button type="text">提交</el-button>
        <ul id='ul'>
            <li v-for="(item, index) in list" :key="index">
                我的名字叫:{{ item.name }},
                今年:{{ item.age }}岁,
                我想说:{{ item.say }}
            </li>
        </ul>
    </div>
</template>

<script>
import { getList, getItem } from '@/api/user/api'

export default {
    name: "index",
    data() {
        return {
            pw: '',
            myopt: null,
            list: [],
            user: '',
            password: '',
            CAPTCHA: ''
        }
    },
    computed: {

    },
    mounted() {
    },
    methods: {

        async checkUser() {
            getList().then(res => {
                this.list.push(...res.data)
                console.log(res, this.list);
            }).catch(err => {
                console.error(err);
            })

            getItem('002').then(res => {
                console.log(res);
            })
        },
        checkPassword() {
            console.log(this.password);
        },
        checkCAPTCHA() {
            console.log(this.CAPTCHA);
        }
    },
};

</script>
<style>
#bar {
    width: 100%;
    height: 5px;
    position: relative;
}

#box {
    width: 0;
    height: 5px;
    background: yellow;
}
</style>
