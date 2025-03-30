<template>
    <div>
        注册的用户名:<input id="user" type="text" @blur="checkUser" /><span id='s'></span>
        注册的密码:<input type='password' id='pw' />
        <br />
        注册的密码:<input type='password' id='pw' />
        <button id='btn'>提交</button>
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
        }
    },
    computed: {

    },
    mounted() {
    },
    methods: {

        // ajax(url, cb, opt) {
        //     this.myopt = opt && {
        //         method: opt.method || 'get',
        //         body: opt.body || '',
        //         headers: opt.headers || {},
        //         dataType: opt.dataType || 'json',
        //         timeout: opt.timeout || 10000,
        //         ontimeout: opt.ontimeout || function () { },
        //         async: (opt.async === undefined) ? true : opt.async
        //     }
        //     var len = arguments.length;
        //     var xhr = new XMLHttpRequest;
        //     if (opt.async === true) {
        //         xhr.timeout = myopt.timeout;
        //     }
        //     function ready() {
        //         if (myopt.async === true) {
        //             xhr.onreadystatechange = function () {
        //                 if (xhr.readyState === 4) {
        //                     if (/(20[0-7])|(30[14])/.test(xhr.status)) {
        //                         if (myopt.dataType === 'json') {
        //                             cb.success && cb.success(eval('(' + xhr.responseText + ')'))
        //                         } else if (myopt.dataType === 'xml') {
        //                             cb.success && cb.success(xhr.responseXML)
        //                         }
        //                     } else {
        //                         cb.error && cb.error(xhr.status);
        //                     }
        //                 }
        //             }
        //         } else {
        //             if (/(20[0-7])|(30[14])/.test(xhr.status)) {
        //                 if (myopt.dataType === 'json') {
        //                     cb.success && cn.success(eval('(' + xhr.responseText + ')'))
        //                 } else if (myopt.dataType === 'xml') {
        //                     cb.success && cb.success(xhr.responseXML)
        //                 }
        //             }
        //             else {
        //                 cb.error && cb.success(xhr.status);
        //             }
        //         }
        //     }
        //     if (len === 2) {
        //         xhr.open('get',)
        //     }
        // },
        async checkUser() {
            //     this.ajax('./data.xml', {
            //         success(d) {
            //             const person = d.getElementsByTagName('person');
            //             for (let i = 0; i < person.length; i++) {
            //                 this.list.push({
            //                     name: person[i].children[0].innerHTML,
            //                     age: person[i].children[1].innerHTML,
            //                     say: person[i].children[3].innerHTML, 
            //                 })
            //             }
            //             console.log(person, this.list);
            //         }
            //     }, {
            //         dataType: 'xml'
            //     })
            // }


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
