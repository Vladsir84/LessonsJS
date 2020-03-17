const transaction = {
    value: 170
}

function addPropertyV1(obj, key, value) {
    obj[key] = value;
    return obj
}

function addPropertyV2(obj, key, value) {
 const obj1 = Object.assign({}, obj, obj[key] = value);
   return obj1
}

function addPropertyV3(obj, key, value) {
    const obj1 = Object.assign({}, obj)
    obj1[key] = value;
    return obj1
}

function addPropertyV4(obj, key, value) {
    const obj1 = { ...obj }
    obj1[key] = value;
    return obj1
}

 const result = addPropertyV4(transaction, 'currency', 'USD');
 console.log(result);

