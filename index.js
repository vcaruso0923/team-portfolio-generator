const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js')
const generatePage = require('./src/page-template.js');

const createPage = function (data) {
    generatePage(data)
        // .then(pageHTML => {
        //     return writeFile(pageHTML);
        // })
        // .then(writeFileResponse => {
        //     console.log(writeFileResponse);
        //     return copyFile();
        // })
        // .then(copyFileResponse => {
        //     console.log(copyFileResponse);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
}

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
                    this.getEngineerData();
                } else if (menu === 'Intern') {
                    this.getInternData();
                } else {
                    createPage(team);
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
                    this.getEngineerData();
                } else if (menu === 'Intern') {
                    this.getInternData();
                } else {
                    createPage(team);
                }
            })
            .catch(err => {
                console.log('Error!')
            })
    }

    getData.prototype.getManagerData = function () {

        let team = {
            manager: [],
            engineers: [],
            interns:[]
        };

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
                console.log(team)
                //check if user wants to add new member - generate page if not
                if (menu === 'Engineer') {
                    this.getEngineerData();
                } else if (menu === 'Intern') {
                    this.getInternData();
                } else {
                    createPage(team);
                }
            })
            .catch(err => {
                console.log('Error!')
            })
    };
}

new getData().getManagerData();