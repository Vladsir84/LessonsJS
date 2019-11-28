
function uniqueCount(arr) {
    let counter = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]);
        counter++;
    }
    return counter ; 
}
