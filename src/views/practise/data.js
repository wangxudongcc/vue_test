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

  onLoadUntilScrollEdge(options) {
    let timer = null;
    let triggerFlag = true;
    let boundary = options.boundary ? options.boundary : 50;
    let event = options.event ? options.event : "bottom";

    let listenFunction = (e) => {
      let triggerPosition = false;
      let triggerText = null;
      let recordScrollTop = e.target.scrollTop;
      console.log(e.target.scrollTop,'e.target.scrollTop')

      if (e.target.scrollTop <= boundary) {
        triggerText = "top";
      } else if (
        e.target.scrollHeight - e.target.offsetHeight - boundary <=
        e.target.scrollTop
      ) {
        triggerText = "bottom";
      }

      switch (event) {
        case "top":
          triggerPosition = triggerText === "top";
          break;
        case "bottom":
          triggerPosition = triggerText === "bottom";
          break;
        case "all":
          triggerPosition = triggerText !== null;
          break;
      }

      if (triggerPosition) {
        if (!triggerFlag) {
          return;
        }

        clearTimeout(timer);
        timer = setTimeout(() => {
          new Promise((resolve) => {
            triggerFlag = false;
            e.target.style.cssText = "position:relative;overflow:hidden;";

            let tempWrapper = document.createElement("div");
            tempWrapper.style.cssText = `position:absolute;top:${-e.target
              .scrollTop}px;width:100%;`;

            let children = [];

            for (let child of e.target.children) {
              children.push(child);
            }

            for (let child of children) {
              tempWrapper.appendChild(child);
            }

            e.target.appendChild(tempWrapper);

            resolve(options.onCallback(triggerText));
          }).finally(() => {
            e.target.style.cssText = "";

            let children = [];

            for (let child of e.target.children[0].children) {
              children.push(child);
            }

            e.target.removeChild(e.target.children[0]);

            for (let child of children) {
              e.target.appendChild(child);
            }

            e.target.scrollTop = recordScrollTop;
            setTimeout(() => (triggerFlag = true));
          });
        }, 1000);
      } else {
        clearTimeout(timer);
      }
    };

    let destroy = () => {
      document
        .querySelector(options.selector)
        .removeEventListener("scroll", listenFunction);
    };

    document
      .querySelector(options.selector)
      .addEventListener("scroll", listenFunction);

    return destroy;
  },
  delay(ms) {
    // 模拟网络请求
    return new Promise((resolve, reject) => {
      console.log(reject)
      setTimeout(resolve, ms);
    });
  },
};
