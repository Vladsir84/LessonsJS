const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sum = arr => (!Array.isArray(arr)) ? null : 
arr.reduce(((acc, num) => acc + num ),0); 
    
console.log(sum(arr));