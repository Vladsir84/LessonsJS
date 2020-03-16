// import { createCalculator } from './index.js';

// it('should check calculator', () => {
//     //fist calculator
//     const calc1 = createCalculator();

//     calc1.add(10);
//     const resultAddCalc1 = calc1.getMemo();
//     expect(resultAddCalc1).toEqual(10);

//     calc1.decrease(2);
//     const resultDecreseCalc1 = calc1.getMemo();
//     expect(resultDecreseCalc1).toEqual(8);

//     calc1.reset();
//     const resultResetCalc1 = calc1.getMemo();
//     expect(resultResetCalc1).toEqual(0);


//     //second the same calculator
//     const calc2 = createCalculator();

//     calc2.add(20);
//     const resultAddCalc2 = calc2.getMemo();
//     expect(resultAddCalc2).toEqual(20);

//     calc2.decrease(4);
//     const resultDecreseCalc2 = calc2.getMemo();
//     expect(resultDecreseCalc2).toEqual(16);

//     calc2.reset();
//     const resultResetCalc2 = calc2.getMemo();
//     expect(resultResetCalc2).toEqual(0);


// });

// import { createCalculator } from './index';

// it('get sum', () => {
//     let calc = createCalculator();
//     let result = calc.add(4)
//     expect(result).toEqual(4);
// })

// it('subtract the number from the previous action', () => {
//     let calc = createCalculator();
//     calc.add(4);
//     let result = calc.decrease(2);
//     expect(result).toEqual(2);
// })

// it('reset the counter from the previous action', () => {
//     let calc = createCalculator();
//     calc.add(4);
//     calc.decrease(2);
//     let result = calc.reset();
//     expect(result).toEqual(0);
// })


import { createCalculator } from './index';

it('should check the calculator', () => {
    //fist calculator
    const calc = createCalculator();

    calc.reset();
    const ResetCalc = calc.getMemo();
    expect(ResetCalc).toEqual(0);

    calc.add(10);
    const AddCalc = calc.getMemo();
    expect(AddCalc).toEqual(10);

    calc.decrease(2);
    const DecreseCalc = calc.getMemo();
    expect(DecreseCalc).toEqual(8);



    //second the same calculator
    // const calc2 = createCalculator();

    // calc2.add(20);
    // const resultAddCalc2 = calc2.getMemo();
    // expect(resultAddCalc2).toEqual(20);

    // calc2.decrease(4);
    // const resultDecreseCalc2 = calc2.getMemo();
    // expect(resultDecreseCalc2).toEqual(16);

    // calc2.reset();
    // const resultResetCalc2 = calc2.getMemo();
    // expect(resultResetCalc2).toEqual(0);


});
import { createCalculator } from './index';

it('should check the calculator', () => {
   
    const calc = createCalculator();

    calc.reset();
    const ResetCalc = calc.getMemo();
    expect(ResetCalc).toEqual(0);

    calc.add(10);
    const AddCalc = calc.getMemo();
    expect(AddCalc).toEqual(10);

    calc.decrease(2);
    const DecreseCalc = calc.getMemo();
    expect(DecreseCalc).toEqual(8);

});
