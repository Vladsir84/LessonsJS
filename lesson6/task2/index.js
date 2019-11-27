function getSum(arr) {
    let sumOfArray = 0;

    for (let num of arr) {
        sumOfArray += num;
    }

    return sumOfArray;
}
if (!Array.isArray(arr)) {
        return null;
    }

const numbers = [11, 22, 33, 55, 66];
const sumOfArray = getSum(arr);


