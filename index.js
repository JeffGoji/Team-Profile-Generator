"use strict";
//File system:
const fs = require("fs");

//Inquirer:
const inquirer = require("inquirer");

//Libraries to import:

//Intern:
const Intern = require("./lib/Intern");
//Engineer:
const Engineer = require("./lib/Engineer");
//Manager:
const Manager = require("./lib/Manager");

//Empty array to hold the employees
const employeeArray = [];

//Functions to start the app, start html, and add team members:
function appStart() {
  htmlGenerate();
  addTeamMember();
}
//addTeamMember function to start Inquirer:
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Team Member's name?",
      },
      {
        type: "input",
        name: "teamId",
        message: "Enter an ID number for your employee",
      },
      {
        type: "list",
        name: "role",
        message: "Team member's role?",
        choices: ["Intern", "Engineer", "Manager"],
      },
      {
        type: "input",
        name: "email",
        message: "Enter Team Members Email address",
      },
    ])

    //Select what to do based on the selected role:
    .then(function ({ name, role, teamId, email }) {
      let roleInfo = "";
      if (role === "Intern") {
        roleInfo = "school name";
      } else if (role === "Engineer") {
        roleInfo = "GitHub Username";
      } else {
        roleInfo = "Office Phone Number";
      }
      //Second Inquirer prompt with new prompts based on the role selected:
      inquirer
        .prompt([
          {
            message: `Enter team Member's ${roleInfo}`,
            name: "roleInfo",
          },
          {
            type: "list",
            name: "addMoreTeam",
            message: "Would you like to add Another Team Member?",
            choices: ["YES", "NO"],
          },
        ])
        .then(function ({ roleInfo, addMoreTeam }) {
          let newTeamMate;
          if (role === "Intern") {
            newTeamMate = new Intern(name, teamId, email, roleInfo);
          } else if (role === "Engineer") {
            newTeamMate = new Engineer(name, teamId, email, roleInfo);
          } else {
            newTeamMate = new Manager(name, teamId, email, roleInfo);
          }
          employeeArray.push(newTeamMate);
          addCard(newTeamMate).then(function () {
            if (addMoreTeam === "YES") {
              addTeamMember();
            } else {
              continueHtml();
            }
          });
        });
    });
}
//End of prompts.

//Function to write the HTML page to be generated and the cards to be inserted on the page based on the results of the inquirer prompts:
function htmlGenerate() {
  const htmlTemplate = `
<!doctype html>
<html lang="en">

<head>
    <title>Team Profile Generator Application</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS v5.0.2 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>

<header class="bg-dark text-white p-5 text-center">

    <h1 class="display-3">TEAM PROFILE GENERATOR</h1>
    <p class="lead">Check out the team below</p>
    <hr class="my-2">

</header>

<body>

    <section class="container-fluid">
    <main class="row bg-secondary">
        <!--Insert Team information here, use indivdual cards for data population-->`;
  fs.writeFile("./output/teamMembers.html", htmlTemplate, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Building page");
}

//Insert Team cards:
function addCard(teamMate) {
  return new Promise(function (resolve, reject) {
    const name = teamMate.getName();
    const role = teamMate.getRole();
    const teamId = teamMate.getId();
    const email = teamMate.getEmail();
    let data = "";

    //Adding the Intern card:
    if (role === "Intern") {
      const school = teamMate.getSchool();
      data = `<div class="card bg-danger text-center text-white m-3" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title fs-4">${name}</h5>
          <p class="card-text">Position: ${role}</p>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${teamId}</li>
          <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">School: ${school}</li>
      </ul>
  
  </div>`;
    }

    //Adding the Engineer Card:
    else if (role === "Engineer") {
      const github = teamMate.getGithub();
      data = `<div class="card bg-primary text-center text-white m-3" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title fs-4">${name}</h5>
          <p class="card-text">Position: ${role}</p>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${teamId}</li>
          <li class="list-group-item">Email:  <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">GitHub: <$ href="https://github.com/${github}">${github}</a></li>
      </ul>
  
  </div>`;

      //Adding the Manager card:
    } else {
      const phoneNumber = teamMate.getPhoneNumber();
      data = `<div class="card bg-warning text-center text-white m-3" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title fs-4">${name}</h5>
          <p class="card-text">Position: ${role}</p>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${teamId}</li>
          <li class="list-group-item">Email:  <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">Phone: <a href="tel:${phoneNumber}">${phoneNumber}</a></li>
      </ul>
  
  </div>`;
    }
    console.log("adding team member");
    fs.appendFile("./output/teamMembers.html", data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}
//End of cards.

///Continue creating the HTML page:
function continueHtml() {
  const data = `</main>
  </section>

    <!-- Bootstrap JavaScript templatesraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"></script>
    <!--My javascript-->
    <script type="module" src="./employeeCard.js"></script>
</body>


<footer>Created by Jeffrey Anderson-Lester</footer>

</html>
`;

  //Save the silfe to output folder:
  fs.appendFile("./output/teamMembers.html", data, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Building your Team page! Check your 'output' folder!");
}

//Sarting the program:
appStart();
