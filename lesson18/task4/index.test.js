import { spy } from './index';

it("should get check composition", () => {
    function test(a, b) {
        return (a * b);
    }
    const spyTest = spy(test);
    const resTest = spyTest(3, 3);
    expect(resTest).toEqual(9);
});


it("should get check sum", () => {
    function test(a, b) {
        return (a + b);
    }
    const spyTest = spy(test);
    const resTest = spyTest(2, 2);
    expect(resTest).toEqual(4);
});


it("should get the array", () => {
    function test(a, b) {
        return (a + b);
    }
    const spyTest = spy(test);
    spyTest(1, 2);
    spyTest(3, 4);
    const arr = [
        [1, 2],
        [3, 4]
    ];
    const resCallsArray = spyTest.calls;
    expect(resCallsArray).toEqual(arr);
});