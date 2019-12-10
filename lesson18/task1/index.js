'use strict';

// event (this in arrow functions)

// const obj = {
//     name: 'Tom',
//     sayHi() {
//         console.log(this);
//     },
// };

// // obj.sayHi();

// const func = obj.sayHi;

// func();

// console.log(this);


// function func() {
//     console.log(this);
// }

// func();

// window.user = {
//   name:
//   id     // глобальный объект
// }; 


// var a = 1;
// console.log(window.a);


// const user = {
//     name: 'Tom',
//     sayHi() {
//         console.log(this);
//     },
// };

// // const func = user.sayHi;
// // func();

// // setTimeout(user.sayHi.bind(user), 100);

// setTimeout(() => user.sayHi(), 100);


export const event = {
    guests: [
        { name: 'Tom', email: 't@gmail.com', age: 17 },
        { name: 'Bob', email: 'b@gmail.com', age: 18 },
    ],
    message: 'Welcome to the party',
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                text: `Hi ${name}. ${this.message}!`,
                email,
            }));
    }
}

// console.log(event.getInvitations());


// const event = {
//     guests: [
//         { name: 'Tom', email: 't@gmail.com', age: 17 },
//         { name: 'Bob', email: 'b@gmail.com', age: 18 },
//     ],
//     message: 'Welcome to the party',
//     getInvintations() {
//         return this.guests
//             .filter(({ age }) => age >= 18)
//             .map(function({ name, email }) {
//                 console.log(this);
//                 return {
//                     text: `Hi ${name}. ${this.message}`,
//                     email
//                 };
//             }, event);
//     }
// }

// console.log(event.getInvintations());