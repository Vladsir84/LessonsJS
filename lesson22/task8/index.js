let buttonElem = document.querySelectorAll('.btn');
for (let i = 0; i < buttonElem.length; i++) {
   buttonElem[i].addEventListener('click', handleClick);
   
   function handleClick(event) {
       console.log(event.target.textContent)
    }
}

