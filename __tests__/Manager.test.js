const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getRole', () => {
        it('Should return role', () => {
            const str = 'Manager';
            const result = new Manager(' ', ' ', ' ', ' ').getRole();

            expect(result).toEqual(str);
        })
    })
})