function splitString(str, len = 10) {
    if (typeof str !== 'string') return null;
    let arrString = [];
    let startPoint = 0;
    while (true) {
        let el = string.substr(startPoint, len);
        if (el.length === 0) break;
        arrStr.push(el);
        startPoint += len;
    }
    if (elem.length < len) {
        while (elem.length < len) {
            elem += ".";
        }
        return arrString;
    }
}
