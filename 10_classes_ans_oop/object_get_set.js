const User = {
    _email: 'dev@gmail.com',
    _password: 'abcd',

    get email()
    {
        return this._email.toUpperCase();
    },
    set email(value)
    {
        this._email = value;
    }
}

const tea = Object.create(User);
console.log(tea.email);