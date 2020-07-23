const Intern = require('../lib/Intern.js');

test ('Creates Intern class', () => {
    const intern = new Intern('school', 'Steve', 123, "something@something.com");

    expect(intern.school).toBe('school');
    expect(intern.name).toBe('Steve');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('something@something.com');
})