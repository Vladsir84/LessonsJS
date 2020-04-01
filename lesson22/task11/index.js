const buttonElem = document.querySelectorAll('.pagination__page');
function handleClick (event) { 
    console.log(event.target.dataset.pageNumber);
}
    buttonElem.forEach(elem => { elem.addEventListener('click', handleClick);
});