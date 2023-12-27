// const userEmail = "";

// if(userEmail)
// {
//     console.log("Got user email");
// }
// else{
//     console.log("don't have user email");
// }

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN;

// truthy values 
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0)
// {
//     console.log("Array is empty");
// }
// const obj = {}
// if(Object.keys(obj).length === 0)
// {
//     console.log("object is empty");
// }

// Nullish Coalescing operator (??): null undefined 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
// console.log(val1);

// terniary operator

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log('Greater than 80') : console.log('less than 80');