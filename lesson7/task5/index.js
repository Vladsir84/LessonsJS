const squareArray = arr => (!Array.isArray(arr)) ? null : arr
    .map(item => item * item);