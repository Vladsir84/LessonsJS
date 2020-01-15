var foo = 1;

function bar() {
    // if (typeof foo !== 'number') return null;
    if (!foo) {
        var foo = 10;
    }

    return foo;
}
export default bar();
/**************************************************** */

// var foo = 1;

// const bar = () =>
//     !foo ? foo = 10 : foo;

// export default bar();


// var foo = 1;

// const bar = () =>

// !foo ? foo = 10 : foo;

// export default bar();