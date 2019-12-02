const getTotalPrice = arr => '$' +
Math.floor((arr.reduce((acc, el) => acc + el)) * 100) / 100;
