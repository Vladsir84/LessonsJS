const m = 30;
const n = 40;
let result = 0;
let j = n;

for (let i = m; i <= j; i++) {
    if (i % 2 === 0 && i % 4 !== 0) {
        result += i;
    }
    if (i % 3 === 0) {
        result -= i;
    }
    if (i % 4 === 0) {
        result *= i;
    }
    if (i % 5 === 0) {
        console.log(i);
    } else {
        continue;
    }
}

console.log('Result :' + result);
