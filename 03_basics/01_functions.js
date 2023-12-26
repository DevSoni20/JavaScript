function sayMyName(){
    console.log('D')
    console.log('e')
    console.log('v')
    console.log('S')
    console.log('o')
    console.log('n')
    console.log('i')
}
// sayMyName();

// function addTwoNumber(number1, number2)
// {
//     console.log(number1+number2);
// }
function addTwoNumber(number1, number2)
{
    // let result = number1 + number2;
    // return result;
    return number1+number2;
}
const result = addTwoNumber(3, 5);
// console.log(result);

function loginUserMessage(userName)
{
    if(userName == undefined){return `Nothing is passed`;}
    return `${userName} just logged in`;
}
// console.log(loginUserMessage());

function calculateCartPrice(...num1)
{
    return num1;
}
// console.log(calculateCartPrice(100, 200, 300, 400));

const user = {
    username: 'Dev',
    price: 199
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username: 'sam',
    price: 200
})

const newArray = [100, 200, 300, 400];
function returnSecondValue(getArray)
{
    return getArray[1];
}
console.log(returnSecondValue(newArray));