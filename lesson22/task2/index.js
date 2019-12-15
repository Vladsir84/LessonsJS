const tasks = [
    { text: 'Buy milk', done: false, date: new Date(), id: Math.floor(Math.random() * 10) },
    { text: 'Pick up Tom from airport', done: false, date: new Date(), id: Math.floor(Math.random() * 10) },
    { text: 'Visit party', done: false, date: new Date(), id: Math.floor(Math.random() * 10) },
    { text: 'Visit doctor', done: true, date: new Date(), id: Math.floor(Math.random() * 10) },
    { text: 'Buy meat', done: true, date: new Date(), id: Math.floor(Math.random() * 10) },
];



const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.setAttribute('id', id);
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);

            return listItemElem;
        });

    listElem.append(...listItemsElems);
};
renderListItems(tasks);

const createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', () => {
    const input = document.querySelector('.task-input');
    if (!input.value) return;
    tasks.unshift({ text: input.value, done: false, });
    const listItem = document.querySelector('.list');
    listItem.innerHTML = '';
    input.value = '';
    renderListItems(tasks);
});



const taskList = document.querySelector('.list');
const addTask = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');
    if (!isCheckbox) {
        return;
    }
    const taskData = tasks.find(task => task.id === event.target.dataset.id);
    Object.assign(taskData, { done: event.target.checked });
    let listItem = document.querySelector('.list');
    listItem.innerHTML = '';
    renderListItems(tasks);

};
const addTaskHandler = taskList.addEventListener('click', addTask);