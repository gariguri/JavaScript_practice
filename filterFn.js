const arr=[1,2,3,4];
const result=arr.filter((item, idx)=>{
    return item>3;
})
console.log(result);
//리턴 값이 true인 것들만 모아서 새로운 배열을 만든다.