class User 
{
    constructor(username)
    {
        this.username = username;
    }
    logMe()
    {
        console.log(`USERNAME: ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}

const dev = new User('dev'); 
// console.log(dev.createId());

class Teacher extends User 
{
    
    constructor(username, email)
    {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iphone', 'i@phone.com')
iphone.logMe();