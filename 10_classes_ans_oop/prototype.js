let myName = 'Dev'
// console.log(myName.length);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dev = function(){
    console.log(`Dev is present in all objects`);
}

Array.prototype.heyDev = function()
{
    console.log(`Dev says hello`);
}

// heroPower.dev()
// myHeros.dev();
// myHeros.heyDev();
// heroPower.heyDev();

// Inheritance

const user = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailabe: false
}

const TASuppot = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = 'Chai aur code        '

String.prototype.trueLength = function()
{
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
'Dev'.trueLength();