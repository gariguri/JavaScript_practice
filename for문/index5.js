//(1) word = [“school”, “game”, “piano”, “science”, “hotel”, “mountian”] 중 
//글자수가 6글자 이상인 문자를 모아 새로운 배열 생성하세요
const word = ["school", "game", "piano", "science", "hotel", "mountian"];
// const arr=[]
// for (let w of word){
//     if(w.length>=6){
//         arr.push(w)
//     }
// }
const arr = word.filter(
    element => {return element.length >= 6
    
    });
//const arr = word.filter(element => element.length >= 6); 위와 같은 식
console.log(arr);


for(let i =1; i<=9; i++){
    for (let j=1; j<=9; j++){
        console.log(`${i}*${j}=${i*j}`);
    }
}