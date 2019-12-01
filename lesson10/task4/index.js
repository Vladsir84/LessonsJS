/const getMaxAbsoluteNumber = arr => {
    const absoluteValues = arr
        .map(num => Math.abs(num));
    if (!Array.isArray(arr)) {
        return null;
    }
    return Math.max(...absoluteValues);
}
