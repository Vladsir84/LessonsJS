const inputElem = document.querySelector('.text-input');
inputElem.addEventListener('change', handleClick, true);

function handleClick (event) { 
    console.log(event.target.value);
}

