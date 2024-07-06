//refernce is passed
let user1 = {
    name: 'dev',
    age: 20,
}

let user2 = user1;

user2.name = 'Soni';

console.log(user2.name);
console.log(user1.name);


//copy is passed
let a = 'dev';

let b = a;
b = 'soni'

console.log(b);
console.log(a);