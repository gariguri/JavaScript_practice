new Promise((resolve, reject)=>{
    console.log("Promise1");
    const value=10;
    if(1){
        resolve(value)
    }else{
        reject(value)
    }
}).then(data=>{ //resolve에 매핑됨.
    console.log("Resolve!");
    console.log(data);
    return Promise((resolve, reject)=>{
        if(true){
            resolve(20);
        }else{
            reject(30);
        }
    })
}).catch(err=>{ //reject에 매핑됨.
    console.error("Resolve");
    console.error(err);
}).then(data=>{
    console.log("2번째 Promise");
    return new Promise((resolve, reject)=>{
        //...계속된 로직...
    })
}).catch(data=>{
    
})