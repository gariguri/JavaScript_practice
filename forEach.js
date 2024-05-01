const arr1=[1,2,3,4,5];
const result=arr1.forEach((item, idx)=>{
    console.log(item*10);
})




function sample(item, idx){
    console.log(item-idx)
}
arr1.forEach(sample);

console.log(result);
