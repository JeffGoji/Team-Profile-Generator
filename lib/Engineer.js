const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, teamId, email, github) {
    super(name, teamId, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
