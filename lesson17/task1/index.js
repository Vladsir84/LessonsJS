// methods

// const user = {
//     name: 'John',
//     age: 17,
//     sayHi: function() {
//         console.log(`Hi, I am ${this.name}.`);
//     }

// };

// user.sayHi();

// export const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     getFullName() {
//         return (`${this.firstName} ${this.lastName}`);
//     }
// };

// user.getFullName();

// const func = user.getFullName.bind(user);

// func();

// .bind();

// const user = {
//     name: 'Doe',
//     getFullName() {
//         console.log(this.name);
//     }
// };

// // user.getFullName();

// const func = user.getFullName.bind({ name: 'Tom' });

// func();


// const user = {
//     name: 'Doe',
//     getFullName() {
//         console.log(this.name);
//     }
// };

// // user.getFullName();

// const func = user.getFullName;

// func.call({ name: 'Tom' });


// const user = {
//     name: 'Doe',
//     sayHi(age, message) {
//         console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
//     }
// };

// // user.getFullName();

// const func = user.sayHi;

// const anotherUther = {
//     name: 'Tom'
// };

// func.apply(anotherUther, [17, 'Hello']);

// func.apply({ name: 'Tom' });
export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    }
};
