export const squaredNumbers = () => {
    const classElements = document.querySelectorAll('.number');
    
    for (let item of classElements) {
       const squaredElement = item.getAttribute('data-number') * item.getAttribute('data-number');
       item.dataset.squaredNumber = squaredElement
    }
}