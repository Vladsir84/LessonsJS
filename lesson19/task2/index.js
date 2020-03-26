export const getOwnProps = (obj) => {
    let arr = [];
    for (let prop in obj) {
        let newArr = arr.push(prop)
        return newArr;
    }
}