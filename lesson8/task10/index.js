const obj1 = {
    name: 'Tom',
    age: 17,
};

const obj2 = {
    name: 'Bob',
    student: false,
};

function mergeObjectsV1(obj1, obj2) {
   let obj3 = Object.assign(obj1, obj2)
    return obj3
}

function mergeObjectsV2(obj1, obj2) {
 let obj3 = Object.assign(obj2, obj1);
   return obj3
}

function mergeObjectsV3(obj1, obj2) {
    let obj3 = { ...obj1, ...obj2 } 
       return obj3
    }

function mergeObjectsV4(obj1, obj2) {
    let obj3 = { ...obj2, ...obj1 }
        return obj3
}

 
//  console.log(mergeObjectsV4(obj1, obj2));


