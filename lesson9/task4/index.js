const getPeople = obj => Object.values(obj)
    .reduce((acc, item) => acc.concat(item), [])
    .map(room => room.name);