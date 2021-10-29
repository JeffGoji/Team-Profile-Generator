"use strict";
//File system:
const fs = require("fs");

//Inquirer:
const inquirer = require("inquirer");

//Libs to import:

const HtmlBuilder = require("./HtmlBuilder");
//Intern:
const Intern = require("./lib/Intern");
//Engineer:
const Engineer = require("./lib/Engineer");
//Manager:
const Manager = require("./lib/Manager");

//Empty array for employees
const employeeArray = [];

//Functions to start the app, start html, and add team members:
function Questions() {
  HtmlBuilder();
  addTeamMember();
}
//Wrap Inqurer into a function and ask questions:
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
      } else if (role === "Manager") {
        roleInfo = "Office Phone Number";
      }
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
            newTeamMate = new Intern(name, teamId, roleInfo, email);
          } else if (role === "Engineer") {
            newTeamMate = new Engineer(name, teamId, roleInfo, email);
          } else if (role === "Manager") {
            newTeamMate = new Manager(name, teamId, roleInfo, email);
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

  //Take the questions answered and create Team cards:
  function addCard(teamMate) {
    return new Promise(function (resolve, reject) {
      const name = teamMate.getName();
      const role = teamMate.getRole();
      const teamId = teamMate.getId();
      const email = teamMate.getEmail();
      let data = "";

      //Adding the data for the Intern card:
      if (role === "Intern") {
        const school = teamMate.getSchool();
        data = `<div class="card bg-dark text-center text-white m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Position: ${role}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamId}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
    
    </div>`;
      }

      //Adding the data for the Engineer Card:
      else if (role === "Engineer") {
        const github = teamMate.getGithub();
        data = `<div class="card bg-dark text-center text-white m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Position: ${role}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamId}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">GitHub: ${github}</li>
        </ul>
    
    </div>`;

        //Adding the data for the Manager card:
      } else {
        const phoneNumber = teamMate.getPhoneNumber();
        data = `<div class="card bg-dark text-center text-white m-3" style="width: 16rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Position: ${role}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamId}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Phone: ${phoneNumber}</li>
        </ul>
    
    </div>`;
      }
      //Log to the console that a team member is being added and append the teamMembers.html file with the cards.
      console.log("adding team member");
      fs.appendFile("./output/teamMembers.html", data, function (err) {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  }
}

//Continue creating HTML page to finish the HTML file:
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

  //Append teamMembers.html with finished data:
  fs.appendFile("./output/teamMembers.html", data, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Building your Team page!");
}

module.exports = Questions;
