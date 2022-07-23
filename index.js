//imports
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const GenerateDist = require('./lib/GenerateDist');

//employee list array
const empArr = [];

const addManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `Enter Manager's Name: `,
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter Employee ID: ',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Employee Email: ',
            },
            {
                type: 'input',
                name: 'unique',
                message: 'Enter Office Number: ',
            },
            {
                type: 'list',
                name: 'new',
                message: 'Add Engineer, Intern, or finish building team?',
                choices: ['Engineer', 'Intern', 'Finish'],
            }
        ]).then((res) => {
            empArr.push(new Manager(res.name, res.id, res.email, res.unique));

            //check if to add another employee
            if(res.new === 'Engineer') addEngineer();
            else if(res.new === 'Intern') addIntern();
            else new GenerateDist(empArr).genHTML();
        })
};

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `Enter Engineer's Name: `,
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter Employee ID: ',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Employee Email: ',
            },
            {
                type: 'input',
                name: 'unique',
                message: 'Enter Employee GitHub Username: ',
            },
            {
                type: 'list',
                name: 'new',
                message: 'Add Engineer, Intern, or finish building team?',
                choices: ['Engineer', 'Intern', 'Finish'],
            }
        ]).then((res) => {
            empArr.push(new Engineer(res.name, res.id, res.email, res.unique));

            //check if to add another employee
            if(res.new === 'Engineer') addEngineer();
            else if(res.new === 'Intern') addIntern();
            else new GenerateDist(empArr).genHTML();
        })
};

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `Enter Intern's Name: `,
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter Employee ID: ',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Employee Email: ',
            },
            {
                type: 'input',
                name: 'unique',
                message: 'Enter School: ',
            },
            {
                type: 'list',
                name: 'new',
                message: 'Add Engineer, Intern, or finish building team?',
                choices: ['Engineer', 'Intern', 'Finish'],
            }
        ]).then((res) => {
            empArr.push(new Intern(res.name, res.id, res.email, res.unique));

            //check if to add another employee
            if(res.new === 'Engineer') addEngineer();
            else if(res.new === 'Intern') addIntern();
            else new GenerateDist(empArr).genHTML();
        })
};

addManager();

