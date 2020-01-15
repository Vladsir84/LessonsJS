// sendMessage
'use strict';

let message = 'Just learn it!';

function sendMessage(name) {
    let sender = 'Gromcode';
    console.log(`${name}, ${message} Your ${sender}`);
}

function setMessage(text) {
    message = text;
}
sendMessage('Ann');

setMessage('Good job!');

sendMessage('Ann');

// message = 'Good job!';

// sendMessage('Ann');


'use strict';

let message = 'Just learn it!';

export function sendMessage(name) {
    let sender = 'Gromcode';
    console.log(`${name}, ${message} Your ${sender}`);
}

export function setMessage(text) {
    message = text;
}