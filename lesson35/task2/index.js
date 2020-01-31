// const successRequest = Promise.resolve({ name: 'Tom' });

// successRequest
//     .then(data => {
//         console.log(data);
//         throw new Error('Unexpected error');
//     })
//     .catch(err => {
//         console.warn(err.massage);
//     });



const failedRequest = Promise.reject(new Error('Fail'));

failedRequest
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.warn(err.message);
        // throw err;
        return Promise.reject(err);
    })
    .then(data => {
        console.log(data);
    });

window.addEventListener('unhandledrejection', function(e) {
    console.log(e.reason.message);
});