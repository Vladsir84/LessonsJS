// export const createLogger = () => {
//     let arr = [];
//     return {
//         warn: (string) => arr.push({
//             message: string,
//             dateTime: new Date(),
//             type: 'warn',
//         }),
//         error: (string) => arr.push({
//             message: string,
//             dateTime: new Date(),
//             type: 'error',
//         }),
//         log: (string) => arr.push({
//             message: string,
//             dateTime: new Date(),
//             type: 'log',
//         }),
//         getRecords: (type) => !type ? arr
//             .filter(elem => elem = elem.message) : arr
//             .filter(elem => elem.type === type)
//             .sort((a, b) => a.dateTime > b.dateTime ? 1 : -1)


//     }
export const createLogger = () => {
    let arr = [];
    return {
        warn: (string) => arr.push({
            message: string,
            dateTime: new Date(),
            type: 'warn',
        }),
        error: (string) => arr.push({
            message: string,
            dateTime: new Date(),
            type: 'error',
        }),
        log: (string) => arr.push({
            message: string,
            dateTime: new Date(),
            type: 'log',
        }),
        getRecords: (type) => !type ? arr
            .filter(elem => elem = elem.message) : arr
            .filter(elem => elem.type === type)
            .sort((a, b) => a.dateTime > b.dateTime ? 1 : -1)


    }
};