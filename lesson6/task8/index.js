// function uniqueCount(arr) {
//     let num = 0;
//     for (i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] !== arr[j]) num++;
//         }
//         return num;
//     }
// }

// function uniqueCount(arr) {
//     let calc = 0;
//     arr.sort((a, b) => a - b);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) calc++;
//     }
//     return calc;
// }

// function uniqueCount(arr) {
//     let num = 0;
//     let n = arr.filter((item, index) =>
//         index == arr.indexOf(item) ? num++ : false);
//     return num;
// }

// function uniqueCount(arr) {
//     let counter = 0;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[j]);
//         counter++;
//     }
//     return counter;
// }

const arr = [1, 2, 3, 4, 5, 6];

function uniqueCount(arr) {
    let counter = 0;
    arr.sort(

    );
    console.log(uniqueCount(arr));
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) counter++;
    }
    return counter;
}

// console.log(uniqueCount(arr));