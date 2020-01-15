// const reverseArray = arr => (!Array.isArray(arr)) ? null : arr
//     .reverse((a, b) => b - a);

export const reverseArray = arr =>
    (!Array.isArray(arr) || arr.length === 0) ? null : arr
    .slice(arr)
    .reverse(item => item * item);