export const getOwnProps = (obj) => {
    let arr = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
         arr.push(prop)
        }
    }
    return arr;
}