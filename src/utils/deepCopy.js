// 深拷贝方法
export function deepCode(data) {
  let newCopyData = [];
  let ObjKeys = Object.keys(data);
  if (Object.getPrototypeOf(data) === Array.prototype) {
    for (let i = 0; i < ObjKeys.length; i++) {
      if (typeof data[ObjKeys[i]] == "object") {
        newCopyData.push(deepCode(data[ObjKeys[i]]));
      } else if (typeof ObjKeys[i] == "number") {
        newCopyData.push(data[ObjKeys[i]]);
      } else {
        newCopyData[ObjKeys[i]] = data[ObjKeys[i]];
      }
    }
    newCopyData.length = data.length;
  } else if (Object.getPrototypeOf(data) === Object.prototype) {
    for (let i = 0; i < ObjKeys.length; i++) {
      if (typeof data[i] == "object") {
        newCopyData[ObjKeys[i]] = deepCode(data[i]);
      } else {
        newCopyData[ObjKeys[i]] = data[ObjKeys[i]];
      }
    }
  } else {
    return data;
  }
  return newCopyData;
}
