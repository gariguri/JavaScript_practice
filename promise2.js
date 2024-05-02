function fastFunction (data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result= data*2;
            console.log('Fast function done', result)
            resolve(result);
        },1000)
    })
}

function slowFunction(data){
    return new Promise ((resolve, reject)=>{
        setTimeout(function(){
            const result=data+10;
            console.log('Slow function done', result)

            resolve(result);
        },3000)
    })
}

function runTasks(){
    return fastFunction(10)
    .then((data)=>{
        return slowFunction(data); //promise 객체
    }).then(data=>{
        console.log("작업완료");
    }).catch(err=>{
        console.error(err);
    })
}
function runTask(){
    return fastFunction(10).then(data=>{
        console.log(data)
        return slowFunction(data).then(data=>{
            console.log(data)
        })
    }).catch(err=>{
        console.error(err);
    })
}
runTasks();
const sample=runTask();
console.log(sample); //promise 객체가 나온다 promise의 실행결과가 아님
//pending: 종료x
//fulfilled: 성공
//pending: 실행중



class Promise2{
    constructor(func){
        this.func=func;
    }
    then(resolve){
        this.resolve=resolve;
    }
    catch(reject){
        this.rejectFunc=reject
    }
    call(){
        this.func(this.resolve, this.reject);
    }
}