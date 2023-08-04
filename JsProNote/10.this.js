// let a =1 ;
// function foo(a){
//     a=2
// }
// foo()
// console.log(a)

// const royaltyName = 'tony';
// function King(){
//    this.royaltyName = 'Herry';
//    setTimeout(()=>console.log(this,this.royaltyName),500)
// }
// function Queen(){
//     // this.royaltyName = 'elizabetch'
//     setTimeout(function (){console.log(this,this.royaltyName)},50)
// }
// new King();    //'Herry'
// new Queen()    // undefined
 
// King()   //'elizabetch
// Queen()  //'elizabetch
// 'use strict'
function outer(){
    inner()
}
function inner(){
    // innnnnner()
    console.dir(inner)
    console.log(inner.caller,'inner()')
    // console.log(arguments.callee.caller,'666')
}
// function innnnnner(){
//     console.dir(inner,inner.caller,'inner.caller')
//     console.dir(innnnnner,innnnnner.caller,'innnnnner.caller')
// }
outer()