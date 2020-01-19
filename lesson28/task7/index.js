const sum = num => num === 1 ? 1 : num + sum(num - 1);
console.log(sum(4));