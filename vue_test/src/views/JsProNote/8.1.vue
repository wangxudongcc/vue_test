<template>
  <div></div>
</template>
<script>
function checkNumber(num) {
  if (num > 10) {
    console.log("Number is greater than 10");
    return true;
  } else {
    console.log("Number is not greater than 10");
    return false;
  }
}
console.log(checkNumber(15));
console.log(checkNumber(5));
</script>
