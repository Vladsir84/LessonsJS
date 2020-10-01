let arr = [1,2,3,4,5]

function getSubArray(arr, n) {
  let subArr = arr.slice(n)
   return subArr
}

console.log(getSubArray(arr, 2))