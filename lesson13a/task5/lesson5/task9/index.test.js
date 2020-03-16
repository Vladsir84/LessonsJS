import findDivCount from './index';

it('should get count of numbers', () => {
    let result = findDivCount(2, 8, 2);
    expect(result).toEqual(4);

});

it('should get null', () => {
    let result = findDivCount(undefined, 8, 2);
    expect(result).toEqual(null);
});

it('should get null', () => {
    let result = findDivCount(2, 8, undefined);
    expect(result).toEqual(null);
});
