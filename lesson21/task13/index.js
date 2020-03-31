export const getSection = (num) => {
    const classElem = document.querySelector('span[data-number="${num}"]');
    const elem = classElem.closest('div');
    const closestElem = elem.getAttribute('data-section');

    return closestElem
}