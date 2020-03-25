export function saveCalls(func) {
    let calls = [];
    let withMemory = function(...args) {
        calls.push(Array.from(args));
        withMemory.bind(func, args);
        return func.call(this, ...args);
    };
    withMemory.calls = calls;
    return withMemory;
}
