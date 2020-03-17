const user = {
    name: 'Sam'
}

function addPropretyV1 (userData, userId) {
   userData.id = userId; 
    return userData
}

function addPropretyV2 (userData, userId) {
  userData.id = userId; 
     const obj1 = Object.assign({}, userData)
     
     return obj1
 }

//  function addPropretyV3 (userData, userId) {
//     let obj = userId.id; 
//      return obj
//  }

//  function addPropretyV4 (userData, userId) {
//     let obj = userId.id; 
//      return obj
//  }

 const result = addPropretyV1(user, '1234567');
 console.log(result);