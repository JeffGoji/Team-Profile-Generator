const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Johnny Middleman", 0, "johnny@email.com");

  expect(employee.name).toBe("Johnny Middleman");
  expect(employee.id).toBe = 0;
  expect(employee.email).toBe("johnny@email.com");
});

test("gets employee's name", () => {
  const employee = new Employee("Johnny Middleman", 0, "johnny@email.com");

  expect(employee.getName()).toEqual(
    expect.stringContaining("Johnny Middleman")
  );
});

test("gets employee's ID", () => {
  const employee = new Employee("Johnny Middleman", 0, "johnny@email.com");

  expect((employee.getId = 0));
});

test("gets employee's email", () => {
  const employee = new Employee("Johnny Middleman", 0, "johnny@email.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining("johnny@email.com")
  );
});
