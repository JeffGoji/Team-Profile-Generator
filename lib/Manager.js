//Employee required for Manager prototype:
const Employee = require("./Employee");

//Prototype for boss using "extends" off of the employee:
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  //Methods unique to office manager:
  getOfficeNumber() {
    return this.officeNumber;
  }
}

//Exports the Manager prototype:
module.exports = Manager;
