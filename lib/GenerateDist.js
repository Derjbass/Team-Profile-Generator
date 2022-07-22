// imports needed to generate files and information
const fs = require('fs');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class GenerateDist{
    constructor(empArr){
        this.empArr = empArr;
    }

    genHTML(){
        this.genCSS();
    }

    addCard(){

    }

    genCSS(){
        fs.writeFile('./dist/styles.css', `
header {
    text-align: center;
    align-items: center;
    background-color: rgb(255, 72, 72);
    color: white;
    padding: 2%;
    margin-bottom: 3%;
}

div.header {
    color: white;
}

div.card {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 1.6%;
    width: 20%;
    margin: 1%;
}

div.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

p.border {
    border: 1px, gray solid;
    padding: 6px;
    text-align: left;
}`, (err) => {
            if (err) throw err;
            console.log('CSS Generated')
        })
    }
}

module.exports = GenerateDist;