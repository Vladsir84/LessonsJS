const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const submitBtnElem = document.querySelector('.submit-button');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const baseUrl = 'https://crudcrud.com/api/69aff18485424424bb52f3a5337f057f/users';
const formElem = document.querySelector('.login-form');

const reportValidity = () => {

    if (!emailInputElem.value.includes('@') ||
        passwordInputElem.value.length < 1) {

        submitBtnElem.setAttribute('disabled', 'disabled');
    } else {
        submitBtnElem.removeAttribute('disabled');
        submitBtnElem.setAttribute('enabled', 'enabled');

    }

    emailErrorElem.textContent = '';
    passwordErrorElem.textContent = '';

}

formElem.addEventListener('input', reportValidity);




const dataSave = data => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
};

const formSubmit = event => {
    event.preventDefault();

    const formData = [...new FormData(formElem)]
        .reduce((acc, [key, value]) => ({...acc, [key]: value }), {});

    dataSave(formData)
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data));
            formElem.reset();
        })
        .catch(() => {
            emailErrorElem.textContent = 'Failed to create user';
            passwordErrorElem.textContent = 'Failed to create user';

        });

    submitBtnElem.setAttribute('disabled', 'disabled');
}

formElem.addEventListener('submit', formSubmit);