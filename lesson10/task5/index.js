const arr = [15.13445, 12.405, 405.456, 56.589];

const getTotalPrice = arr => '$' + arr;
Math.floor((arr.reduce((acc, el) => acc + el)) * 100) / 100;


const arr = [15.13445, 12.405, 405.456, 56.589];

function getTotalPrice(arr) {
    let sum = arr.reduce((acc, elem) => acc + elem, 0);
    let rounded = Math.floor(sum * 100) / 100;
    return '$' + rounded;
}