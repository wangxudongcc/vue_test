<template>
    <div>
        <!-- <input type="text" id="inputText" />
    <button onclick="showValue()">点击显示修改输入框</button>
    <br /><br />
    <input id="modifyValueInput" style="visibility: hidden;" placeholder="请输入要修改的值" onblur="modifyValue()"></input>
    <span class="showObject"> </span> -->
        <el-button @click="openUrl">点我</el-button>
    </div>
</template>
<script>
// let person = {
//     name: "wang",
//     phone: 1234,
//     address: "beijing",
// };

// let showObject = document.querySelector(".showObject");
// // let inputText = document.getElementById("inputText").value;
// let getModifyValue = document.getElementById("modifyValueInput").value

// for (const [key, value] of Object.entries(person)) {
//     showObject.innerHTML += "<br/>" + key + ":" + value;
// }
// document.getElementById("inputText").addEventListener('keydown', function (event) {
//     if (event.key === 'Enter' && person.hasOwnProperty(document.getElementById("inputText").value)) { 
//         document.getElementById("modifyValueInput").style.visibility = 'visible' }
// })
// // 展示值
// function showValue() {
//     if (person.hasOwnProperty(document.getElementById("inputText").value)) {
//         document.getElementById("modifyValueInput").style.visibility = 'visible'
//         modifyValue()
//     } else {
//         alert("未找到对应的属性名");
//         return false;
//     }
// }
// // 修改值
// function modifyValue() {
//     Object.defineProperty(person, document.getElementById("inputText").value, {
//         value: document.getElementById("modifyValueInput").value
//     });
//     showObject.innerHTML = ""
//     for (const [key, value] of Object.entries(person)) {
//         showObject.innerHTML += "<br/>" + key + ":" + value;
//     }
// }
export default {
    data() {
        return {
        }
    },
    mounted() {
        this.foo()
        this.bar()
        this.baz()
        console.log(this.checkNumber(15));
        console.log(this.checkNumber(5));
    },
    methods: {
        checkNumber(num) {
            if (num > 10) {
                console.log("Number is greater than 10");
                return true;
            } else {
                console.log("Number is not greater than 10");
                return false;
            }
        },
        async foo() {
            console.log(await Promise.resolve('foo'))
        },
        async bar() {
            console.log(await 'bar')
        },
        async baz() {
            console.log('null')
        },
        openUrl() {
            window.open('http://www.baidu.com', "_parent");
            // window.open('http://www.baidu.com',"_blank")   //弹出一个新窗口，可以关闭
            // window.open('http://www.baidu.com',"_self")   //自己变成了目标链接，close关闭不了
            // window.open('http://www.baidu.com',"_top")   //自己变成了目标链接，close关闭不了
            // window.open('http://www.baidu.com',"_parent")//自己变成了目标链接，close关闭不了
        }
    },
}
</script>
<style scoped></style>