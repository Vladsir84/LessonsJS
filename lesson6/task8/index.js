function uniqueCount(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) num++;
    }
    return num;
}
