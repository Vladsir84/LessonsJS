// pseudo arrays

function argsSum() {
    return [].reduce.apply(arguments, [(acc, elem) => {
        return acc + elem;
    }, 0]);
}

console.log(argsSum(1, 2, 3, 4));


// [].reduce((acc, elem) => {}, 0)

function argsSum() {
    return [].reduce.call(arguments, (acc, elem) => {
        return acc + elem;
    }, 0);
}

console.log(argsSum(1, 2, 3, 4));


function argsSum() {
    return [...arguments].reduce((acc, elem) => {
        return acc + elem;
    }, 0);
}

console.log(argsSum(1, 2, 3, 4));


export function sumOfSquares() {
    return [...arguments]
        .map(elem => elem * elem)
        .reduce((acc, elem) => acc + elem, 0);
}