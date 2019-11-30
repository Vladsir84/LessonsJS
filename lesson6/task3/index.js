// const people = ['Tom', 'Ann', 'Bob'];

// people[people.length] = 'Jack';

// people.push('Jack');

// console.log(people);
// console.log(people.length);


// const people = ['Tom', 'Ann', 'Bob'];

// people[people.length] = 'Jack';

// people.unshift('Jack', 'John');
// people.push('Jack', 'John');
// const first = people.shift();

// console.log(first);
// console.log(people);
// console.log(people.length);


// from , to => [n % 3 === 0]

function getSpecialNumbers(from, to) {
    let specialNumbers = [];

    for (let i = from; i <= to; i++) {
        if (i % 3 === 0) {
            specialNumbers.push(i);
        }
    }

    return specialNumbers;
}

const specialNumbers = getSpecialNumbers(10, 30);

console.log(specialNumbers);