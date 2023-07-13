let style = localStorage.getItem('style');
    if(!style){
        console.log(!style);
        fetch('./index.css').then(e=>e.text()).then(d=>{
            let link =document.createElement('style');
            link.innerHTML = d;
            document.querySelector('head').append(link);
            localStorage.setItem('style',d);
        })
    }else{
        let link =document.createElement('style');
        link.innerHTML =style;
        document.querySelector('head').append(link);
    }

const lis = document.querySelectorAll('#ul1 li');
let ary = JSON.parse(this.localStorage.getItem('gwc'))||[];
render(ary);  

lis.forEach((ele,i)=>{
    ele.onclick = function (){
        if(!ary.includes(this.innerText)){
        ary.push(this.innerHTML);
        localStorage.setItem('gwc',JSON.stringify(ary));
        render(ary)
        console.log(render(ary));
    }
    }
});
//=>设置本地存储的时候,会默认转字符串'toString'
// 只要是修改了localStorage
window.onstorage = function(){
    ary = JSON.parse(localStorage.getItem('gwc'))||[];
    render(ary);
}
//=>删除购物车
ul2.onclick = function(ev){
    if(ev.target.tagName ==='LI'){
        ary = ary.filter(item=>item !== ev.target.innerText);
        render(ary);
        localStorage.setItem('gwc',JSON.stringify(ary));
    }
}

function render(ary){
    let html =ary.map(item=>`<li>${item}</li>`).join('');
    ul2.innerHTML = html;
}