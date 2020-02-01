export function parseUser(string) {
    let result;
    try {
        result = JSON.parse(string);
        return result
    } catch (error) {
        return null;
    }
};