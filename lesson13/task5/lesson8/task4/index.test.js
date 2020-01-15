import { getAdults } from './index';

it('should get null', () => {
    let isNotObject = getAdults("string");
    expect(isNotObject).toEqual(null);
});

it('should get null', () => {
    let undefinedObj = getAdults();
    expect(undefinedObj).toEqual(null);
});

it('should get object of adults', () => {
    let obj = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };
    let objOfAdults = getAdults(obj);
    expect(objOfAdults).toEqual({ 'John Doe': 19, 'Bob': 18 });

});