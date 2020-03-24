export function bind(func, context, ...arg1) {
    return function(...arg2) {
        return func.apply(context, arg2, arg1);
    }
}