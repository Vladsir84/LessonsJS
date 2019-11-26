function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(c + d)) {
        return false;
    } else {
        return true;
    }
}

function sum(from, to) {
    let nSum = 0;
    for (let i = from; i <= to; i++) {
        nSum += i;
    }
    return nSum;
}
