const reverseArray = arr => (!Array.isArray(arr)) ? null : arr
    .reverse((a, b) => b - a);