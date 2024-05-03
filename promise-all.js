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
    // Promise.all(
    //     [fastFunction(5), slowFunction(10)]
    // ).then(([result1, result2])=>{ //반환된 데이터를 풀어서 받음
    //     console.log('작업종료');
    //     console.log(result1);
    //     console.log(result2);
    // })
    Promise.all(
        [fastFunction(5), slowFunction(10)]
    ).then((data)=>{
        console.log(data); //반환된 배열을 출력
    })

}
runTask();