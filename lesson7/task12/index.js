const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrAverage = arr => (!Array.isArray(arr)) ? null : 
arr.reduce(((acc, num) => acc + num ))/arr.length; 


console.log(arrAverage(arr));