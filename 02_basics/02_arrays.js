let marvel = ["thor", "ironman", "spiderman"];
let dc = ["superman", "flash", "batman"];

marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]);

marvel = marvel.concat(dc);
// console.log(marvel);

const all = [...marvel, ...dc];
// console.log(all);

const arr = [1,2,3,[4,5,6], 7, [6,7,[8,9]]];
const narr = arr.flat(Infinity);
// console.log(narr);

console.log(Array.isArray("Dev"));
console.log(Array.from("Dev"));
console.log(Array.from({name : "Dev"}));//Interseting case for interviews

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));