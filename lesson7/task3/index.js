// [1, [2, 3, 4], 5, [6]] => [1, 2, 3, 4, 5, 6]


// const flatArray = arr =>
//     arr.reduce((acc, elem) => {
//         return acc.concat(elem);
//     }, []);

// const initArray = [1, [2, 3, 4], 5, [6]];

// console.log(flatArray(initArray));




const flatArray = arr => arr
    .flat();

// const initArray = [1, [2, 3, 4], 5, [6]];

// console.log(flatArray(initArray));





// [1, 2, 3, 4] => 10;

// [1, 2, 3, 4].reduce(function(acc, num) {
//     return acc + num;
// }, 0);

// 1: 0, 1 => 1
// 2: 1, 2 => 3
// 3: 3, 3 => 6
// 4: 6, 4 => 10
