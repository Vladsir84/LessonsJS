import compareSums from './index';

it('should get bigger sum', () => {
    const resultTrue = compareSums(2, 4, 4, 4);
    expect(resultTrue).toEqual(true);
});

it('should get bigger sum', () => {
    const resultFalse = compareSums(4, 4, 2, 4);
    expect(resultFalse).toEqual(false);
});

it('should get bigger sum', () => {
    const resultNull = compareSums(2, 4, 5);
    expect(resultNull).toEqual(null);
});