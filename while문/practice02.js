let num=0;
function limitCalls(func, n) { // 여기에 코드를 작성하세요.
    let num=0;
    return function(){
        if(num<n){
            func();
            num++;
        }
        if (num===n){
            return 0;
        }
    };
}
const limitedHello = limitCalls(() => console.log("Hello!"), 2); 
limitedHello();
limitedHello();
limitedHello();