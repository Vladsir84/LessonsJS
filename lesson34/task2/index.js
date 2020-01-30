const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const submitBtnElem = document.querySelector('.submit-button');
const errorFieldElem = document.querySelector('.error-text');


const baseUrl = 'https://crudcrud.com/api/d234f3c9e3c7467dae82dca317c7aa15/users';
const formElem = document.querySelector('.login-form');

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
            errorFieldElem.textContent = 'Failed to create user';


        });

    submitBtnElem.setAttribute('enabled', 'enabled');
}

formElem.addEventListener('submit', formSubmit);
