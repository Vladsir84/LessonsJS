fetch('https://api.github.com/user/github')
    .then(response => {
        debugger;
        if (response.status === 200) {
            return response.json();
        }
        throw new Error('No data');
    })
    .then(data => console.log(data))
    .catch(err => {
        debugger;
        console.log(err);
    });