if (true) console.log('I\'m in');

if (false) {
    console.log('I\'m not in');
}

if ('text') {
    console.log('Yes');
}


if (null) {
    console.log('Yes');
} else {
    console.log('Else');
}


const age = 17;
if (age < 16) {
    console.log('Too young');
} else if (age >= 16 && age < 18) {
    console.log('Almost ready');
} else if (age >= 18 && age < 65) {
    console.log('Ready');
} else {
    console.log('Else');
}

// Оператор ? : ( const result = условие ? значение)


const result = amount > 17 ? 'full' : 'empty';