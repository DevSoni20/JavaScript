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
console.log(loginUserMessage());