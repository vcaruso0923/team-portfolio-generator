const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee('Steve', 123, "something@something.com");

    expect(employee.name).toBe('Steve');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('something@something.com');
});