import { user } from './index';

it('should get default fullName', () => {
    let res = user.getFullName();
    expect(res).toEqual('John Doe');
});

it('should get new fullName', () => {
    let res = user.getFullName('Jim Walsh');
    expect(res).toEqual('Jim Walsh');
});

it('should set new firstName', () => {
    user.setFullName('Jim Walsh');
    let res = user.firstName;
    expect(res).toEqual('Jim');
});
