// concatProps

// const arr = ['a', 'b'];

// for (let value of arr) {
//     console.log(value);
// }

// const user = {
//     name: 'Tom',
//     key: 17,
// };

// for (let key in user) {
//     console.log(user[key]);
// }


// user => ['Tom', 17]


// const user = {
//     name: 'Tom',
//     key: 17,
// };

const concatProps = obj => {
    let arr = [];

    for (let key in obj) {
        // arr.push(obj[key]);
        arr = arr.concat(obj[key]);
    }

    return arr;
};

// console.log(concatProps(user));
