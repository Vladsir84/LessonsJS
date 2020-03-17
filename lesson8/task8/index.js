// const user = {
//     name: 'Sam'
// }

function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData
}

function addPropertyV2(userData, userId) {
    userData.id = userId;
    const obj1 = Object.assign({}, userData)

    return obj1
}

function addPropertyV3(userData, userId) {
    const obj1 = Object.assign({}, userData)
    obj1.id = userId;
    return obj1
}

function addPropertyV4(userData, userId) {
    const obj1 = { ...userData }
    obj1.id = userId;
    return obj1
}

//  const result = addPropertyV1(user, '1234567');
//  console.log(result);

// const result = addPropertyV4(user, '1234567');
// console.log(result);