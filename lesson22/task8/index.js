let buttonElem = document.querySelectorAll('.btn');
for (let elem of buttonElem) {
   buttonElem = elem.addEventListener('click', handleClick);
   
   function handleClick(event) {
       console.log(event.target.textContent)
    }
}