const Engineer = require('../lib/Engineer.js');

test ('Creates engineer class', () => {
    const engineer = new Engineer('github account', 'Steve', '123', "something@something.com");

    expect(engineer.github).toBe('github account');
    expect(engineer.name).toBe('Steve');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('something@something.com');
})

test ('Creates github object', () => {
    const engineer = new Engineer('github account', 'Steve', '123', "something@something.com");

    expect(engineer.getGithub()).toHaveProperty('github')
})

test ('Assign Role', () => {
    const engineer = new Engineer('github account', 'Steve', '123', "something@something.com");

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})