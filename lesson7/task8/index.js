const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cloneArr = arr => (!Array.isArray(arr)) ? null : arr.slice()
  
console.log(cloneArr(arr));