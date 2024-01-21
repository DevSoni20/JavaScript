// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Hi i am setTimeout');
//         resolve()
//     }, 1000)
// });
// promiseOne.then(function(){
//     console.log("Promised consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am task 2');
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("task 2 completed")
// });

// const promiseThird = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("I am third Promise");
//         resolve({username: "dev", email: "dev@example.com"});
//     }, 1000)
// })
// promiseThird.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error)
//         {
//             resolve({username: 'dev', password: 'abcd'})
//         }
//         else
//         {
//             reject('ERROR Somehting went wrong')
//         }
//     }, 1000)
// })
// const userName = promiseFour.then((user) =>{
//     console.log(user);
//     return user.username
// }).then((userName) =>{
//     console.log(userName);
// }).catch(function (error){
//     console.log(error);
// }).finally(() =>{
//     console.log('The promise is either resolved or rejected');
// })

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//          if(!error)
//         {
//             resolve({username: 'JavaScript', password: '123'})
//         }
//         else{
//             reject('ERROR JS went wrong');
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try 
//     {
//         const response = await promiseFive
//         console.log(response)    
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})