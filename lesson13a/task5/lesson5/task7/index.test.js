import { increaser } from './index';

it('should bigger number', () => {
    const resultLessNum = increaser(2, 3);
    expect(resultLessNum).toEqual(2);

    const resultBiggerNum = increaser(6, 5);
    expect(resultBiggerNum).toEqual(11);

    const resultNoIntegerNum = increaser(6.5, 7);
    expect(resultNoIntegerNum).toEqual(null);
});