import { user } from './index';

it('should get default fullName', () => {
    let res = user.getFullName();
    expect(res).toEqual('John Doe');
});

it('should set new firstName', () => {
    user.setFullName('Jim Walsh');
    let res = user.firstName;
    expect(res).toEqual('Jim');
});

// it('should set new lastName', () => {
//     user.setFullName('Jim Walsh');
//     let result = user.lastName;
//     expect(result).toEqual('Walsh');
// });

it('should get new fullName', () => {
    let res = user.getFullName('Jim Walsh');
    expect(res).toEqual('Jim Walsh');
});