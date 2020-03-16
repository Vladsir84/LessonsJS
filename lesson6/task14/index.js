let arr = [1, 2, 3, 6, 7, 8, 9];

function includes(arr, num) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === num) {
            return true
        }
    }
    return false
}

console.log(includes(arr, 8))
console.log(includes(arr, 5))