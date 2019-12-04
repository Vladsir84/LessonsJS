import { calc } from './calculator.js';

it('should check a calculator', () => {
    const plus = calc("10 + 5");
    expect(plus).toEqual("10 + 5 = 15");

    const minus = calc("10 - 5");
    expect(minus).toEqual("10 - 5 = 5");

    const multiplication = calc("10 * 5");
    expect(multiplication).toEqual("10 * 5 = 50");

    const division = calc("10 / 5");
    expect(division).toEqual("10 / 5 = 2");

    const isNoString = calc(50);
    expect(isNoString).toEqual(null);
});