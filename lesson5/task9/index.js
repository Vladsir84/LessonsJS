function findDivCount(a, b, n) {
    let num = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) num++;
    }
    return num;
}