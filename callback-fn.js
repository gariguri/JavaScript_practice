
function fastFunction(err, data, done){
    //1초 걸리는 함수. (2를 곱한다.)
    setTimeout(function(){
        done(undefined, data*2);
    },1000)
}
function slowFunction(err, data, done){
    //3초 걸리는 함수. (10을 더한다.)
    setTimeout(function(){
        done(undefined, data+10);
    }, 3000)
}
function runTasks(cb){
    fastFunction(undefined, 10, (err, data)=>{
        if(err){
            return callback(err);
        }
        console.log("fastFunction", data);
    
    slowFunction(undefined, data, (err, data)=>{
        if(err) return callback(err);
        console.log("slowFunction", data);
    })
    })// 여기까지 (err, data)의 callback 함수
}
// 실행이 끝나고 다시 들어오는 모든 함수들 실행결과를 반환받아 처리할 함수

runTasks(err=>{
    console.log(err)}
)