function getPrimes(n) {
    for (let i = 1; i < n; i++) {
        let a = 0;
        for (let k = i; k >= 1; k--) {
            if (k != i && k != 1 && i % k === 0) a++;
        }
        if (i === 1 || i === n || a === 0)
           
    }
}
