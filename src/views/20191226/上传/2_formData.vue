<template>
  <div class="beau">
    今天真是美好的一天!
    <div>今天真是美好的一天!</div>
    北京时间12月19日
    <!-- <select name="emp" disabled="false">
    <option>No</option>
    <option>Yes</option>
  </select> -->
    <input type="text" id="text1" disabled="" />
  </div>
</template>

<script>
// let fd = new FormData();
// fd.append('user',['aa','dd']);
// fd.append('user','bb');
// fd.append('user','cc');
// console.log(fd.get('user'));
// fd.set('user','bx');
// console.log(fd.get('user'));
// console.log(fd.has('user'));
// fd.set('user','bx');
// console.log(fd);
// let text1= document.getElementById('text1')
// text1.setAttribute('disabled','false')
// text1.removeAttribute('disabled')
//     let a = ()=> 1+4
// let person = {
//     'name':'wang',
//     'age':'18',
//     '5':6,
//     [a()]:9
// }
// let volist = [{name:'dong'},{age:18},{address:'北京'}]
// console.log(volist.push(person),volist)
// console.log( volist.push({person}),volist)

// console.log(person[a])
// console.log(person)
</script>
<script>
let box = document.createElement("div");
box.id = "boxActive";
box.style.width = "200px";
box.style.height = "200px";
box.className = "RED";
box.style.background = "blue";
let text = document.createTextNode("666");
console.log(text);

box.appendChild(text);
let beau = document.getElementById("beau");
document.body.insertBefore(box, beau);
</script>
