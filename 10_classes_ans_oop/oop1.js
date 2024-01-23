// const user = 
// {
//     username : 'htesh',
//     loginCount: 12,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

function user(username, loginCount, signedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    return this;
}

const userOne = new user('Dev', 1, false);
const userTwo = new user('Ajay', 3, true);

console.log(userOne);
console.log(userTwo);