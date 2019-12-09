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

    });
