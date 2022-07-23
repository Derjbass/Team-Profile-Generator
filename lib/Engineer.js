//import parent
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email,);
        this.github = github;
    }

    // return github username
    getGithub(){
        return this.github;
    }

    // return role
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;