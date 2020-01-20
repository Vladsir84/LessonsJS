         export const addImage = imgSrc => {
            const p = new Promise((resolveCb, rejectCb) => {
                const imgElem = document.createElement('img');
                imgElem.setAttribute('alt', 'My Photo');
                imgElem.src = imgSrc;
                const containerElem = document.querySelector('.page');
                containerElem.append(imgElem);

                const onImageLoaded = () => {
                    const { width, height } = imgElem;
                    resolveCb(null, { width: 200, height: 100 });
                };

                imgElem.addEventListener('load', onImageLoaded);

                imgElem.addEventListener('error', () => rejectCb(new Error('Image load failed')));
            });
            return p;
        };
