const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */

export function getTasksList() {
    return fetch(baseUrl)
       .then( response => {
          return response.json()
       })
  }

// getTasksList( 'GET', baseUrl)
// .then(tasksList => console.log(tasksList))
// .catch(error => console.log(error)
// )
  /* getTaskById code here */

export function getTaskById(baseUrl) {
    return fetch(baseUrl)
       .then(response => {
        return response.json()
     })
}

// getTasksList( 'GET', baseUrl)
// .then(tasksList => console.log(tasksList))
// .catch(error => console.log(error)
// )