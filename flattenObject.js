const obj = {
    A:"12",
    B:23,
    C:{
      P:23,
      O:{
        L:56
      },
      Q:[1,2]
    }
}

function flattenObject(obj,parentKey){
  let result = {}
  for(let key in obj){
    let newKey = parentKey ? parentKey+"."+key : key;
     if(typeof obj[key] === typeof {} && !Array.isArray(obj[key])){
        const res = flattenObject(obj[key],newKey)
        // console.log(res)
        result = {...result,...res}
     }else{
        result[newKey] = obj[key]
     }

  }
  return result;
}
const newObj = flattenObject(obj,"")
console.log(newObj);
