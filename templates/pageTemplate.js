//Create employee card daa:
const PageTemplate = function () {
  //populate and Generate Emplyee Cards and place it in the HTML page:
  `
<div class="card bg-dark text-center text-white" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${this.name}}</h5>
        <p class="card-text">${this.role}}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.email}}</li>
        <li class="list-group-item">${this.github}}</li>
    </ul>

</div>`;

  //Create the HTML page and populate it with the employee card data above:
  `;

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

    <main class="container-fluid bg-light">
        <!--Insert Team information here, use indivdual cards for data population-->
${this.teamCards}

    </main>


    <!-- Bootstrap JavaScript Libraries -->
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
};

module.exports = PageTemplate;
