const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee('Steve', '123', "something@something.com");

    expect(employee.name).toBe('Steve');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('something@something.com');
});

test('Creates name object', () => {
    const employee = new Employee('Steve', '123', "something@something.com");

    expect(employee.getName()).toHaveProperty('name');
});

test('Creates ID object', () => {
    const employee = new Employee('Steve', '123', "something@something.com");

    expect(employee.getID()).toHaveProperty('id');
});

test('Creates Email object', () => {
    const employee = new Employee('Steve', '123', "something@something.com");

    expect(employee.getEmail()).toHaveProperty('email');
});

test('Assign role', () => {
    const employee = new Employee('Steve', '123', "something@something.com");

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));

});