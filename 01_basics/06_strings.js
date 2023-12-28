const name = 'Dev';
const repoCount = 8;
// console.log(name+repoCount);
// OR alos known as string interpolation
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('ragini singh');

// console.log(gameName);
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(1, 4);
// console.log(newString);
const anotherString = gameName.slice(0, 4);
console.log(anotherString);

const newStringOne = "     Dev       ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://dev.com/dev%20soni";
// console.log(url.replace('%20', '-'));

// console.log(url.includes('dev'));

// console.log(gameName.split('-'));