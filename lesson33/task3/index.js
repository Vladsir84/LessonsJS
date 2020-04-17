const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */

function getTasksList() {
    return fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks')
       .then(tasksList => console.log(tasksList));
  }

/* getTaskById code here */

function getTaskById() {
    return fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks')
       .then(tasksData => console.log(tasksData));
  }