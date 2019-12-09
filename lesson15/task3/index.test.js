import { createLogger } from './index';

it('should get the array', () => {

    const logger = createLogger();
    logger.warn('Attention!');
    logger.error('We have a problem');
    const result = logger.getRecords('string');
    expect(result).toEqual([]);

    const string = createLogger();
    string.warn('Attention!');
    string.error('We have a problem');
    string.log('string');
    const arrData = string.getRecords();
    expect(arrData).toEqual(['Attention!', 'We have a problem', 'string']);

    const item = createLogger();
    const add = item.getRecords();
    expect(add).toEqual([]);

});
