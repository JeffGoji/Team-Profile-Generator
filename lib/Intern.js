const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, teamId, email, school) {
    super(name, teamId, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
