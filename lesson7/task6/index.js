const reverseArray = arr => (!Array.isArray(arr)) ? null : arr
    .reverse((a, b) => b - a);

const reverseArray = arr => (!Array.isArray(arr)) ? null : arr
    .slice(arr)
    .reverse(item => item * item);