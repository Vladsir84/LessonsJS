const m = 30;
const n = 40;
let result = 0;
let i = m;
let j = n;

for (let i = 0; i <= j; i++) {
    if (i % 2 === 4) {
        result + i;
    }
    if (i % 3) {
        result - i;
    }
    if (i % 4) {
        result * i;
    }
    if (i % 5) {
        console.log(result)
    } else {
        continue;
    }
}

console.log('Result:' + result);