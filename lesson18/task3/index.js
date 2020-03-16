export function sumOfSquares() {
    return [...arguments]
        .map(elem => elem * elem)
        .reduce((acc, elem) => acc + elem, 0);
}
