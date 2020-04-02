const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
  ];

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';

    const listItemsElements = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);

            return listItemElem;
        });

    listElem.append(...listItemsElements);

};

renderListItems(tasks);

const createTaskBtn = document.querySelector('.create-task-btn');
const createTask = () => {
    const inputTask = document.querySelector('.task-input');
    if (!inputTask.value) return false;
    tasks.unshift({ text: inputTask.value, done: false })
    inputTask.value = '';

    renderListItems(tasks);
};
createTaskBtn.addEventListener('click', createTask);

const checkedListItem = document.querySelector('.list');
const checklistElem = event => {
    const checklistElem = tasks.find(item =>
        item.text === event.target.parentNode.textContent);
    checklistElem.done = event.target.checked;

    renderListItems(tasks);
};

checkedListItem .addEventListener('click', checklistElem);