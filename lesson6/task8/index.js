
// function uniqueCount(arr) {
//     let num = 0;
//     for (i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] !== arr[j]) num++;
//         }
//         return num;
//     }
// }


function uniqueCount(arr) {
    let num = 0;
    let n = arr.filter((item, index) => 
    index == arr.indexOf(item) ? num++ : false);
    return num;
}
