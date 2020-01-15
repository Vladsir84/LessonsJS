import getMinSquaredNumber from './getMinSquaredNumber';

it('should get min squared number', () => {

    const returnEmptyArray = getMinSquaredNumber([]);
    expect(returnEmptyArray).toEqual(null);

    const returnString = getMinSquaredNumber('string');
    expect(returnString).toEqual(null);

    const returnMinSquaredNumber = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(returnMinSquaredNumber).toEqual(4);

});