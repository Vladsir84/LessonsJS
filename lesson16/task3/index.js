export function createArrayOfFunctions(num) {
    if (num == undefined) return []
    if (typeof(num) !== 'number') return null   
    let arr1 = [num] 
 
    for (let i = 0; i < num ; i++) {
        arr1[i] = function(){
           return i
        }
    }
    return arr1
}

// console.log(createArrayOfFunctions('err'))
