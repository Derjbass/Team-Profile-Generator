//import parent
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // return office number
    getOffNum(){
        return this.officeNumber;
    }

    // return role
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager;