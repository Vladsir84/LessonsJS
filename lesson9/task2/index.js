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



const user = {
    name: 'Tom',
    age: 17,
};

// const player = {...user };

// console.log(player);

const { name = 'default', ...restProps } = user;


const player = {
    game: 'football',
    ...restProps
}

console.log(player);