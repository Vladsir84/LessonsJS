// requestUserData

export const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {
        if (userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'));
            }, 500);
        } else {
            setTimeout(() => {
                resolve({
                    name: 'John',
                    age: 17,
                    email: `${userId}@example.com`,
                    userId,
                });
            }, 1000);
        }
    });
    return request;
};

requestUserData('broken')
    .catch(error => {
        console.log(error)
        throw new Error('Error');
    })
    // .then(data => 4)
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(data => console.log('finally'));

// requestUserData('broken-1')
//     .then(data => console.log(data));