function uniqueCount(arr) {
    let n = arr.length;
    for (i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) { if (arr[i] === arr[j]) return false; }
    }
    return true;
}