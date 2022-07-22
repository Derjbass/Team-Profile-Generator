const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('Should return the name', () => {
            const str = 'Derek';
            const result = new Employee('Derek').getName();

            expect(result).toEqual(str);
        })
    })
    describe('getId', () => {
        it('Should return the ID', () => {
            const str = '1';
            const result = new Employee('Derek', str).getId();

            expect(result).toEqual(str);
        })
    })
    describe('getEmail', () => {
        it('Should return the Email', () => {
            const str = 'derek@gmail.com';
            const result = new Employee('Derek', 1, str).getEmail();

            expect(result).toEqual(str);
        })
    })
    describe('getRole', () => {
        it('Should return the Role', () => {
            const str = 'Employee';
            const result = new Employee('Derek', 1, ' ', str).getRole();

            expect(result).toEqual(str);
        })
    })
})