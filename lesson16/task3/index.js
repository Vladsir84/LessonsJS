// массив ф-ций

// var i;
// var arr = [];

// for (let i = 0; i < 10; i++) {
//     arr[i] = function() {
//         return i;
//     }
// }

// console.log(arr[0]());


// var arr = [];

// for(let i = 0; i < 10; i++) {
//     arr[i] = function() {
//         return i;
//     }
// }

// export { arr };

export function createArrayOfFunctions(num) {
    if (!num) return [];
    if (typeof num !== 'number') return null;

    let arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = function() {
            return i;
        }
    }
    return arr
}

// export function createArrayOfFunctions(number){
//     if(!number) return [];
//     if(typeof number !== 'number') return null;
//     let arr = [];
//     for(let i = 0; i < number; i++){
//         arr[i] = function(){
//             return i;
//         }
//     }
//     return arr;
// }