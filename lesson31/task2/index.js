// asyncCalculator

// const asyncCalculator = num => new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Initial value: ${num}`);
//             resolve(num);
//         }, 3000);
//     })
//     .then(value => new Promise((resolve) => {
//         setTimeout(() => {
//             const result = value * value;
//             console.log(`Squared value: ${result}`);
//             resolve(result);
//         }, 3000);
//     }))

// asyncCalculator(4)
//     .then(value => {
//         const result = value * 2;
//         console.log(`Doubled value: ${result}`);
//         return result;
//     })

// .then(value => console.log(value));


const asyncCalculator = num => new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Initial value: ${num}`);
            resolve(num);
        }, 300);
    })
    .then(value => new Promise((resolve) => {
        setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
        }, 300);
    }))

const p = asyncCalculator(4)

p.then(value => {
    const result = value * 2;
    console.log(`Doubled value: ${result}`);
    return result;
})

p.then(value => console.log(value));