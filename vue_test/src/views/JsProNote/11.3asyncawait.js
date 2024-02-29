// async function foo(){
//     console.log(2)
//     await undefined 
//     console.log(4)
// }
// console.log(1)
// foo()
// console.log(3)
// 1 2 3 4

async function foo(){
    console.log(await Promise.resolve('foo'))
}
async function bar (){
    console.log(await 'bar')
}
async function baz(){
    console.log('null')
}
foo()
bar()
baz()
