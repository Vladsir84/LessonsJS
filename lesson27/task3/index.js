let tasks = JSON.parse(localStorage.getItem('tasksList'), []);

let listItem = document.querySelector('.list');
let createTaskBtn = document.querySelector('.create-task-btn');

createTaskBtn.addEventListener('click', function() {
    let task_input = document.querySelector('.task-input');

    tasks.push({ text: task_input.value, done: false, id: Math.floor(Math.random() * 1000) })
    localStorage.setItem('tasksList', JSON.stringify(tasks));

    listItem.innerHTML = '';
    task_input.value = '';
    renderListItems(tasks);
});

const renderListItems = tasks => {
    const listElem = document.querySelector('.list');

    const listItemsElements = tasks
        .sort((a, b) => b.date - a.date)
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.setAttribute('id', id);
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);

            return listItemElem;
        });

    listElem.append(...listItemsElements);



    const addTask = element => {

        const isCheckbox = element.target.classList.contains('list__item-checkbox');
        if (!isCheckbox) {
            return;
        }
        const taskData = tasks.find(task => task.id == element.target.id);
        Object.assign(taskData, { done: element.target.checked });
        listItem.innerHTML = '';
        renderListItems(tasks);
        localStorage.setItem('tasksList', JSON.stringify(tasks));
    };

    const taskList = document.querySelector('.list');
    taskList.addEventListener('click', addTask);
};

renderListItems(tasks);
