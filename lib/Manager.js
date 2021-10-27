const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, teamId, email, phoneNumber) {
    super(name, teamId, email);
    this.phoneNumber = phoneNumber;
  }

  getRole() {
    return "Manager";
  }
  getPhoneNumber() {
    return this.phoneNumber;
  }
}

module.exports = Manager;
