<template>
    <div id="#app">
    </div>
</template>
<script>
    function Demo() {
        this.a = 1;
        this.b = 2;
        console.log(this, this.a);
    }
    const d = new Demo();

    console.log(Demo.prototype);
</script>