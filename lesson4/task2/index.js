const m = 10;
const n = 20;
const i = 1;
let result = 1;

do {
    if (m % 2 === 1) {
        result *= i;
   }
 i++;
} while (m <= n);   
console.log('Result:' + result);
