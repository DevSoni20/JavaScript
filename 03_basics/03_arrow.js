// This only works on object not on function 
const user = {
    username: 'dev',
    price: 999,

    welcomeMessage: function ()
    {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = 'soni';
// user.welcomeMessage();
// console.log(this)

// function chai()
// {
//     let username = 'dev'
//     console.log(this.username);
// }
// chai();

// const chai = () => {
//     let username = 'dev'
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) =>{
//     return num1+num2;
// }
// const addTwo = (num1, num2) => num1+num2;
const addTwo = (num1, num2) => ({username:'dev'})
console.log(addTwo(3, 5));

const myArr = [2,3,4,5];
// myArr.forEach()