export default (a, b, c, d) => {
    if (a === undefined || b === undefined || c === undefined || d === undefined) return null;
    if (sum(a, b) > sum(c, d)) {
        return true;
    } else {
        return false;
    }
}

function sum(from, to) {
    let nSum = 0;
    for (let i = from; i <= to; i++) {
        nSum += i;
    }
    return nSum;
}

// export function sum(from, to) {
//     return from + to;
// }

// export function compareSums(a, b, c, d) {
//     let firstSum = sum(a, b);
//     let secondSum = sum(c, d);
//     if (firstSum === secondSum) return 'They are equal';
//     if ((firstSum + firstSum) < secondSum) return 'Bigger twice';
//     return firstSum > secondSum ? true : false;
// }