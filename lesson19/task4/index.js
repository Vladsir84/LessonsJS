// User

function User(name, age) {
    // {}
    this.name = name;
    this.age = age;
}


User.prototype.sayHi = function() {
        console.log(`Hi, I am ${this.name}`);
    }
    // return { ... }


const user1 = new User('Tom', 17);
const user2 = new User('Bob', 21);

console.log(user1);

user1.sayHi();
// user2.sayHi();

// console.log(user2.sayHi === user1.sayHi);


export function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function(age) {
    if (age < 0) {
        return false;
    }
    if (age >= 0) {
        this.age = age;
        if (this.age >= 25) console.log(`New photo request was sent for ${this.name}`);
        return age;
    }
};