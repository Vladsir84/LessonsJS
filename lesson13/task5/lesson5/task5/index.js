// export const getSum = function(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') return null;
//     if (a % 2 === 0 && b % 2 === 0) {
//         return sum(even);
//     }

// };

// const result = getSum(20, 5);

// console.log(result);

export function getSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return null;

    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}