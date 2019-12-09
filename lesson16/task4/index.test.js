import foo from './index';

it('should get 1', () => {
    let res = foo;
    expect(res).toEqual(1);
});

it('should get 10', () => {
    let res = !foo;
    expect(res).toEqual(10);
});