const arr = ['John', 'Olivya', 'Olexandr', 'Emmanuel', 'Vanya', 'Nastya'];

const filterNames = (arr, text) => 
arr.filter(arr => arr.length > 5 && arr.includes(text));

console.log(filterNames(arr, 'ya'));