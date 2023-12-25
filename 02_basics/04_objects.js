// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = '123abc';
tinderUser.name = 'dev';
tinderUser.isLogged = false;
// console.log(tinderUser);

const regularUser = {
    email: 'devsoni@gmai.com',
    fullName: {
        userFullName: {
            firstName: 'Dev',
            lastName: 'Soni'
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "a", 4:'b'}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const user = [
    {
        id: 1,
        email: 'devsoni@gmail.com'
    },
    {
        id: 1,
        email: 'devsoni@gmail.com'
    },
    {
        id: 1,
        email: 'devsoni@gmail.com'
    },
]

user[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));