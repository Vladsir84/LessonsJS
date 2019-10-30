// оператор || (OR)
false || true
false || true || false
false || false || false

// оператор && (AND)
true && true
false && true && false
true && true && true

// Логические операторы могут применяться к любым типам данных

// || находит первое истинное значение

    'text' || false;
true || 'text';
undefined || null || 0 || '' || null;

const customAmount = null;
const defaultAmount = 17;
const amount = customAmount || defaultAmount;

// && находит первое ложное значение

'text' && false;
true && 'text';
undefined && null && 0 && '' && null;

/* == */

!true;
!false;
!'text';
!!'text';

// !-> && -> ||