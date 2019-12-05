import findDivCount from './index';

it('should get count of numbers', () => {
    const getNumbers = findDivCount(2, 8, 2);
    expect(getNumbers).toEqual(4);

});