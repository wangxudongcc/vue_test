<template>
    <button>
        <h1 v-show="isShow"></h1>
    </button>
</template>
<script>
export default {
    name:'Test',
    data(){
        return{
            isShow:true，
        }
    }
}
</script>
