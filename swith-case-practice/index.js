const number=parseInt(prompt("정수를 입력해주세요: "));

let n=number%2;
switch (n){
    case 0:
        alert(`입력하신 ${number}는 짝수입니다.`);
        break;
    case 1:
        alert(`입력하신 ${number}은 홀수입니다.`);
        break;
}
