function getSum(arr) {
    let sumOfArray = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let num of arr) {
        sumOfArray += num;
    }

    return sumOfArray;
}




