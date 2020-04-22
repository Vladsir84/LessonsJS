const fetchUser = async userId => fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json());

export const getUsersBlogs = async usersArray => {
    try {
        let usersData = usersArray
            .map(elem => fetchUser(elem));
        let userEmail = await Promise.all(usersData)
        return userEmail
            .map(({ blog }) => blog);
    } catch (err) {
        throw new Error(err);

    }
}



getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(linksList => console.log(linksList));