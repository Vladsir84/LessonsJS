export const manageClasses = () => {
    const classElem = document.querySelector('.one');
    const classElem1 = document.querySelector('.two');
    const classElem2 = document.querySelector('.three');
    const classElem3 = document.querySelector('.four');
    classElem.classList.add('selected');
    classElem1.classList.remove('selected');
    classElem2.classList.toggle('three_done');
    classElem3.classList.add('another-class');
}