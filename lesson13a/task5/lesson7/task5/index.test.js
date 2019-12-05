import { squareArray } from './index';

it('should return array of squared numbers', () => {

    const resultIsNotArray = squareArray('string');
    expect(resultIsNotArray).toEqual(null);

    const resultOfEmptyArray = squareArray([]);
    expect(resultOfEmptyArray).toEqual(null);

    const resultOfSquaredNums = squareArray([10, 20, 30]);
    expect(resultOfSquaredNums).toEqual([100, 400, 900]);

});