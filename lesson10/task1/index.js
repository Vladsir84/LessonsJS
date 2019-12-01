Number.isNaN('text'); //
isNaN('text'); //
isNaN(NaN); //
Number.isNaN(NaN); //

Number.isFinite('17'); //
isFinite('17');

parseInt(' 17.17text'); //
Number.parseInt(' 17text'); //
Number.parseInt('seventeen'); //

parseFloat(' 17.17text'); //
Number.parseFloat(' 17text'); //
Number.parseFloat('seventeen'); //

Number.isInteger(17); //
Number.isInteger(17.0); //
Number.isInteger(17.17); //
Number.isInteger('17'); //
Number.isInteger(Infinity); //
Number.isInteger(NaN); //
Number.isInteger(undefined); //
Number.isInteger(null); //