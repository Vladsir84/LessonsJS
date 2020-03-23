export const createArrayOfFunctions = (num) =>{
    let arr1 = [] 
    if (!num) return []
    if (typeof(num) !== 'number') return null   
 
    for (let i = 0; i < num ; i++) {
        arr1[i] = function(){
           return i
        }
    }
    return arr
}

// console.log(createArrayOfFunctions('err'))
