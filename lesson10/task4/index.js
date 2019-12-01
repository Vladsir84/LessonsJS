const getMaxAbsoluteNumber = arr => {
    Math.max(... arr.map(num => Math.abs(num)));
    (!Array.isArray(arr) || arr.length === 0) ? null :
   
