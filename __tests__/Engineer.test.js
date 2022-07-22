const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it('Should return github', () => {
            const str = 'github';
            const result = new Engineer(' ', ' ', ' ', 'github').getGithub();

            expect(result).toEqual(str);
        })
    })
    describe('getRole', () => {
        it('Should return Role', () => {
            const str = 'Engineer';
            const result = new Engineer(' ', ' ', ' ', ' ').getRole();

            expect(result).toEqual(str);
        })
    })
})