const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getOffNum', () => {
        it('Should return office number', () => {
            const str = '101';
            const result = new Manager(' ', ' ', ' ', '101').getOffNum();

            expect(result).toEqual(str);
        })
    })
    describe('getRole', () => {
        it('Should return role', () => {
            const str = 'Manager';
            const result = new Manager(' ', ' ', ' ', ' ').getRole();

            expect(result).toEqual(str);
        })
    })
})