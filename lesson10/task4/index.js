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


const getMaxAbsoluteNumber = arr => {
    const absoluteValues = arr
        .map(num => Math.abs(num));

    return Math.max(...absoluteValues);


}

console.log(getMaxAbsoluteNumber([2, 6, 78, 99]));

// 1 - get absolute values
// 2 - find max value