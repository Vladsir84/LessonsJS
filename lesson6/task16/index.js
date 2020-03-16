const arr = [1, 2, 3, 6, 7, 8, 9, 99];

function checkSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sumOfArray = 0;
    for (let num of arr) {
        sumOfArray += num;
    }
    if (sumOfArray > 100) {
        return true

    }
    return false
}

console.log(checkSum(arr))