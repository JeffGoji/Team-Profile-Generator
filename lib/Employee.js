//Employee classconstructor
class Employee {
  constructor(name, teamId, email, role) {
    this.name = name;
    this.teamId = teamId;
    this.email = email;
    this.role = role;
  }

  //Employee Methods

  getName() {
    return this.name;
  }

  getId() {
    return this.teamId;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

//Exporting the Employee class
module.exports = Employee;
