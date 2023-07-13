new Vue({
  el: ".todoapp",
  data: {
    all: false,
    val: "",
    ary: [{
        id: 0,
        txt: "哈哈",
        checked: false,
        onoff: false
      },{
        id: 1,
        txt: "呵呵",
        checked: true,
        onoff: false
      }]
  },
  methods: {
    add() {
      if (!this.val) return;
      this.ary.unshift({
        id: +new Date(),
        txt: this.val,
        checked: false,
        onoff: false
      });
      this.val = "";
    },
    rm(id){ 
        this.ary = this.ary.filter(e=>e.id !== id);
        console.log(id);
        console.log(this,this.ary);
    },
    changeAll(ev){
        this.ary = this.ary.map(e=>{
            e.checked = ev.target.checked;
            return e;
        });
        // 我们在做todo的时候,我发现写方法的时候,有的需要return,有的不需要return;
    },
    replace({id,txt},num){
        this.onoff_FN(id,true);
        this.$refs.edit[num].value = txt;
        console.log(this.onoff_FN(id,true));
        Vue.nextTick(()=>{
            this.$refs.edit[num].focus();
        })
    },
    off({id,txt,onoff},ev){
        if(!onoff)return;
        const {value} = ev.target;
        if(value && txt!= value){
            this.ary.forEach(e=>{
                if(e.id ===id){
                    e.txt = value;
                }
            });
        }
        this.onoff_FN(id,false);
    },
    onoff_FN(id,b){
        this.ary.forEach(e=>{
            if(e.id ===id){
                e.onoff = b;
            }
        })
    }},
    watch:{
        ary:{
            handler(){
                this.all = this.ary.every(e=>e.checked);
            },
            deep:true,
            immediate:true
        }
    },
});