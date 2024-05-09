
function Animal(name){ //대문자로 시작하자는 악속
    this.name=name;
    this.run=function(){
        console.log(`${this.name} 동물이 달린다.`);
    }
}



const animal1=new Animal("사자");
const animal2=new Animal("호랑이");
animal1.run();
animal2.run();


console.log('-'.repeat(10))
animal1.run=function(){
    console.log("새로운 달리기");
}


animal1.eat();
animal2.eat();
console.log(animal1);
console.log(animal2);

Animal.prototype.eat=function(){
    console.log("새로운 먹기");
}
animal1.eat();
animal2.eat();
// 프로토타입은 인스턴스들이 공유한 매소들을 저장하는 공간
// 이 생성자로인해 만들어진 인스턴스들이 공유할 매소드와 속성이 저장된 공간
// rabbit상속받는 경우 상속을 올바르게 이루어지기 위해서는 animal안에 있는 this. 자체의 인스턴스 값이고,
// 그대로 수동으로 rabbit.prototype을 복사해서 넣어준것