<<<<<<< HEAD
function sortAsc(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                let t = array[j + 1];
                array[j + 1] = array[j];
                array[j] = t;
            }
        }
    }
    return array;
}



function sortDesc(array) {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (array[i] < array[i + 1]) {
                let t = array[i];
                array[i] = array[i + 1];
                array[i + 1] = t;
            }
        }
    }
    return array;
=======
function sortAsc(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                let t = array[j + 1];
                array[j + 1] = array[j];
                array[j] = t;
            }
        }
    }
    return array;
}



function sortDesc(array) {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (array[i] < array[i + 1]) {
                let t = array[i];
                array[i] = array[i + 1];
                array[i + 1] = t;
            }
        }
    }
    return array;
>>>>>>> 26b6e0a874f91094fa4e3f8b163f725064a39ed5
}