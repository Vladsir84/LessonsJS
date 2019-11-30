function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return true;
    } else {
        return false;
    }
}

function sum(from, to) {
    let nSum = 0;
    for (let i = from; i <= to; i++) {
        nSum += i;
    }
    return nSum;
}