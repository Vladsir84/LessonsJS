// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log(`Hi, I am ${this.name}`);
//     }

//     requestNewPhoto() {
//         console.log(`New photo request was sent for ${this.name}`);
//     };

//     setAge(value) {
//         if (value < 0) {
//             return false;
//         }
//         this.age = value;
//         if (value >= 25) {
//             this.requestNewPhoto();

//         }
//         return value;
//     }

// }


// const user1 = new User('Tom', 17);

// console.log(user1)


// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// User.prototype.sayHi = function() {
//     console.log(`Hi, I am ${this.name}`);
// }

// User.prototype.requestNewPhoto = function() {
//     console.log(`New photo request was sent for ${this.name}`);
// };

// User.prototype.setAge = function(value) {
//     if (value < 0) {
//         return false;
//     }
//     this.age = value;
//     if (value >= 25) {
//         this.requestNewPhoto();

//     }
//     return value;
// };

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static compare(user1, user2) {
        return user1.age - user2.age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    };

    setAge(value) {
        if (value < 0) {
            return false;
        }
        this.age = value;
        if (value >= 25) {
            this.requestNewPhoto();

        }
        return value;
    }

}

const user1 = new User('Tom', 17);
const user2 = new User('Tom', 34);

console.log(User.compare(user1, user2));

export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static createEmpty() {
        return {
            name: "",
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
        if (value < 0) return false;
        this.age = value;
        if (this.age >= 25) this.requestNewPhoto();
        return value;
    }
}