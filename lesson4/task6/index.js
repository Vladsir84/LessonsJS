let sum = 0;

for (let i = 0; i <= 1000; i++) {
    if (sum * 5 > 5000) {
        console.log('Found');
    } else if (sum * 5 <= 5000) {
        console.log('Smaller or equal');
    }

}