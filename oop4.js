function Animal(name){
    this.name=name;
    this.run=function(){
        console.log(`${this.name}이 달린다.`);
    }
}
Animal.prototype.eat=function(){
    console.log(`${this.name}이 먹습니다.`)
}

const animal=new Animal("기린");
//animal.__proto__=Animal.prototype


// animal.<특정속성> 호출시 자기자신의 this.속성(메소드)에 없는 속성이면
//animal.__proto__에서 찾는다.

//생성자함수에는 프로타입이라는 객체가 있어
//그리고 new 키워드를 통해서 생성하면 객체가 튀어나오는데 this.name과 this.key값이 있어
//animal.__proto__=Animal.prototype


//상속 구현의 예
function Rabbit(name, color){
    Animal.apply(this, arguments)   //this. rabbit으로 바꾸어주어야해
    this.name=name;
    this.color=color;
}
Rabbit.prototype=Object.create(Animal.prototype); //assign: 복사, create:요놈을 새로운 구현체를 가지는 새로운 객체로 만드는 것 Animal.
//prototype를 가진 빈 객체 생성하는 것

console.log(Rabbit.prototype);
console.log("DDD");
Rabbit.prototype.constructor=Rabbit; //animal로 되어 있기 때문에 명시

console.log(Rabbit.prototype.__proto__);

const rabbit=new Rabbit('토순이', 'brown');
rabbit.run();
rabbit.eat();
