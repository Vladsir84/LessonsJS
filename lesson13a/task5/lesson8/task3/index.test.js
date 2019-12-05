import { pickProps } from './index';

it('should return object of certain props', () => {

    const isNotObject = pickProps("string", []);
    expect(isNotObject).toEqual(null);

    const notAnArray = pickProps({}, "string");
    expect(notAnArray).toEqual(null);

    const obj = { a: 1, b: 2, c: 3 };
    const arr = ['a', 'c'];
    const resultObj = pickProps(obj, arr);
    expect(resultObj).toEqual({ a: 1, c: 3 });

});