function reverseArray(arr) {
    let reverseArr = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    if (Array.isArray(arr)) {
        for (let i = arr.length - 1; i >= 0; i--) {
            reverseArr.push(arr[i]);
        }
    }
    return reverseArr;
}