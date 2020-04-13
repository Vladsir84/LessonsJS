export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
  
    const onImageLoaded = () => {
       
        callback (null, { width: 200, height: 100 });
    }
    
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => callback('Image load failed'));
  };
  
  const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson+13/hw1/nature2.jpeg'
  
  const onImageLoaded = (error, data) => {
      if (error) {
          console.log(error);
          return;
      }
      
      const { width, height } = data;
      const sizeElem = document.querySelector('.image-size');
      sizeElem.textContent = `${width} x ${height}`;
  };
  
  addImage(imgSrc, onImageLoaded);
