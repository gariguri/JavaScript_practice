const delay=(ms) => new Promise(resolve=> setTimeout(resolve, ms)); //promise 객체, 비동기 코드 흐름을 기다렸다가 실행한다.
async function fastFunction(data){
    await delay(1000); //resolve되기를 기다리는 await 키워드! resolve의 인자로 넣어준 값이 return 되는 것 
    const result=data*2;
    console.log("Fast Function done", result);
    return result;
}


async function slowFunction(data){
    await delay(3000);
    const result=data+10;
    console.log('slow function done',result);
    return result;
}

function runTask(){
    Promise.any([
        fastFunction(5),
        slowFunction(10),
        Promise.reject(new Error("Error"))
    ]
).then((data)=>{
    console.log("작업완료");
    console.log(data);
})

}
runTask();






