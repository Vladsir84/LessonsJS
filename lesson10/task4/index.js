const getMaxAbsoluteNumber = arr => {
    const absoluteValues = arr
        .map(num => Math.abs(num));
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    return Math.max(...absoluteValues);
}
