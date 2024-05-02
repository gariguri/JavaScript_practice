let x = [3, 6, 9, 20, -7, 5];
for (let i of x){
    console.log(i*10)
}
console.log(x)
for (let i=0; i<x.length; i++){
    console.log(x[i]*10);
    x[i]=x[i]*10;
}
console.log(x);
x=x.map((elem)=>{
    return elem*10
})


let y = {"math": 70, "science": 80, "english": 20};
for (let i in y){
    y[i]=y[i]+10;
    console.log(y[i])
}
console.log(y);

//(3) 숫자를 입력받고 입력받은 정수의 구구단을 출력하세요
// const num=parseInt(prompt("정수를 입력해주세요: "));
num=5;
for(let i=1; i<=9; i++){
    console.log(`${num}*${i}=${num*i}`);
}
