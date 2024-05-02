const myName="김가언";
let options={
    title: "Menu",
    width:100,
    height: 200,
    k1:'v1',
    k2:'v2'
}
let options2={
    newKey:"새로운 값",
    
    ...options, //{ title: 'Menu', width: 100, height: 200, k1: 'v1', k2: 'v2' }
    width: 500, //키값이 중복되면 덮어 씌움.
    title: "newTitle",
    myName //변수 이름 자체가 키값으로 들어간다.
}
console.log(options2);

