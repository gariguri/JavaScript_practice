// let first="hello world";
// let multi="hello \n world"
// console.log(first);
// console.log("----".repeat(10));
// console.log(multi);
 
// let multi = `Hello World
// Hello Js`;//멀티 라인으로 문자열 작성가능
// console.log(multi);

// let name1="신윤수";
// let multi=`Hello ${name1}
// Hello JS`;
// console.log(multi);

// let scores = " 90:30:80   ";
// //code 작성
// scores=scores.trim();
// let arr=scores.split(':');
// let sum=0;
// console.log(arr);
// for (let i=0; i<arr.length; i++){
//     let stoi=parseInt(arr[i])
//     sum=sum+stoi;
// }
// let average=sum/arr.length;
// console.log(`평균 점수는 ${average}입니다.`);





// const a="1"; //문자열
// const b=1;  //숫자형
// const c={   //object
//     name:1
// }
// const d=[1,3,4];  //배열 object
// const e=function(){  //함수 -> 변수
//     console.log("e")
// }
function createGreeting(greetingPrefix){
    return function(name){
        console.log(greetingPrefix+","+name +"!");
    }
}
const greetHello=createGreeting("Hello"); //데이터 타입: 함수,  인자를 하나 받음->name
const greeHi=createGreeting("Hi");

greetHello("Alice");
greeHi("Bob");




function sample3(){
    let name2;
    if(true){
        name2=2;
    }
    console.log(name2)
}
sample3(); //결과 값은 2 선언은 function내에서 선언했기때문에 당연히 보인다. 어디서 호출했는지가 아니라!!!