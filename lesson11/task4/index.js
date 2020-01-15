const countOccurrences = (string1, string2) => {
    if (string2.length === 0) return null;
    let counter = -1;
    string1.split(string2).map(() => counter += 1);
    return counter;
};