// Singleton
// object.create

// object literals

const mySym = Symbol('myKey1');

const Jsuser = {
    name : 'Dev',
    [mySym]: 'myKey2',
    age: 20,
    location: 'Dehradun',
    email: 'devsoni@gmail.com',
    isLoggedIn: false,
    lastLogInDay: ["Monday", "Saturday"]
}
// console.log(Jsuser.email);
// console.log(Jsuser['email']);
// console.log(Jsuser[mySym]);

Jsuser.email = 'itsdevsoni@gmail.com';
// Object.freeze(Jsuser);
Jsuser.email = 'ragini@gmail.com';
// console.log(Jsuser);

Jsuser.greeting = function()
{
    console.log('Hello JS User');
}
Jsuser.greetingTwo = function()
{
    console.log(`Hello Js User, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());