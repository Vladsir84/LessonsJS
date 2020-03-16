let arr = [1, 2, 3, 4, 5, 6, 7, 8]

function getSubArray(arr, num) {
 if (arr == null) return false;
 if (num === null) return arr[0];
 return arr.slice(0, num);
};

console.log(getSubArray(arr, 4));