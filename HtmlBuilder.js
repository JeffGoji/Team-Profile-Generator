"use strict";
//File system:
const fs = require("fs");

//Inquirer:
const inquirer = require("inquirer");

//Libs to import:

//Questions prompt
const Questions = require("./Questions");

//Intern:
const Intern = require("./lib/Intern");
//Engineer:
const Engineer = require("./lib/Engineer");
//Manager:
const Manager = require("./lib/Manager");

//Empty array for employees
const employeeArray = [];

//Function to write the HTML template to be generated and the cards to be inserted on the page:
function HtmlBuilder() {
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
      <main class="row bg-light">
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

    //Adding the Engineer Card:
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

      //Adding the Manager card:
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

//Continue creating HTML page:
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

  fs.appendFile("./output/teamMembers.html", data, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Building your Team page!");
}

module.exports = HtmlBuilder;
