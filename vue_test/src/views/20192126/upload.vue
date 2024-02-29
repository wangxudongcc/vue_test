<template>
<div>
    注册的用户名:<input id="user" type="text" /><span id='s'></span>
        注册的密码:<input type='password' id='pw'/>
    </br>
    注册的密码:<input type='password' id='pw'/>
    <button id='btn'>提交</button>
    <ul id='ul'></ul>
</div>
</template>
<script>
    user.onblur = function(){
        ajax('./data.xml',{
            success(d){
                const person = d.getElementsByTagName('person');
                let temp='';
                for(let i =0;i<person.length;i++){
                    temp +=`<li>我的名字叫:${person[i].children[0].innerHTML},今年${person[i].children[1].innerHTML}岁,我想说:${person[i].children[3].innerHTML}</li>`
                }
                ul.innerHTML =temp;
                console.log(person);
            }},{
                dataType:'xml'
            })
        }
        function ajax(url,cb,opt){
            var myopt = opt&&{
                method:opt.method||'get',
                body:opt.body || '',
                headers:opt.headers||{},
                dataType:opt.dataType||'json',
                timeout:opt.timeout||10000,
                ontimeout :opt.ontimeout||function(){},
                async:(opt.async ===undefined)?true:opt.async
            }
            var len = arguments.length;
            var xhr = new XMLHttpRequest;
            if(opt.async ===true){
                xhr.timeout = myopt.timeout;
            }
            function ready(){
                if(myopt.async ===true){
                    xhr.onreadystatechange =function(){
                        if(xhr.readyState ===4){
                            if(/(20[0-7])|(30[14])/.test(xhr.status)){
                                if(myopt.dataType ==='json'){
                                    cb.success && cb.success(eval('('+xhr.responseText+')'))
                                }else if(myopt.dataType==='xml'){
                                    cb.success &&cb.success(xhr.responseXML)
                                }
                            }else{
                                cb.error && cb.error(xhr.status);
                            }
                        }
                    }
                }else{
                    if(/(20[0-7])|(30[14])/.test(xhr.status)){
if(myopt.dataType ==='json'){
    cb.success && cn.success(eval('('+xhr.responseText+')'))}else if(myopt.dataType==='xml'){
        cb.success && cb.success(xhr.responseXML)
    }
                    }
                    else{
                        cb.error && cb.success(xhr.status);
                    }
                }
            }
            if(len ===2){
                xhr.open('get',)
            }
        }
</script>
<style>
  #bar{
            width: 100%;
            height: 5px;
            position: relative;
        }
        #box{
            width: 0;
            height: 5px;
            background: yellow;
        }</style>
