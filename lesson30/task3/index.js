import { addImage } from './addImage.js';

let imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

export const addImageV2 = imgSrc => {
    return new Promise((resolve, reject) => {
        const callback = (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        };
        addImage(imgSrc, callback);
    });
};

addImageV2(imgSrc)
    .then(data => console.log(data))
    .catch(error => console.log(error));