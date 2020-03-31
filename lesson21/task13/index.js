export const getSection = (num) => {
    const classElem = document.querySelector('span[data-number="${num}"]');
   return classElem.closest('.two')
}