<template>
      <div id='QQQ'>999
        <ul class="nav nav-tabs nav-grenn" :class="activeUlPerson">
            <li v-for="(item,index) of personList.injuredVoList" :key="index">
                <a data-toggle="tab" href="taball" @click="changeLabel(index)" :val="item.id"
                    :tempid="'temp'+item.tempId">
                    {{!item.personName?'未命名':item.personName}}
                </a>
                <span @click="removePersondlossSpan">
                    <i>111</i>
                    <i>222</i>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    methods:{
         checkCondition() {
            let opanion = (str) => {
                if (str != "" && str != null) {
                    var tmp = str.substring(0, 1);
                    if (tmp == "*") {
                        console.log(1)
                        return false;
                    }
                }
            };
            opanion('*1*1');
            // opanion('');
            // opanion('1*!*');
        }
        //     function checkCondition(){
        // 	var objArray=['1','1*1','']
        // 	for(var i=0;i<objArray.length;i++){
        // 			if(objArray[i]!=""||objArray[i]!=null){
        // 				var tmp=objArray[i].substring(0,1);
        // 				if(tmp=="*"){
        // 					console.error("查询条件第一位不能为*",i);
        // 					return false;
        // 				}
        // 			}
        // 	}
        // }
        // checkCondition()
        // if (checkCondition() == false) {
        //     console.log(checkCondition())
        //     // return false;
        // } else {
        //     console.log('88889')
        // }
    }
}
</script>
<style>
#QQQ{
    display:'';
}
</style>