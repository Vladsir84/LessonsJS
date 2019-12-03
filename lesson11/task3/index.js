// const splitString = (str, len = 10) => {
//     if (typeof str !== 'string') return null;
//     let arrLength = Math.ceil(str.length / len);
//     let startPosition = 0;
//     return Array(arrLength)
//         .fill()
//         .map(() => {
//             let elem = str.substr(startPosition, len);
//             startPosition += len;
//             if (elem.length >= len) return elem;
//             if (elem.length < len) {
//                 while (elem.length < len) {
//                     elem += ".";
//                 }
//                 return elem;
//             }
//         });
// };


function splitString(str, len = 10) {
    if (typeof str !== 'string') return null;
    let arrString = [];
    let startPoint = 0;
    while (true) {
        let el = string.substr(startPoint, len);
        if (el.length === 0) break;
        arrStr.push(el);
        startPoint += len;
    }
    if (elem.length < len) {
        while (elem.length < len) {
            elem += ".";
        }
        return arrString;
    }
}

// const splitString = (str, len = 10) => {
//     if (typeof str !== 'string') return null;
//     let arrLength = Math.ceil(str.length / len);
//     let startPosition = 0;
//     return Array(arrLength)
//         .fill()
//         .map(() => {
//             let elem = str.substr(startPosition, len);
//             startPosition += len;
//             if (elem.length >= len) return elem;
//             if (elem.length < len) {
//                 while (elem.length < len) {
//                     elem += ".";
//                 }
//                 return elem;
//             }
//         });
};


// function splitString(string, charNum = 10) {
//     if (typeof(string) !== 'string') return null;

//     let arrStr = [];
//     let start = 0;

//     while (true) {
//         let sbstr = string.substr(start, charNum);
//         if (sbstr.length === 0) break;
//         arrStr.push(sbstr);
//         start += charNum;
//     }

//     while (arrStr[arrStr.length - 1].length < charNum) {
//         arrStr[arrStr.length - 1] += '.';
//     }

//     return arrStr;
// }