let n = 10000000;
let sum = 0;

while (n > 0) {
    sum += n;
    n -= 1;
}

console.log('Result:' + sum);