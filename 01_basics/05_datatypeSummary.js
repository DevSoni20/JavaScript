//Stack(Primitive) and Heap(Non-Primitive)

let name = 'Dev';
let anotherName = name;
anotherName = 'Soni';
console.log(anotherName);

let userOne = {
    email: 'devsoni4545@gmail.com',
    upi: 'devsoni-1'
}

let userTwo = userOne;
userTwo.email = 'itsdevsoni@gmail.com';
console.log(userOne.email);
console.log(userTwo.email);