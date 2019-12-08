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
