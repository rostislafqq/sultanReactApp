import { dataDef } from './default';

describe('Data Test', () => {
    test('не пустой массив', () => {
        expect(dataDef.length).toBeGreaterThan(0);
    });
});