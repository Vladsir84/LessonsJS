const n = 10000000;
let sum = 0;

let i = n;

while (i > 0) {
    sum += i;
    i -= 1;
}

console.log('Result:' + sum);
