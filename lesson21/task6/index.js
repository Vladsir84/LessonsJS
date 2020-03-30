export const setButton = (buttonText) => {
    const body = document.querySelector('body');
    let buttonText = '<button>button text</button>';
    body.innerHTML = buttonText;
    body.textContent = buttonText;
}