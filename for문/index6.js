for (let i=1 ; i<=100; i++){
    if (i%3===0 && i%5===0){
        console.log("3과 5의 공배수");
    }
    else if(i%3===0){
        console.log("3의 배수");
    }
    else if(i%5===0){
        console.log("5의 배수");
    }
    else{
        console.log(i);
    }
}