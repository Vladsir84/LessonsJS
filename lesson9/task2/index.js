const obj = {
    'John Dee': 19,
    'Tom': 17,
    'Bob': 18,
}

const copyObj = obj => {
    const newObj = {...obj};
    return newObj
 } 
 
console.log(copyObj(obj));