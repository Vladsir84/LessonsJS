export const requestUserData = userId => 
    new Promise((resolve, reject) => {
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
  
