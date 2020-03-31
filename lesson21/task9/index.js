export const finishList = () => {
    const listItem1 = document.createElement('li');
    const listItem8 = document.createElement('li');
    const listItem4 = document.createElement('li');
    const listItem6 = document.createElement('li');
    listItem1.textContent = '1';
    listItem8.textContent = '8';
    listItem4.textContent = '4';
    listItem6.textContent = '6';
    const unList = document.querySelector('.list');
    const listItemElem = document.querySelector('.special')
    unList.append(listItem8);
    unList.prepend(listItem1);
    listItemElem.before(listItem4);
    listItemElem.after(listItem6);
}