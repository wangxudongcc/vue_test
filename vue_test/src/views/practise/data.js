let data = [
    { name: 'wang', phoneNumber: 18713102810 }, 
    { name: '董欢迎', phoneNumber: 15530717659 }, 
    { name: 'wang', phoneNumber: 13102855460 },
    { name: '王旭东', phoneNumber: 13292874554 }];
export default {
    // yesOrNoData 判断名字或者手机号码是否存在于对应的
  yesOrNoData(value) {
    console.log(value, "value");
    if(value&&value.length>=5&&(typeof value[0]==Number||typeof value[1]==Number)){
        let a = data.find(item=> item.phoneNumber == value);
        if (a) {
          return  "手机号：" + a.phoneNumber +"存在于本系统中,该用户名为" +a.name+'66666666666'
        } else {
          return "666666666";
        }
    }else if(value&&typeof value[0]!=Number){
        let b = data.find(item =>item.name == value);
        if (b) {
          return   b.name+'存在于本系统中,手机号为'+ b.phoneNumber 
        } else {
          return "7777777777";
        }
    }else{
        return '需要填写手机号码或者姓名'
    }
   
  },
}; 

