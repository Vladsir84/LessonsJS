const buttonElem = document.querySelectorAll('.btn');
function handleClick (event) { 
    console.log(event.target.textContent);
}
    buttonElem.forEach(elem => { elem.addEventListener('click', handleClick);
});
