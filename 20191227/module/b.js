/**
 * 一个JS文件里面只能有一个default 
 * 
 * import 随意取名字 from '路径'
 * export default xxx
 * 
 * 第二种写法:
 *
 * import {,a,a,a} from  '路径'
 * 如果需要改名字,那么使用as;
 * export {xxx}
 * 
 * import * 就相当于把所有的都导出来了
 * 下面这两个效果是一样的,一个是导出变量要加花括号
 * 一个是导出函数不用加花括号;
 * 
 * ES6模块导出 引入;
 * webpack;
 * 
 */ 
export default{
    aa:5,
    bb:1
}

const str = '123456';
const ary = [1,2,3];
export {str,ary};

export function fff(){

}

function ff(){};

export {ff}