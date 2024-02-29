<template>
 <div>
    <button id="openUrl">点我</button>
 </div>
</template>
<script>
let openUrl = document.getElementById('openUrl')
openUrl.addEventListener('click',function openUrl(){
    console.log(1111)
    window.open('http://www.baidu.com',"_parent")
})
// window.open('http://www.baidu.com',"_blank")   //弹出一个新窗口，可以关闭
// window.open('http://www.baidu.com',"_self")   //自己变成了目标链接，close关闭不了
// window.open('http://www.baidu.com',"_top")   //自己变成了目标链接，close关闭不了
// window.open('http://www.baidu.com',"_parent")//自己变成了目标链接，close关闭不了
</script>