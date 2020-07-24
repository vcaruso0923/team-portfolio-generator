const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./utils/generate-site.js')
const generatePage = require('./src/page-template.js');

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

            .then(({ github, name, id, email, menu }) => {
                this.engineer = new Engineer(github, name, id, email);
                if (menu === 'Engineer') {
                    this.getEngineerData();
                } else if (menu === 'Intern') {
                    this.getInternData();
                } else {
                    console.log('Finished!')
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

            .then(({ school, name, id, email, menu }) => {
                this.intern = new Intern(school, name, id, email);
                if (menu === 'Engineer') {
                    this.getEngineerData();
                } else if (menu === 'Intern') {
                    this.getInternData();
                } else {
                    console.log('Finished!')
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

            .then(({ officeNumber, name, id, email, menu }) => {
                this.manager = new Manager(officeNumber, name, id, email);
                if (menu === 'Engineer') {
                    this.getEngineerData();
                } else if (menu === 'Intern') {
                    this.getInternData();
                } else {
                    console.log('Finished!')
                }
            })
            .catch(err => {
                console.log('Error!')
            })
    };
}

new getData().getManagerData();