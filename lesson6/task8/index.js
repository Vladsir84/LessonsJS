function uniqueCount(arr) {
    let num = 0;
    for (i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] !== arr[j]) num++;
        }
        return num;
    }
}
