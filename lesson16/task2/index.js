var greeting = 'Hello';

function sayHi() {
    greeting = 'Hi';
    console.log(greeting);

    if (false) {
        var greeting;
    }
}

sayHi();
console.log(greeting);