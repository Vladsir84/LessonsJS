function squareArray(arr) {
    let squareNum = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            let squareElem = arr[i] * arr[i];
            squareNum.push(squareElem);
        }
    }
    return squareNum;
}