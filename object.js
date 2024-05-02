const KEY='SAMPLE';
const johnProfile={
    name:"john",
    sayHi: function(){
        console.log(this.name, "친구야 반갑다!");

    },
    [KEY] : "sampleValue"
}
johnProfile.sayHi(); //1. .으로 접근
console.log(johnProfile['sayHi']); // 2. 키값을 대괄호로 접근
console.log(johnProfile.SAMPLE);
console.log(johnProfile['SAMPLE']);