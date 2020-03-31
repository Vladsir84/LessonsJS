export const squaredNumbers = () => {
    const classElem = document.querySelector('.number[data-number = "5"]');
    const classElem1 = document.querySelector('.number[data-number = "7"]');
    const classElem2 = document.querySelector('.number[data-number = "-3"]');
    // classElem.dataset.number = '5';
    // classElem1.dataset.number = 7;
    // classElem2.dataset.number = -3;
    classElem.dataset.squaredNumber = '25';
    classElem1.dataset.squaredNumber = '49';
    classElem2.dataset.squaredNumber = '9';
  
}