export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    
    static createEmpty() {
        return user = {
            name: '',
            age: null,
    }
}
    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(value) {
        if (value < 0) {
            return false;
        }
        this.age = value;
        if (age >= 25) {
            this.requestNewPhoto();
        }
        return value;
    }
}

// const user1 = new User('Tom', 17);
// const user2 = new User('Bob', 32);
// console.log(User.compare(user1, user2));
