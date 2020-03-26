export const getOwnProps = (obj) => {
    let arr = [];
    for (let prop in obj) {
        if (typeof obj[prop] !== 'function' && obj.hasOwnProperty(prop)) {
         arr.push(prop)
        }
    }
    return arr;
}