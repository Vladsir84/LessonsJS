// import { createLogger } from "./index.js";

// it('should form arraies of certain data', () => {
//     const message1 = createLogger();

//     message1.warn("I warn you");
//     message1.log("some log");
//     message1.warn("I warn you correctly");
//     message1.error("BIGEST ERROR EVER!");
//     message1.warn("I warn you immediatly");
//     message1.error("ERROR!");
//     const resultOfEmpty = message1.getRecords();
//     expect(resultOfEmpty).toEqual(["ERROR!", "I warn you immediatly", "BIGEST ERROR EVER!", "I warn you correctly", "some log", "I warn you"]);

//     let message2 = createLogger();
//     const resultOfAbsenceMessages = message2.getRecords();
//     expect(resultOfAbsenceMessages).toEqual([]);

// });

import { createLogger } from './index';

it('should get the array', () => {

    const logger = createLogger();
    logger.warn('Attention!');
    logger.error('We have a problem');
    const result = logger.getRecords('string');
    expect(result).toEqual([]);

    const item = createLogger();
    const add = item.getRecords();
    expect(add).toEqual([]);

    const elem = createLogger();
    elem.warn('Attention');
    logger.error('We have a problem');
    const str = elem.getRecords('string');
    expect(str).toEqual([]);

});