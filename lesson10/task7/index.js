const superRound = (num, elem) => {
    let elem = 1;
    for (let i = 0; i < elem; i++) {
        elem += '0';
    }
    return [

        (Math.floor(num * elem)) / elem,
        (Math.round(num * elem)) / elem,
        (Math.ceil(num * elem)) / elem,
        (Math.trunc(num * elem)) / elem, +num.toFixed(elem),
    ];
};
