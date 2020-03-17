const obj1 = {
    name: 'Tom',
    age: 17,
}

const obj2 = {
    name: 'Bob',
    age: 17,
}

const obj3 = {
    name: 'Bob',
    age: 17,
    student: false,
}

const obj4 = {
    name: 'Tom',
    age: 17,
}

function compareObjects(obj1, obj2) {
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

    if (objKeys1.length !== objKeys2.length) {
        return false;
    }

    for (let key of objKeys2) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}


console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj1, obj4));