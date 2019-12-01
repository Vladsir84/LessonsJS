const getFiniteNumbers = arr => arr.map(el => Number.isFinite(el));
const getFiniteNumbersV2 = arr => arr.map(el => isFinite(el));
const getNaN = arr => arr.map(el => Number.isNaN(el));
const getNaNV2 = arr => arr.map(el => isNaN(el));
const getIntegers = arr => arr.map(el => isInteger(el));
