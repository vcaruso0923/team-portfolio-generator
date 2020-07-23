const Employee = require('./Employee');

class Intern extends Employee {
    constructor (school, name, id, email) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return {
            github: this.school
        }
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;