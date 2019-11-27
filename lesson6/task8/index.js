function uniqueCount(arr) {
    let num = 0;
    let n = arr.filter((item, index) => 
    index == arr.indexOf(item) ? num++ : false);
    return num;
}
