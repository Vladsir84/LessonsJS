const baseUrl = 'https://5e6b89f2d708a000160b4a7d.mockapi.io/api/v1/tasks';


/* getUsersList code here */

export const getUsersList = userData => {
    return fetch(baseUrl)
    .then(response => response.json())
}

/* getUserById code here */

export const getUserById = userId => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userId)
    })
 };


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