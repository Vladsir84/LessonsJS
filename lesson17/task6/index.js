export function bind(func, context, ...arg1) {
    return function(...arg2) {
        return func.call(context, ...arg2, ...arg1);
    }
}