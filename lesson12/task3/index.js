const cleanTransactionsList = sum => sum
    .map(el => Number(el))
    .filter(el => !Number.isNaN(el))
    .map(el => '$' + el.toFixed(2));

const sums = [' 1.9 ', '16.4', 17, ' 1 dollar '];
console.log(cleanTransactionsList(sums));