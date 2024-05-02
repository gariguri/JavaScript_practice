const score1=parseInt(prompt("점수를 입력해주세요: "));
const score2=parseInt(prompt("점수를 입력해주세요: "));
const score3=parseInt(prompt("점수를 입력해주세요: "));

if(score1<0 || score1>100 || score2<0 || score2>100 ||score3<0 || score3>100){
    alert("잘못된 숫자를 입력하셨습니다.");
}
else if(score1>=65 && score2>=65 && score3>=65){
    alert("합격");
}
else{
    alert("불합격");
}