const Intern = require('../lib/Intern.js');

test ('Creates Intern class', () => {
    const intern = new Intern('school', 'Steve', '123', "something@something.com");

    expect(intern.school).toBe('school');
    expect(intern.name).toBe('Steve');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('something@something.com');
})

test ('Creates school object', () => {
    const intern = new Intern('school', 'Steve', '123', "something@something.com");

    expect(intern.getSchool()).toHaveProperty('github')
})

test ('Assign role', () => {
    const intern = new Intern('school', 'Steve', '123', "something@something.com");

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})