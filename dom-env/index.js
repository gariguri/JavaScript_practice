// function ask(question, onConfirm, onCancel) {
//     const userResponse = confirm(question);
//     if (userResponse) {
//         onConfirm();
//     } else {
//         onCancel();
//     }
// }
function ask(question, onConfirm, onCancel) {
    if (question()){
        onConfirm();
    } else {
        onCancel();
    }
}


ask(
    ()=>confirm("동의하십니까?"), //return 이 생략된 형태 => 화살표함수에서 중괄호가 추가되면 return값이 존재하지 않음.
    function() { alert("동의하셨습니다."); }, 
    function() { alert("취소 버튼을 누르셨습니다."); }
);


()=>{
    return confirm("동의?");
}
//위 아래 같은 의미의 코드
()=>confirm("동의?");