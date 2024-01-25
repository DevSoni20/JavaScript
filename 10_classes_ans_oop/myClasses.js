// class user {
//     constructor(username, email, password)
//     {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword()
//     {
//         return `${this.password}abc`;
//     }
//     changeUsername()
//     {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const obj = new user('Dev', 'devsoni@gmail.com', '124');

// console.log(obj.encryptPassword());
// console.log(obj.changeUsername());

// behind the scence 

function User(username, email, password)
{
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User('tea', 'tea@gmail.com', '456');

console.log(tea.encryptPassword());
console.log(tea.changeUsername());