const prefix = 'Hi, ';

function sayHi(name, anotherName = 'anonymus') {
    const greeting = prefix + name + ' and ' + anotherName;
    console.log(greeting);
}

sayHi('Tom', 'Bob');