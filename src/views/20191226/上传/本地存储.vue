<template>
    <div>
        <div>
        </div>
    </div>
</template>
<!-- 刷新之后还有(数据不变的)
        1.刷新之后请求一次数据
        2.把数据存储在浏览器中;
        cookies 
            =>后端技术,基于浏览器实现的;(一般都是后端来设置,也可以前端来种cookies)
            =>用来存储用户的登录信息
            =>一次Http请求,后端只知道这次请求某人是否合法登录,http是无状态的,是不能记录某人登陆账户,使用cookies去记录存储某人的操作下次请求的时候把上一次的操作发给后端
            =>分号后面有空格
        localStorage
        sessionStorage
    -->
<!-- <script>    
        document.cookie = 'name=pq;';
        document.cookie = 'age=11'
        document.cookie = 'a!=null'
        document.cookie = 'a!=null'
        document.cookie = 'a==null'
        document.cookie = ''
        console.log(document.cookie);
        /*
            cookie 的生命周期
                默认的生命周期是当浏览器关闭,生命周期结束
            如果不要走默认的生命周期 使用
            cookies 
        */
        function removeCookie (key,val){
            document.cookie = key+'='+val+";expires="+new Date(19700101);
        }
        removeCookie('a!' )
    </script> -->
<script>
export default {
    data() {
        return {
            sql: [{
                user: 'asdfg',
                pw: '123'
            }, {
                user: 'asd',
                pw: '321'
            }],
            user: '',
            password: ''
        }
    },
    components: {

    },
    mounted() {

    },
    methods: {
        submit() {
            let val1 = this.user
            let val2 = this.password
            let o = this.sql.find(item => item.user === val1);
            if (o) {
                if (o.pw === val2) {
                    alert('登陆成功');
                    document.cookie = 'user' + o.user;
                }
            }
        }
    }
}

let DIv1 = document.createElement('div')
DIv1.innerHTML = "666"
DIv1.id = "btn"
document.body.appendChild(DIv1);
</script>