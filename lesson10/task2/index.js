// parsing

parseInt(' 17.17text'); //
Number.parseInt(' 17.17text'); //
Number.parseInt('seventeen'); //

parseFloat(' 17.17text'); //
Number.parseFloat(' 17.17text'); //
Number.parseFloat('seventeen'); //


// const parseArray = arr => {
//     const result = arr
//         .map(el => Number.parseFloat(el))

//     return result;
// };

const parseArray = arr => arr
    .map(el => Number.parseFloat(el));


const elementsList = [4, 5.6, '  5.7kl', null, NaN, Infinity, undefined];

console.log(parseArray(elementsList));

const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));
const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));
const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));
const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));