const Intern = require("../lib/Intern.js");

test("creates an intern object", () => {
  const intern = new Intern(
    "Alex Kurtszman",
    0,
    "terrible@worstshowrunnerever.com",
    "bad writters college"
  );
  expect(intern.name).toBe("Alex Kurtszman");
  expect(intern.id).toBe = 0;
  expect(intern.email).toBe("terrible@worstshowrunnerever.com");
  expect(intern.school).toBe("bad writters college");
});

test("gets intern's school", () => {
  const intern = new Intern(
    "Alex Kurtszman",
    0,
    "terrible@worstshowrunnerever.com",
    "bad writters college"
  );
  expect(intern.getSchool()).toEqual(
    expect.stringContaining("bad writters college")
  );
});

test("gets intern's role", () => {
  const intern = new Intern(
    "Alex Kurtszman",
    0,
    "terrible@worstshowrunnerever.com",
    "bad writters college"
  );

  expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});
