'use strict';

export default () => {
    let sender = 'Gromcode';
    let message = 'Just learn it!';

    function sendMessage(name) {
        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(newSender) {
        sender = newSender;

        return {
            sendMessage,
            setMessage,
            setSender,
        }
    }
}