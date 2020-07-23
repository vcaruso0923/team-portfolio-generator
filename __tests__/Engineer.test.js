const Engineer = require('../lib/Engineer.js');

test ('Creates engineer class', () => {
    const engineer = new Engineer('github account', 'Steve', 123, "something@something.com");

    expect(engineer.github).toBe('github account');
    expect(engineer.name).toBe('Steve');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('something@something.com');
})