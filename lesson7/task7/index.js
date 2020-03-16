const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const increaseEvenEl = (arr, delta) => (!Array.isArray(arr)) ? null : 
arr.map(num => num % 2 === 0 ? num + delta : num); 
    
console.log(increaseEvenEl(arr, 20));