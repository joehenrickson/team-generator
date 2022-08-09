const Employee = require('../lib/employee.js');

const employee = new Employee('Name', 1, 'name@me.com');

test('Create Employee Object', () => {
  expect(employee.name).toBe('Name');
});

test('getName() returns a name', () => {
  expect(employee.getName()).toBe('Name');
});

test('getId() returns an id', () => {
  expect(employee.getId()).toBe(1);
});

test('getEmail() returns an email', () => {
  expect(employee.getEmail()).toBe('name@me.com');
});

test('getId() returns an emplo', () => {
  expect(employee.getRole()).toBe('Employee');
});

// const object = {
//   name: 'value',
//   getName() {
//     return this.name;
//   },
// };

// object.name;
// object.getName();
