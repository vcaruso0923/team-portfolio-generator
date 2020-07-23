const Manager = require('../lib/Manager');

test ('Creates manager class', () => {
    const manager = new Manager('office number', 'Steve', '123', 'something@something.com');

    expect(manager.officeNumber).toBe('office number');
    expect(manager.name).toBe('Steve');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('something@something.com');
})

test ('Assign role', () => {
    const manager = new Manager('office number', 'Steve', '123', "something@something.com");

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})