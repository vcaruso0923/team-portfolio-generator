const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js')

//empty team array to store inquirer responses
let team = {
    manager: [],
    engineers: [],
    interns: []
};

//page HTML template
const generatePage = () => {

    const generateManager = () => {

        return `    <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
        <div class="card-header">Manager</div>
            <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">${team.manager[0].getName().name}</p>
            <p class="card-text">ID: ${team.manager[0].getID().id}</p>
            <p class="card-text">Email: ${team.manager[0].getEmail().email}</p>
            <p class="card-text">Office #: ${team.manager[0].getOfficeNumber().officeNumber}</p>
        </div>
    </div>
`
    }

    const generateEngineer = () => {
        if (team.engineers.length > 0) {
            for (i = 0; team.engineers.length; i++) {
                return `
            <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
            <div class="card-header">Engineer</div>
            <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">${team.engineers[i].getName().name}</p>
                <p class="card-text">ID: ${team.engineers[i].getID().id}</p>
                <p class="card-text">Email: ${team.engineers[i].getEmail().email}</p>
                <p class="card-text">Office #: ${team.engineers[i].getGithub().github}</p>
            </div>
            </div>
            `
            };
        } else {
            return ''
        }
    }

    const generateIntern = () => {
        if (team.interns.length > 0) {
            for (i = 0; team.interns.length; i++) {
                return `
                <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
                <div class="card-header">Intern</div>
                <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">${team.interns[i].getName().name}</p>
                <p class="card-text">ID: ${team.interns[i].getID().id}</p>
                <p class="card-text">Email: ${team.interns[i].getEmail().email}</p>
                    <p class="card-text">Office #: ${team.interns[i].getSchool().school}</p>
                    </div>
                    </div>
                    `
            };
        } else {
            return ''
        }
    }


    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta getName()="viewport" content="wgetID()th=device-wgetID()th, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Navbar</span>
        </nav>
      </header>

      <main class="row">
        ${generateManager()}
        ${generateEngineer()}
        ${generateIntern()}
      </main>

    </body>
    </html>
    `

};

//build pare, write files, copy files
const createPage = function () {
    generatePage()
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
}

//inquirer
function getData() {

    getData.prototype.getEngineerData = function () {

        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the engineers name?'
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is the engineers ID?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is the engineers email?'
            },
            {
                type: 'text',
                name: 'github',
                message: 'What is this engineers github?'
            },
            {
                type: 'list',
                name: 'menu',
                message: 'Would you like to add another team member?',
                choices: ['Engineer', 'Intern', 'No thanks!']
            }
        ])

            //create new instance of Engineer
            .then(({ github, name, id, email, menu }) => {
                const newEngineer = new Engineer(github, name, id, email);
                team.engineers.push(newEngineer)

                //check if user wants to add new member - generate page if not
                if (menu === 'Engineer') {
                    return this.getEngineerData();
                } else if (menu === 'Intern') {
                    return this.getInternData();
                } else if (menu === 'No thanks!') {
                    return createPage();
                }
            })
            .catch(err => {
                console.log('Error!')
            })
    }

    getData.prototype.getInternData = function () {

        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the interns name?'
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is the interns ID?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is the interns email?'
            },
            {
                type: 'text',
                name: 'school',
                message: 'What is the name of this interns school?'
            },
            {
                type: 'list',
                name: 'menu',
                message: 'Would you like to add another team member?',
                choices: ['Engineer', 'Intern', 'No thanks!']
            }
        ])

            //create new instance of Intern
            .then(({ school, name, id, email, menu }) => {
                const newIntern = new Intern(school, name, id, email);
                team.interns.push(newIntern);

                //check if user wants to add new member - generate page if not
                if (menu === 'Engineer') {
                    return this.getEngineerData();
                } else if (menu === 'Intern') {
                    return this.getInternData();
                } else if (menu === 'No thanks!') {
                    return createPage();
                }
            })
            .catch(err => {
                console.log('Error!')
            })
    }

    getData.prototype.getManagerData = function () {

        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the managers name?'
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: 'What is the managers office number?'
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is the managers ID?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is the managers email?'
            },
            {
                type: 'list',
                name: 'menu',
                message: 'Would you like to add another team member?',
                choices: ['Engineer', 'Intern', 'No thanks!']
            }
        ])

            //create new instance of Manager
            .then(({ officeNumber, name, id, email, menu }) => {
                const newManager = new Manager(officeNumber, name, id, email);
                team.manager.push(newManager);

                //check if user wants to add new member - generate page if not
                if (menu === 'Engineer') {
                    return this.getEngineerData();
                } else if (menu === 'Intern') {
                    return this.getInternData();
                } else if (menu === 'No thanks!') {
                    return generatePage();
                }
            })
            .catch(err => {
                console.log('Error!')
            })
    };
}

new getData().getManagerData();