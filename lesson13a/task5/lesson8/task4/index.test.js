import { getAdults } from './index';

it('should object of adults', () => {

    let isNotObject = getAdults("string");
    expect(isNotObject).toEqual(null);

    let undefinedObj = getAdults();
    expect(undefinedObj).toEqual(null);

    let obj = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };
    let objOfAdults = getAdults(obj);
    expect(objOfAdults).toEqual({ 'John Doe': 19, 'Bob': 18 });

});