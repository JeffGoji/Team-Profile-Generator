const Engineer = require("../lib/Engineer.js");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Montgomery Scott",
    0,
    "scotty@enterprise.com",
    "monty123git"
  );

  expect(engineer.name).toBe("Montgomery Scott");
  expect(engineer.id).toBe = 0;
  expect(engineer.email).toBe("scotty@enterprise.com");
  expect(engineer.github).toBe("monty123git");
});

test("gets engineer's github username", () => {
  const engineer = new Engineer(
    "Montgomery Scott",
    0,
    "scotty@enterprise.com",
    "monty123git"
  );

  expect(engineer.getGithub()).toEqual(expect.stringContaining("monty123git"));
});

test("gets engineer's role", () => {
  const engineer = new Engineer(
    "Montgomery Scott",
    0,
    "scotty@enterprise.com",
    "monty123git"
  );

  expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});
