export function createArrayOfFunctions (num) {
    if (!num) return []
    if (typeof(num) !== 'number') return null   
 
    let arr1 = [] 
    for (let i = 0; i < num ; i++) {
        arr1.push(function(){
           return i
        })
    }
    return arr
}

console.log(createArrayOfFunctions('saww'))
