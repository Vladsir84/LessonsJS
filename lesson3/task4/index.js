// оператор || (OR)
console.log("false || true: ", false || true);
console.log("false || true || false: ", false || true || false);
console.log("false || false || false: " + false || false || false);

// оператор && (AND)
console.log("true && true: " + true && true);
console.log("false && true && false: " + false && true && false);
console.log("true && true && true: " + true && true && true);

// Логические операторы могут применяться к любым типам данных

// || находит первое истинное значение

'text' || false;
console.log("'text' || false: " + 'text' || false);
true || 'text';
console.log("true || 'text': " + true || 'text');
undefined || null || 0 || '' || null;
console.log("undefined || null || 0 || '' || null: " + undefined || null || 0 || '' || null);

const customAmount = null;
console.log("const customAmount = null: " + 'const customAmount = null');
const defaultAmount = 17;
const amount = customAmount || defaultAmount;

// && находит первое ложное значение

'text' && false;
console.log("'text' && false: " + 'text' && false);
true && 'text';
console.log("undefined || null || 0 || '' || null: " + undefined || null || 0 || '' || null);
undefined && null && 0 && '' && null;
console.log("undefined || null || 0 || '' || null: " + undefined || null || 0 || '' || null);


/* == */

!true;
console.log("undefined || null || 0 || '' || null: " + undefined || null || 0 || '' || null);
!false;
console.log("undefined || null || 0 || '' || null: " + undefined || null || 0 || '' || null);
!'text';
console.log("undefined || null || 0 || '' || null: " + undefined || null || 0 || '' || null);
!!'text';
console.log("undefined || null || 0 || '' || null: " + undefined || null || 0 || '' || null);

// !-> && -> ||