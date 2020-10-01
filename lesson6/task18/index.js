let arr = [1,2,3,4,5]

function getSubArray(arr, n) {
  if (arr == null) return false;
  if (n == null) return arr[0]
  return arr.slice(0, n);
}

console.log(getSubArray(arr, 2))