// let sumOfNumbers = 0;
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sumOfNumbers += numbers[i];
// }

// console.log('Result: ' + sumOfNumbers);



// function sum(numbers) {
//     let sumOfNumbers = 0;

//     for (let i = 0; i < numbers.length; i++) {

//         sumOfNumbers += numbers[i];
//     }

//     return sumOfNumbers;
// }

// const sumOfElements = sum(numbers);


// console.log('Result: ' + sumOfElements);




// const numbers = [11, 22, 33, 55, 66];

// const arr = numbers;

// arr[2] = 1000;

// console.log(numbers);




function sum(numbers) {
    let sumOfNumbers = 0;

    for (let num of numbers) {
        sumOfNumbers += num;
    }

    return sumOfNumbers;
}

const numbers = [11, 22, 33, 55, 66];
const sumOfElements = sum(numbers);


console.log('Result: ' + sumOfElements);

function getSum(numbers) {
    let sum = 0;
    if (!Array.isArray(numbers)) {
        return null;
    }
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}