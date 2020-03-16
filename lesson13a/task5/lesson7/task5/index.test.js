import { squareArray } from './index';

it('should return null', () => {
    const resultIsNotArray = squareArray('string');
    expect(resultIsNotArray).toEqual(null);
});

it('should return null', () => {
    const resultOfEmptyArray = squareArray([]);
    expect(resultOfEmptyArray).toEqual(null);
});

it('should return array of squared numbers', () => {
    const resultOfSquaredNums = squareArray([10, 20, 30]);
    expect(resultOfSquaredNums).toEqual([100, 400, 900]);

});
