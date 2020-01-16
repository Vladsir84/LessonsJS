// const buttonElem = document.querySelector('#button');

// buttonElem.addEventListener('click', () => console.log('Click'));

// let sum = 0;
// const startTime = new Date();
// console.log('Cycle started');
// for (let i = 0; i < 5e9; i++) {
//     sum += i;
// }

// const endTime = new Date();
// console.log(`Cycle took ${endTime - startTime}ms`);

export function addImage(imgSrc, callback) {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    function onImageLoaded() {
        callback(null, { width: 200, height: 100 });
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image load failed'));


function callback(error) {
    if (error) {
        console.log(error);
        return;
      }
    }
};
