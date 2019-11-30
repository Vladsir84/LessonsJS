let sum = 0;

for (let i = 1; i <= 1000; i++) {
    sum += i;
}

let k = sum / 1234;
let l = sum % 1234;

[k > l] ? [true] : [false];
