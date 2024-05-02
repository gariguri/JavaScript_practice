let arr2=['a', 'b', 'c', 'd', 'e'];
let [v1, v2, ...v3]=arr2;
let v4=["A", "B", v3]; //[ 'A', 'B', [ 'c', 'd', 'e' ] ]
console.log(v4.length)

let v5=["A", "B", ...v3];//[ 'A', 'B', 'c', 'd', 'e' ] 배열이 풀어져서 들어감
console.log(v5);