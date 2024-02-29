<template>
  <div class="box">
  <div class="container">
    <div class="circle"></div>
  </div>
</div>
</template>
<script>
// let obj = [1,2,3,4,5,6,7]
// let objClone = [...obj,1,'pink'];
// console.log(objClone);
function /*隐藏的数字*/ foo() {}
let a = [["name", "wang"], ["10"], ["age", "19", "12"], ["sex", "男"]];
console.log(Object.fromEntries(a));
console.log(Object.entries(a));

async function fetchUserPreferences() {
  // try {
  //   const user = await fetch("/user/preferences").catch((err) => {
  //     // throw new Error('fail'+err.message);
  //     const wrapErr = new Error("Fail");
  //     wrapErr.cause = err;
  //     throw wrapErr;
  //   });
  // } catch (err) {

  // }
}
console.log(foo,fetchUserPreferences)
</script>

<style>
.box {
  position: fixed;
  top: 0;
  width: 100%;
  height: 500px;
  background-image: radial-gradient(transparent 1px, #fff 2px);
  background-size: 9px 9px;
  backdrop-filter: blur(9) saturate(50%);
}

.container {
  padding-top: 400px;
}

.circle {
  height: 600px;
  background-color: red;
}
</style>
