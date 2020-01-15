// multiRound

// 0.1 + 0.2 === 0.3

// num => []

const multiRound = num => [
    (Math.floor(num * 100)) / 100,
    (Math.round(num * 100)) / 100,
    (Math.ceil(num * 100)) / 100,
    (Math.trunc(num * 100)) / 100, +num.toFixed(2),
];

console.log(multiRound(-Math.PI));

// +
// Math.PI.toFixed(3);
// Number.Math.PI.toFixed(3);

(0.1 * 34 + 0.2 * 17).toFixed(2);

const multiRound = num => [(Math.floor(num * 100)) / 100, (Math.round(num * 100)) / 100,
    (Math.ceil(num * 100)) / 100, (Math.trunc(num * 100)) / 100, +num.toFixed(2)
];