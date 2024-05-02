let jsonFile = '{"MyBad"}';
// let jsonFile = '{"MyGood": "myValue"}';
try {
    console.log('code1');
    throw new SyntaxError("에러 발생");
    // const value=JSON.parse(jsonFile);
    // console.log(value);
    console.log('code1 종료');
} catch (err){
    if (err instanceof SyntaxError){
        //syntax Error Handling
    }else if(err instanceof RangeError){
        // range Error Handling...
    }
    console.log("Error 처리");
    // console.log(err);
    console.log(err.name); //SyntaxError
    console.log(err.message); //에러발생
    console.log(err.stack);//SyntaxError: 에러 발생
} finally{
    console.log("finally");
}