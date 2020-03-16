const baseUrl = 'https://crudcrud.com/api/69aff18485424424bb52f3a5337f057f/tasks';

const mapTasks = tasks =>
    tasks.map(({ _id, ...rest }) => ({...task, id: _id }));

export const getTasksList = () => {
    return fetch('https://crudcrud.com/api/69aff18485424424bb52f3a5337f057f/tasks')
        .then(response => response.json())
        .then(tasks => mapTasks(tasks))
};

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
};

export const updateTask = updatedTaskData => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData)
    })
};

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',

    })
};