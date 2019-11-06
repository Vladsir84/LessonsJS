const m = 10;
const n = 20;
let counter;
let result = 1;

do {
    if (m % 2 === 1) {
        result *= m;
   }
 ++counter;
} while (m <= n);   
console.log('Result:' + result);
