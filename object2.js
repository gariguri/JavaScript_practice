let arr=["Kim", "Shin"];
let[name1, name2]=arr;

console.log(name1);
console.log(name2);

let arr2=['a', 'b', 'c', 'd', 'e'];
let [v1, v2, ...v3]=arr2;
console.log(v1); //'a'
console.log(v2); //'b'
console.log(v3); //['c', 'd']

