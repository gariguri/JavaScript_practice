//만약 같은 형태의(속성을 가진) 객체를 여러개 만들고 싶으면?
//javaScript는 생성자 함수.

function Animal(name){ //대문자로 시작하자는 악속
    this.name=name;
    this.run=function(){
        console.log(`${this.name} 동물이 달린다.`);
    }
}


const animal2=new Animal("사자");
console.log(animal2);
console.log(animal2.constructor);
console.log(Animal.prototype);
animal2.run();   


//상속받을 다른 프로토타입에게 전달할 매소드들을 정의하는 것
//부모 클래스가 자식 클래스에게 전달한 메소드를 정의하는 것

Animal.prototype.eat=function(){
    console.log(`${this.name}가 먹는다.`);
}

console.log('-'.repeat(10));
animal2.eat();
console.log(animal2);
console.log(animal2.__proto__);
//내가 빗대어서 만들어진 생성자의 prototype에게 접근하는 함수
//내가 만들어진 생성자 함수의 prototype에 접근하는 함수
function Rabbit (name, color){
    Animal.apply(this,  arguments);
    this.color= color;

}

Rabbit.prototype=Object.create(Animal.prototype); //주소값을 복사하는 것이아니라 새로운 주소값을 할당해서 별도의 animal prototype을 생성함.
Rabbit.prototype.constructor=Rabbit;  //Animal를 가리키고 있기때문에 Rabbit 상속된 것임을 수동으로 바꾸어줌


const rabbit=new Rabbit("토순이", "white");
console.log(rabbit);
rabbit.run();
rabbit.eat();

console.log(rabbit.__proto__.__proto__);
console.log("-".repeat(10));
console.log(rabbit.__proto__);

//인스턴스가 공유할 함수들


//