var foo = 1;
const bar = () => !foo ? foo = 10 : foo;
export default bar();
