const arr=[1,2,3,4,5];
const result=arr.reduce((prev, cur, idx, arr)=>{
    console.log(prev, cur, idx, arr);
    console.log("-".repeat(10))
    return prev+cur;
}, 10)

console.log(result); //25
// result값은 모든 값의 누적 값