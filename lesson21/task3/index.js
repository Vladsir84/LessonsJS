export const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
}

export const getItemsArray = () => {
    const NodeList = document.querySelectorAll('.tool');
    const elementsArray = Array.from(NodeList);
    console.dir(elementsArray);
    return elementsArray;
};
