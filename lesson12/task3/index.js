const cleanTransactionsList = sum => sum
    .map(el => Number(el))
    .filter(el => !Number.isNaN(el))
    .map(el => '$' + el.toFixed(2));

