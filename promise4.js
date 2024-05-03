const delay=(ms) => new Promise(resolve=> setTimeout(resolve, ms)); //promise 객체, 비동기 코드 흐름을 기다렸다가 실행한다.

function fastFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result=data*2;
            console.log('Fast function done', result);

            resolve(result);

        },1000);
    })
}
//try-catch를 사용해서 에러를 처리함.


function runTask2(){
    slowFunction(10).then(data=>{
        console.log(data);
    })
} //async 함수가 아니므로 await를 사용하지 않는다면 then을 사용해 비동기 처리를 해줄 수 밖에 없음
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

function sample(){
    return 10 
}//promise객체가 아니기 때문에 await사용불가
//비동기 함수가 아니기 때문에 사용 가능
async function runTasks(){
    let result=await fastFunction(10);
    console.log(data);
    try{
        data= await slowFunction(data);
    }catch(err){
        console.error(err);
    }
    const sample=fastFunction(10); //새로운 promise객체 반환, await가 없으면 자기 멋대로 비동기적으로 실행됨.

    result=await slowFunction(result);
    console.log("작업완료", result);
    console.log(data);
    return data;

}
runTasks();
console.log(sample); //전체 로직에서는 비동기 , 각각은 blocking되어 실행되기때문에 동기이다.