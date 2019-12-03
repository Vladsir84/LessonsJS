function splitString(str, len = 10) {
    if (typeof str !== 'string') return null;
    let arrString = [];
    let startPoint = 0;
    while (true) {
        let el = str.substr(startPoint, len);
        if (el.length === 0) break;
        arrString.push(el);
        startPoint += len;
    }
    if (el.length < len) {
        while (el.length < len) {
            el += ".";
        }
        return arrString;
    }
}
