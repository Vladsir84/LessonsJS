// getMaxAbsoluteNumber

// [2, -6, 78, -99] => 99
// [2, 6, 78, 99]


// const getMaxAbsoluteNumber = arr => {
//     let max = -Infinity;

//     arr.forEach(num => {
//         if (Math.abs(num) > max) {
//             max = Math.abs(num);
//         }
//     })

//     return max;
// }


// const getMaxAbsoluteNumber = arr => {
//     const absoluteValues = arr
//         .map(num => Math.abs(num));
//     (!Array.isArray(arr) || arr.length === 0) ? null:
//         return Math.max(...absoluteValues);
// }

// console.log(getMaxAbsoluteNumber([2, 6, 78, 99]));

// 1 - get absolute values
// 2 - find max value

const getMaxAbsoluteNumber = arr =>
    (!Array.isArray(arr) || arr.length === 0) ? null :
    Math.max(...arr.map(num => Math.abs(num)));