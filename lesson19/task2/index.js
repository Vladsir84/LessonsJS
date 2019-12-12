export function getOwnProps(obj) {
    let array = [];
    for (let prop in obj) {
        if (typeof obj[prop] !== 'function' && obj.hasOwnProperty(prop)) {
            array.push(prop);
        }
    }
    return array;
}
