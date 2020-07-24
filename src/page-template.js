const generateManager = function() {
    return `
    <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
        <div class="card-header">${this.manager.getRole()}</div>
            <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">${this.manager.getName()}</p>
            <p class="card-text">ID: ${this.manager.getID()}</p>
            <p class="card-text">Email: ${this.manager.getEmail()}</p>
            <p class="card-text">Office #: ${this.manager.getOfficeNumber()}</p>
        </div>
    </div>
`
}

const generateEngineer = generateEngineerData => {
    return `
    <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
        <div class="card-header">${engineer.getRole()}</div>
            <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">${engineer.getName()}</p>
            <p class="card-text">ID: ${engineer.getID()}</p>
            <p class="card-text">Email: ${engineer.getEmail()}</p>
            <p class="card-text">Office #: ${engineer.getGithub()}</p>
        </div>
    </div>
`
}

const generateIntern = generateInternData => {
    return `
    <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
        <div class="card-header">${intern.getRole()}</div>
            <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">${intern.getName()}</p>
            <p class="card-text">ID: ${intern.getID()}</p>
            <p class="card-text">Email: ${intern.getEmail()}</p>
            <p class="card-text">Office #: ${intern.getSchool()}</p>
        </div>
    </div>
`
}

module.exports = templateData => {
    console.log(
    `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta getName()="viewport" content="wgetID()th=device-wgetID()th, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Navbar</span>
        </nav>
      </header>

      <main class="row">
        ${generateManager()}
        {generateEngineer()}
        {generateIntern()}
      </main>

    </body>
    </html>
    `
    );
};