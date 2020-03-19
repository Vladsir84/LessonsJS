// copyObj

// const users = {
//     'Tom': 17,
//     'Bob': 100,
// };


// const players = {
//     'John Doe': 19,
//     'Bob': 18,
// };

// const res = Object.assign(users, players);

// console.log(res);

// res.Tom = 90;

// console.log(users);

// const copyObj = obj => Object.assign({}, obj);

// console.log(copyObj(players));



// const user = {
//     name: 'Tom',
//     age: 17,
// };

// const player = {...user };

// console.log(player);

// const { name = 'default', ...restProps } = user;


// const player = {
//     game: 'football',
//     ...restProps
// }

// console.log(player);

// //methods

// const user = {
//     name: 'Tom',
//     age: 17,
//     sayHi: function() {
//         console.log('Hi');
//     }
// };

// user.sayHi();

// // [1, 2].forEach

// // console.log('text'.toUpperCase());

// console.log(1..toFixed());
// const copyObj = obj => Object.assign({}, obj);


const obj = {
    'John Dee': 19,
    'Tom': 17,
    'Bob': 18,
}

const copyObj = obj => {
    const newObj = {...obj};
    return newObj
 } 
 
console.log(copyObj(obj));