class User {
    constructor(email, password)
    {
        this.email = email;
        this.password = password;
    }
    get email()
    {
        return this._email.toUpperCase();
    }
    set email(value)
    {
        this._email = value;
    }
    get password()
    {
        return `${this._password}dev`;
    }
    set password(value)
    {
        this._password = value;
    }
}

const dev = new User('dev@gmail.com', 'abcd');
console.log(dev.email);
console.log(dev.password);