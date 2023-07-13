数据改变  DOM完成以后触发;
getter/setter 
computed/watch
指定数据发生变化watch 默认不会深度监听
ary:[{
    handle(){

    },
    deep:true;

}];
compoment
template 
顶层只能有一个元素;data函数对象,放回数据;
放在new Vue 的上方;

静态的 <div num='3'></div>
动态的 <div data='num'></div>
      num = 3;

    