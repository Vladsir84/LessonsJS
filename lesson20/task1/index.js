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
