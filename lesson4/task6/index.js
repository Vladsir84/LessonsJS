let sum = 0;

for (let i = 0; i <= 1000; i++) {
    if (i % 2 === 1) {
        sum += i;
        console.log('Found');
    }
}

if (sum * 5 > 5000) {
    console.log('Bigger');
} else if (sum * 5 <= 5000) {
    console.log('Smaller or equal');
}

let sum = 0;

for (let i = 1; i <= 1000; i++) {
    sum += i;
}

let k = sum / 1234;
for (let k = 1; k <= 1000; k++) {
    sum += k;
}

let j = sum % 1234;
for (let j = 1; j <= 1000; j++) {
    sum += j;
}

if (sum / 1234 > sum % 1234) {
    console.log(true);
} else {
    console.log(false);
}