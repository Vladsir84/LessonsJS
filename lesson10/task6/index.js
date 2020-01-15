const getRandomNumbers = (length, min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (max < min || max - min < 0) return null;
    return Array(length).fill()
        .map(() => Math.floor(Math.random() * (max - min) + min));
};