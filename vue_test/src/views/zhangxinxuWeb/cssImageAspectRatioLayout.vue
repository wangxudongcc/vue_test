<template>
    <div class="box">
        <img src="../../assets/sl.png">
        <img src="../../assets/computerBad.png">
        <img src="../../assets/skyunder.jpg">
    </div>
</template>
<script>
</script>
<style>
.box {
    display: flex;
    gap: .5em;
    flex-wrap: wrap;
    container-type: inline-size
}

.box img {
    width: calc(25cqw -1.5rem /4);
    height: calc(25cqw-1.5rem /4);
    object-fit: cover;
}
</style>