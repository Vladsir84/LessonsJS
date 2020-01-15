// const message = 'Have a good day!';

// function sendMessage(name) {

//     let greeting = 'Hi, ';

//     if (name) {

//         console.log(greeting + name);
//     } else {
//         console.log(message);
//     }

// }

// sendMessage('Ann');


// const message = 'Have a good day!';

// function sendMessage(name) {

//     let greeting = 'Hi, ';

//     if (name) {
//         const greeting = 'Hello, '
//         const name = 'Tad';
//         console.log(greeting + name);
//     } else {

//         console.log(message + ' is a message');
//     }

// }

// sendMessage('Ann');

// 'use strict';

export function createCalculator() {
    let number = 0;

    function add(num) {
        number += num;
    }

    function decrease(num) {
        number -= num;
    }

    function reset() {
        number = 0;
    }

    function getMemo() {
        return number;
    }

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
};