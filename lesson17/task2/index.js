<<<<<<< HEAD
// callbackPrompt

export const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {

        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {
        console.log(this);
        setTimeout(this.showPrompt.bind(this), ms);
    }
};

callbackPrompt.showDeferredPrompt(1000);
=======
// callbackPrompt

export const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {

        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {
        console.log(this);
        setTimeout(this.showPrompt.bind(this), ms);
    }
};

callbackPrompt.showDeferredPrompt(1000);
>>>>>>> 26b6e0a874f91094fa4e3f8b163f725064a39ed5
