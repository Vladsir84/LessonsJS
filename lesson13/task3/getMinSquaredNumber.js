export const getMinSquaredNumber = arr =>
    (!Array.isArray(arr) || arr.length === 0) ? null :
    Math.pow(Math.min(...arr
        .map(item => Math.abs(item))), 2);