// # https://jsonplaceholder.typicode.com/todos/<todoId>
// - <todoId:int>는 변수

// ## 1. todoId가 1, 3, 5, 7, 9인 데이터를 조회하여 출력하세요.
// ## 2. 모든 todo중 completed가 true인 데이터만 모아서 새로운 배열을 만드세요.
// ## 3. todoId가 1, 3, 5, 7, 9인 데이터를 새로운 배열로 만들어 저장하세요.



// const todoIds = [1, 3, 5, 7, 9];
// const fetchPromises = todoIds.map((todoId) => {
//   return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
//     .then((resp) => resp.json())
//     .then((data) => data);
// });

// Promise.all(fetchPromises)
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


//   fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((resp) => resp.json())
//   .then((data) => {
//     const completedTodos = data.filter((item) => item.completed === true);
//     console.log(completedTodos);
//   });




const todoIds = [1, 3, 5, 7, 9];
const fetchPromises = todoIds.map((todoId) => {
   return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then((resp) =>resp.json())
    
});

Promise.all(fetchPromises)
  .then((results) => {
    let arr=[]
    results.map((elem)=>arr.push(elem));
    console.log(arr);
    // 여기서부터는 filteredTodos를 다른 곳에 저장하는 코드를 추가하면 됩니다.
  })
  .catch((error) => {
    console.error(error);
  });



  ///정답코드 //요청은 순서대로 되지만 결과는 뭐가 먼저끝날지 알 수 없으므로 결과는 순서대로 오지 않을 수 있음.
// 1. todoId가 1, 3, 5, 7, 9인 데이터를 조회하여 출력하세요.
  const baseUrl="https://jsonplaceholder.typicode.com/todos";
  [1,3,5,7,9].forEach((value)=>{
    const url=`${baseUrl}/${value}`
    fetch(url).then(resp=>{
        return resp.json();
    }).then (data=>{
        console.log(data);
    })
  })


  //요청순서대로 결과를 반환가능함.
  async function fetchById(todoId){
    const baseUrl="https://jsonplaceholder.typicode.com/todos";
    const url=`${baseUrl}/${todoId}`;
    const resp=await fetch(url);
    const data=await resp.json();

    return data;
  }
 ( async()=>{
    for (let i of [1,3,5,7,9]){
        console.log(await fetchById(i));
    }
  })();



  //2.모든 todo중 completed가 true인 데이터만 모아서 새로운 배열을 만드세요.
  async function fetchCompleted(){
    const url="https://jsonplaceholder.typicode.com/todos";
    const resp=await fetch(url);
    const data=await resp.json();
    const result=data.filter(elem=>elem.completed);
    console.log(result);
  }
  fetchCompleted();

  //3. todoId가 1, 3, 5, 7, 9인 데이터를 새로운 배열로 만들어 저장하세요.

async function fetchById(todoId){
    const baseUrl="https://jsonplaceholder.typicode.com/todos";
    const url=`${baseUrl}/${todoId}`;
    const resp=await fetch(url);
    const data=await resp.json();
    return data

}
(async ()=>{
    // const arr=[1,3,5,7,9].map(value=>fetchById(value));
    // const arr=[1,3,5,7,9].map(fetchById); //아래의 문장과 동일
    const arr=[1,3,5,7,9].map(value=>fetchById(value)); //리턴 값 프로미스객체를 가진 배열을 넣어줌
    const data=await Promise.all(arr);
    console.log(data);
})();
[1,2,3,4,5].map((value, idx)=>sample(value, idx));
[1,2,3,4,5].map(sample); //위와 같은 의미의 코드
