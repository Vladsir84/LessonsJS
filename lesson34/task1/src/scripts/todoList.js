import { onCreateTask } from './createTask.js';
import { onToggleTask, deleteTaskElem } from './updateTask.js';


export const initTodoListHandlers = () => {
  const createTaskBtn = document.querySelector('.create-task-btn');
  createTaskBtn.addEventListener('click', onCreateTask);

  const checkedListItem = document.querySelector('.list');
  checkedListItem.addEventListener('click', onToggleTask);
  checkedListItem.addEventListener('click', deleteTaskElem);
}