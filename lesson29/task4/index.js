export const requestUserData = (userId, callback) => {
    let random = (Math.random() * (3 - 1) + 1) * 1000;
    setTimeout(() => {


        if (userId === 'broken') {
            callback(null, 'Failed to load user data');
            return;
        }

        callback({
            userId: userId,
            email: `${userId}@example.com`,
        })
    }, random);
};


