export function createArrayOfFunctions(num) {
    if (typeof num !== 'number') return null;
    if (!num) return [];
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = function() {
            return i;
        }
    }
    return arr
}
