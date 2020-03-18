const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];

function buildObject(keysList, valuesList) {
    const obj = keysList.reduce((acc, current, index) => {
        // console.log(acc);
        // console.log(current);
        // console.log(index);
        acc[current] = valuesList[index];
        return acc;
    }, {});
    return obj;
}

const result = buildObject(keys, values);
console.log(result);


/******************************************* */

// function buildObject(keysList, valuesList) {
//     const arr = [];
//     for (let i = 0; i < keysList.length; i++) {
//         arr.push([keysList[i], valuesList[i]]);

//     }
//     const obj = Object.fromEntries(arr);
//     return obj;
// }

// const result = buildObject(keys, values);
// console.log(result);