const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getSchool', () => {
        it('Should return the school name', () => {
            const str = 'school';
            const result = new Intern(' ', ' ', ' ', 'school').getSchool();

            expect(result).toEqual(str);
        })
    })
    describe('getRole', () => {
        it('Should return the Role', () => {
            const str = 'Intern';
            const result = new Intern(' ', ' ', ' ', ' ').getRole();

            expect(result).toEqual(str);
        })
    })
})