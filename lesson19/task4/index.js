export function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
}

User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
}

User.prototype.setAge = function () {
    if (User.age >= 25) {
        console.log(`New photo request was sent for ${this.name}`);
    }
    if (User.age < 0) {
        return false;
    }
    return typeof 'number'
}

// const user1 = new User('Tom', 17);
// const user2 = new User('Bob', 21);

// console.log(user1);

// user1.sayHi();