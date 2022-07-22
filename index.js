//imports
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
                name: 'officeNum',
                message: 'Enter Office Number: ',
            },
            {
                type: 'list',
                name: 'new',
                message: 'Add Engineer, Intern, or finish building team?',
                choices: ['Engineer', 'Intern', 'Finish'],
            }
        ]).then((res) => {
            empArr.push(new Manager(res.name, res.id, res.email, res.officeNum));
            console.log(empArr);

            //check if to add another employee
            if(res.new === 'Engineer') addEngineer();
            else if(res.new === 'Intern') addIntern();
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
                name: 'github',
                message: 'Enter Employee GitHub: ',
            },
            {
                type: 'list',
                name: 'new',
                message: 'Add Engineer, Intern, or finish building team?',
                choices: ['Engineer', 'Intern', 'Finish'],
            }
        ]).then((res) => {
            empArr.push(new Engineer(res.name, res.id, res.email, res.github));
            console.log(empArr);

            //check if to add another employee
            if(res.new === 'Engineer') addEngineer();
            else if(res.new === 'Intern') addIntern();
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
                name: 'school',
                message: 'Enter School: ',
            },
            {
                type: 'list',
                name: 'new',
                message: 'Add Engineer, Intern, or finish building team?',
                choices: ['Engineer', 'Intern', 'Finish'],
            }
        ]).then((res) => {
            empArr.push(new Intern(res.name, res.id, res.email, res.school));
            console.log(empArr);

            //check if to add another employee
            if(res.new === 'Engineer') addEngineer();
            else if(res.new === 'Intern') addIntern();
        })
};

addManager();

