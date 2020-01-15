import { reverseArray } from './index';

it('should get null', () => {
    const isNotArray = reverseArray('string');
    expect(isNotArray).toEqual(null);
});

it('should get null', () => {
    const emptyArray = reverseArray([]);
    expect(emptyArray).toEqual(null);
});

it('should reversed array', () => {
    const reversedArray = reverseArray([1, 2, 3, 4, 5]);
    expect(reversedArray).toEqual([5, 4, 3, 2, 1]);

});