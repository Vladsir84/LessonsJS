// const obj = {
//     name: 'Tom',
//     age: 17,
//     interest: 'football',
//     'my name': 'Bob',
//     [prop + 'name']: 'value',
// };


export const pickProps = (obj, arr) => {
    if (typeof obj !== 'object' || !Array.isArray(arr)) return null;
    let object = {};
    for (let prop in obj) {
        for (let item of arr)

            if (prop === item) object[prop] = obj[prop];
    }

    return object;
};