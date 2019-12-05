export function increaser(a, index) {
    if (!Number.isInteger(a) || !Number.isInteger(index)) return null;
    if (a > index) {
        return a + index;
    } else {
        return a;
    }
}