export const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
}

export const getItemsArray = () => {
    const elementsArray = document.querySelectorAll('.tool');
    console.dir(elementsArray);
    let NodeList = Array.from(elementsArray);
    return NodeList;
};
