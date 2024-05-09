const animal={
    name:"lion",
    run(){
        console.log(`${this.name}이 달립니다.`);
    },
    run2: function(){
        console.log('동물이 달려요.');
    }
}
animal.run();
animal.run2();