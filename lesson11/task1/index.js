//  const text = 'message';

//  const myMessage = `
//  The text is ${text.toLocaleUpperCase()}, 
//  And something else. 
//     `;


//  //  const myMessage = 'The text is ${text.toLocaleUpperCase()}, \nAnd something else.';

//  console.log(text[0]); // первый символ строки
//  console.log(text[text.length - 1]); // последний символ строки

//  console.log(text.charAt(1));


//  // splitText

//  // splitString('abcd efgh', 4) => 'Abcd\n efg\nH'...']

//  console.log('Abcd\n efg\nH');

const splitText = (text, len) => {
    if (typeof text !== 'string') return null
    const strArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;
    }
    return strArr.join('\n');
};

// 1. 'abcdefg', 4 => ['abcd', 'efg'] => ['Abcd', 'Efg']
// => 'Abcd/nEfg'

console.log(splitText('abcdefg', 4));