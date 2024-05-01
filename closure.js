// function outer(){
//     let count=0;
//     // function sample(){
//     //     console.log(count);
//     // } 메모리 누수(?)
//     function inner(){
//         count++;
//         return count;
//     }
//     return inner;
// }
// const counter=outer(); //inner함수가 할당됨.
// console.log(counter());  //1 //inner함수가 호출됨
// console.log(counter());  //2
// //외부에서 count변수에 접근할 수 없지만, inner함수가 해당 변수를 참조하고 있어서 count변수에 접근이 가능함.
// //매모리 값이 변경되지 않음
// //안쓰는 함수를 넣어놓게 되면 메모리 누수현상이 일어남.




//closure 연습문제
function createCounter(){
    let count=0;
    function inner(){
        count++;
        return count;
    }
    return inner;

}
const counter1=createCounter();
console.log(counter1()); //1
console.log(counter1()); //2


const counter2=createCounter();
console.log(counter2()); //1
console.log(counter2()); //2
console.log(counter1()); //3


function createnCounter(n){
    let count=0;
    function inner(){
        count=count+n;
        return count;
    }
    return inner;

}
const countern1=createnCounter(4);
console.log(countern1()); //4
console.log(countern1()); //8


const countern2=createnCounter(6);
console.log(countern2()); //6
console.log(countern2()); //12
console.log(countern1()); //18







function creatIncrementer(start, step){
    let init=start
    let plus=step
    function inner(){
        init=init+=plus
        return init
    }
    return inner지금

}
const incByOne=creatIncrementer(5,1);
console.log(incByOne());  //6
console.log(incByOne());  //7

const incByTen=creatIncrementer(10,10);
console.log(incByTen());  //20
console.log(incByTen());  //30

