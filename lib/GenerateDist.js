// imports needed to generate files and information
const fs = require('fs');

class GenerateDist{
    constructor(empArr){
        this.empArr = empArr;
    }

    // generate HTML doc
    genHTML(){
        fs.writeFile('./dist/index.html', 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles.css">

    <title>
        Team Profile
    </title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>

    <div class="container">
        ${this.addCard()}
    </div>

    
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="jquery-3.6.0.min.js"></script>

</body>
</html>`, (err) => {
    if (err) throw err;
    console.log('HTML Generated')
});
    
        // call CSS Generation
        this.genCSS();
    }

    // add cards based off obj array size
    addCard(){
        let result = '';

        for (let i = 0; i < this.empArr.length; i++) {
            if(this.empArr[i].getRole() === 'Engineer'){
                result += `
                <div class="card">
                    <div class="header card-header bg-primary">
                        <p class="name">${this.empArr[i].getName()}</p>
                        <p class="name">${this.empArr[i].getRole()}</p>
                    </div>
                    <div class="card-body">
                        <p class="border">ID: ${this.empArr[i].getId()}</p>
                        <p class="border">Email: <a href="mailto:${this.empArr[i].getEmail()}">${this.empArr[i].getEmail()}</a></p>
                        <p class="border">GitHub: <a href='https://github.com/${this.empArr[i].getGithub()}'>${this.empArr[i].getGithub()}</a></p>
                    </div>
                </div>`
            }else if (this.empArr[i].getRole() === 'Manager'){
                result +=`
                <div class="card">
                    <div class="header card-header bg-primary">
                        <p class="name">${this.empArr[i].getName()}</p>
                        <p class="name">${this.empArr[i].getRole()}</p>
                    </div>
                    <div class="card-body">
                        <p class="border">ID: ${this.empArr[i].getId()}</p>
                        <p class="border">Email: <a href="mailto:${this.empArr[i].getEmail()}">${this.empArr[i].getEmail()}</a></p>
                        <p class="border">Office Number: ${this.empArr[i].getOffNum()}</p>
                    </div>
                </div>`
            }else {
                result +=`
                <div class="card">
                    <div class="header card-header bg-primary">
                        <p class="name">${this.empArr[i].getName()}</p>
                        <p class="name">${this.empArr[i].getRole()}</p>
                    </div>
                    <div class="card-body">
                        <p class="border">ID: ${this.empArr[i].getId()}</p>
                        <p class="border">Email: <a href="mailto:${this.empArr[i].getEmail()}">${this.empArr[i].getEmail()}</a></p>
                        <p class="border">School: ${this.empArr[i].getSchool()}</p>
                    </div>
                </div>`
            };
        }
        return result;

    }

    // generate CSS doc
    genCSS(){
        fs.writeFile('./dist/styles.css', 
`* {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

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
}

p.name {
    font-size: 24px;
}`, (err) => {
            if (err) throw err;
            console.log('CSS Generated')
        })
    }
}

module.exports = GenerateDist;