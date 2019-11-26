function compareSums(a, b, c, d) {
    return sum(a, b) > sum(c + d) || false;
}

function sum(from, to) {
    let nSum = 0;
    for (let i = from; i <= to; i++) {
        nSum += i;
    }
    return nSum;
}
