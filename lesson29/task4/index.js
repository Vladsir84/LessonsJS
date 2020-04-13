function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


export const requestUserData = (userId, callback) => {
    if (userId === 'broken') {
        setTimeout(() => callback(null, 'Failed to load user data'),
            getRandomArbitrary(1, 3));
        return;
    }
    setTimeout(() => callback({
        userId: userId,
        email: `${userId}@example.com`,
    }), getRandomArbitrary(1, 3));
};

// const onFormUserData = (firstArg, data) => {
//     if (firstArg === null) return data;
//     return firstArg;
// };