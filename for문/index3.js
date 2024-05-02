// const number=parseInt(prompt("정수를 입력해주세요: "));
number=5;

for (let i=1; i<=number; i++){
    for (let j=1; j<=number-i+1; j++){
        process.stdout.write('*');
    }
    console.log("");
}

//console.log("*".repeat(number-i))