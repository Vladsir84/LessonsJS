let buttonElem = document.querySelector('.single-use-btn');

buttonElem.addEventListener('click', func);

function func () {
    console.log('clicked')
    buttonElem.removeEventListener('click', func);
}
 
