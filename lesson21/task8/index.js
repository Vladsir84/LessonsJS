export const createButton = (buttonText) => {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    body.append(buttonText, button);
}
