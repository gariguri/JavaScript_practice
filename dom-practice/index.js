const input1=document.getElementById("input1");
const input2=document.getElementById("input2");
let inputValue1 = Number(input1.value);
let inputValue2 = Number(input2.value)
input1.addEventListener('input', e=>{
	inputValue1 = Number(e.target.value);
    renderResult();
})
input2.addEventListener('input', e=>{
	inputValue2 = Number(e.target.value);
    renderResult();
})
function renderResult(){
	const resultBox = document.getElementById('result');
	const sum = inputValue1 + inputValue2;
	if (isNaN(sum)){
		sum = "사용할 수 없는 값";
	}
	resultBox.innerHTML = sum
}
renderResult();

// function onBlockClick(e){
//     alert("버튼 클릭1");
//     console.log(e);

// }
// function onChangeInput(e){
//     console.log(e);
    
// } 
// const searchInput=document.getElementById('search');
// searchInput.addEventListener('change', onChangeInput);
// function calculateSum(){
//     const input1=document.getElementById("input1").value;
//     const input2=document.getElementById("input2").value;
//     var sum=parseInt(input1)+parseInt(input2);
//     document.getElementById("result").innerText=sum;
// }
