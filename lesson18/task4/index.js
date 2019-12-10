// export function spy(func) {
//     let spied = function(...args) {
//         spied.calls.push(args);
//         return func.call(this, ...args);
//     }
//     spied.calls = [];
//     return spied;
// }

export function spy(func) {
    let calls = [];
    let spies = function(...args) {
        calls.push(Array.from(args));
        spies.bind(func, args);
        return func.call(this, ...args);
    };
    spies.calls = calls;
    return spies;
}