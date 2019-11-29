let getAdults = obj => {
    let users = {};
    for (let prop in obj) {
        if (obj[prop] >= 18) object[prop] = obj[prop];
    }
    return users;
}