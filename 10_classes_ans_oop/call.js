function setUsername(username)
{
    this.username = username;
}

function createUser(username, email, password)
{
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const obj = new createUser('Dev', 'devsoni@gmail.com', 'abcd');
console.log(obj);