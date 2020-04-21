const baseUrl = 'https://5e5af5eb37d2eh0016796f52.mockapi.io/api/v1/users';


/* getUsersList code here */


export const getUsersList = () => {
    return fetch(baseUrl)
       .then(response => {
          return response.json()
       })
  }

/* getUserById code here */

export const getUserById = userId => {
    return fetch(`${baseUrl}/${userId}`)
       .then(response => {
        return response.json()
     })
}


/* createUser code here */

export const createUser = userData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    })
 };

/* updateUser code here */

export const updateUser = (userId, updatedUserData) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedUserData)
    })
 };

 /* deleteUser code here */

 export const deleteUser = (userId) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    })
 };