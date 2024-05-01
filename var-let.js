
//hoisting
function sample(){
    // console.log(name1);
    if (true){
        let name1=1; //블록 스코프 블록->if 바깥에서 호출 불가능
    }
    console.log(name1);

} 
//에러가 발생
sample();
function sample2(){
    console.log(name2); //변수 선언을 맨 위로 올려버리기 때문에 에러가 발생하지 않음
    
    if (true){
        var name1=1; //생성과 초기화를 동시에, 함수 스코프
    }
    console.log(name2);
}
sample2();
//에러가 발생하지 않음




