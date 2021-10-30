const Manager = require("../lib/Manager.js");

test("creates a manager object", () => {
  const manager = new Manager("James Kirk", 0, "jamest@enterprise.com", 0);

  expect(manager.name).toBe("James Kirk");
  expect(manager.id).toBe = 0;
  expect(manager.email).toBe("jamest@enterprise.com");
  expect(manager.office).toBe = 0;
});

test("gets employee's role", () => {
  const manager = new Manager("James Kirk", "5555", "jamest@enterprise.com", 0);

  expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});
