import { renderTasks } from './renderer.js';
import { gerItem, setItem } from './storage.js';

export const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list');

    if (!isCheckbox) {
        return;
    }

    const taskList = gerItem('taskList');
    const newTasksList = taskList
        .map(task => {
            if (task.id === e.target.dataset.id) {
                const done = e.target.checked;
                return {
                    ...task,
                    done,
                    finishDate: done ?
                        new Date().toISOString() : null
                };
            }

            return task;
        });
    setItem('tasksList', newTasksList);

    renderTasks();

};