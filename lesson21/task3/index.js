const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
}

const getItemsArray = () => {
    const elementsArray = document.querySelectorAll('.tool');
    console.dir(elementsArray);
    let arr = [];
    for (let i = 0; i < elementsArray.length; i++) {
        let arr1 = arr.push(i);
        return arr1;
    };
}