const obj = {
    'John Dee': 19,
    'Tom': 17,
    'Bob': 18,
}
    
const getAdults = (userObj) => Object.entries(userObj)
     .filter(obj => obj[1] >= 18)
     .map(obj => obj[0]);

console.log(getAdults(obj));