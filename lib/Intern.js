//import parent
const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email,);
        this.school = school;
    }

    // return school name
    getSchool(){
        return this.school;
    }

    // return role
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;