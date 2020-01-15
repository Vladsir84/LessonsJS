import { makeCounter } from './index';

it('should check the counter', () => {
    const counter1 = makeCounter();
    counter1();
    const result = counter1();
    expect(result).toEqual(1);
});