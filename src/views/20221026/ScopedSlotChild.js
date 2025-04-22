export default {
    props:['items'],
    render(createElement){
        return createElement('div',this.items.map(item=>{
            console.log(this,item,'this以及item') /
            console.log(this.$scopedSlots,'this.$scopeslots/////') // 可以拿到子组件的所有slot
            // 调用default slot，并且传递item作为参数，这样就可以在父组件中使用slot-scope来获取item了
            if (this.$scopedSlots.default) {
                return this.$scopedSlots.default({ item });  // 传递数据给插槽
              }
              return createElement('span', 'No slot content provided!'); 
        }))    
    }
}