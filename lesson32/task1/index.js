const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value);
        resolve(value);
    }, delay);
});

const asyncNumber1 = getValueWithDelay(56, 1000);
const asyncNumber2 = getValueWithDelay(undefined, 2000);
const asyncNumber3 = getValueWithDelay('10', 3000);

const getSum = numbers => numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Can\'t calculate')));  
};

asyncSum(asyncNumber1, Promise.reject(new Error('err')), asyncNumber3)
    .then(result => console.log(result));