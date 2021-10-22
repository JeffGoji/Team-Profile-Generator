let inquirer = require("inquirer");

//Inquirer Questions
inquirer.prompt([
  {
    type: "input",
    message: "What is your Name?",
    name: "name",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need your Name";
      }
    },
  },
  {
    type: "input",
    message: "What is your Position?",
    name: "position",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need your Position";
      }
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need your E-mail";
      }
    },
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "email",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need your GitHub username";
      }
    },
  },
  {
    type: "input",
    message: "What college did you attend?",
    name: "email",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a school";
      }
    },
  },
]);

module.exports = Questions;
