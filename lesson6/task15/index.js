const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)){
        return null
    } 
    for (let i = 0; i <= arr.length; i++) {
     if (arr[i] % 2 === 0) 
        arr[i] *= delta   
        
    } 
    return arr;
}

console.log(increaseEvenEl(arr, 5));