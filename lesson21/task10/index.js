export const finishForm = () => {
    const inputElem = document.createElement('input');
    const formElem = document.querySelector('form');
    const inputElem1 = document.querySelector('input[type="text"]');
    inputElem.type = 'password';
    inputElem.name = 'password';
    formElem.append(inputElem);
    inputElem1.name = 'login';
}