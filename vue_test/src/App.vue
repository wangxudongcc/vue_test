
<template>
    <div style="height:100vh;width:100vw">
        <router-view />
        <div v-if="$route.path == '/'" style="height:100%;">
            <div class="headers"></div>
            <div class="appMain" >
                <div class="leftContent">
                </div>
                <div class="middleContent">
                    <el-row v-for="(item,index) of toolsConf" :key="index">
                    <el-button type="text" :class="item.icon" style="font-size: 18px;" @click="item.callback">&nbsp;{{item.label }}</el-button>
                    </el-row>
                </div>
                <div class="rightContent"></div>
            </div> 
        </div>          
    </div>
</template>
<script>
export default {
    name: "index",
    data() {
        return {
            toolsConf: [{
                label: "练习",
                icon: "el-icon-notebook-1",
                callback: () => {
                    this.toToolDeatail("practise");
                }
            }, {
                label: "ELE",
                icon: "el-icon-eleme",
                callback: () => {
                    this.toToolDeatail("element");
                }
            },{
                label: "jQuery",
                icon: "el-icon-eleme",
                callback: () => {
                    this.toToolDeatail("jQuery");
                }
            },{
                label: "zhangxinxuWeb",
                icon: "el-icon-eleme",
                callback: () => {
                    this.toToolDeatail("zhangxinxuWeb");
                }
            }],
        }
    },
    methods: {
        toToolDeatail(type) {
            let query = {
                openIsClose: this.$route.query.openIsClose
            };
            let path = "";
            // 练习
            if (type == "practise") {
                path = "/practise/practiseMainEdit";
            }
             // ele
             if (type == "element") {
                path = "/element/index";
            }
            if (type == "jQuery") {
                path = "/jQuery/parent";
            }
            if (type == "zhangxinxuWeb") {
                path = "/zhangxinxuWeb/overlappingPosition";
            }
            const routeUrl = this.$router.resolve({
                path: path,
                query: query
            });
            window.open(routeUrl.href, "_blank");
        }
    }
}
</script>
<style>
body{
    margin: 0;
    padding: 0;
}
</style>
<style lang="scss" scoped>
.headers{
    width: 100%;
    height: 20%
}
.appMain{
    width: 100%;
    height: 80%;
    border: 1px solid red;
    box-sizing: border-box;
    display: flex;
    box-sizing: border-box;
    & > div {
        box-sizing: border-box;
    }
    .leftContent{
        width: 25%;
        height: 100%;
        border: 1px solid blue;
        overflow: hidden;
    }
    .middleContent{
        width: 50%;
        height: 100%;
        border: 1px solid blue;
        float: left;
    }
}


</style>