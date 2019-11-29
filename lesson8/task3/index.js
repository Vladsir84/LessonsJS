const pickProps = (obj, arr) => {
    let object = {};

    for (let prop in obj) {
        for (let item of arr)

            if (prop === item) object[prop] = obj[prop];
    }

    return object;
};
