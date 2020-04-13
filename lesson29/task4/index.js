function getRandomTime(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random) * 1000;
}

export const requestUserData = (userId, callback) => {
    if (userId === 'broken') {
        setTimeout(() => callback(null, 'Failed to load user data'),
            getRandomTime(1, 3));
        return;
    }
    setTimeout(() => callback({
        name: 'John',
        age: 17,
        userId: userId,
        email: `${userId}@example.com`,
    }), getRandomTime(1, 3));
};

