const defaultUserName = 'anonymus';
const anotherUser = null;
const activeUser = anotherUser || defaultUserName;
console.log(activeUser);

// const isAdmin = false;
// const userName = 'John';
// const isLoggedIn = Boolean(userName);
// const hasAccess = isAdmin || isLoggedIn;
// console.log(hasAccess);

const message = 'text';
const anotherMessage = 'text as well';
const isTruthy = message != anotherMessage;
console.log(isTruthy);

const userName = 'John';
const isLoggedIn = Boolean(userName);
const isFalsy = !isLoggedIn;
console.log(isFalsy);

const isNotTrue = typeof message == 'number';
console.log(isNotTrue);

const isTrue = typeof message !== 'boolean';
console.log(isTrue);