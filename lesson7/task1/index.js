// const getSpecialNumbers = numbers => {
//     let specialNumbers = [];

//     const result = numbers.forEach(num => {
//         if (num % 3 === 0) {
//             specialNumbers.push(num);
//         }
//     });

//     return result;
// };

// const arr = [1, 2, 3, 4, 5, 6];

// console.log(getSpecialNumbers(arr));

// const getSpecialNumbers = numbers => {
//     let specialNumbers = [];

//     const result = numbers.filter(num => {
//         if (num % 3 === 0) {
//             return true;
//         }
//         return false;
//     });

//     return result;
// };

// const arr = [1, 2, 3, 4, 5, 6, 18];

// console.log(getSpecialNumbers(arr));


const getSpecialNumbers = numbers =>
    numbers.filter(num => num % 3 === 0);

const arr = [1, 2, 3, 4, 5, 6, 18, 15, 21, 30];

console.log(getSpecialNumbers(arr));
console.log(arr);