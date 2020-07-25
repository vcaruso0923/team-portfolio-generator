const generateEngineer = () => {
    const html = "";
    team.iterns.forEach(intern => {
        html += `
        <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
        <div class="card-header">${team.engineers.getRole()}</div>
        <div class="card-body">
        <h5 class="card-title">Light card title</h5>
        <p class="card-text">${team.engineers.getName()}</p>
            <p class="card-text">ID: ${team.engineers.getID()}</p>
            <p class="card-text">Email: ${team.engineers.getEmail()}</p>
            <p class="card-text">Office #: ${team.engineers.getGithub()}</p>
        </div>
        </div>
        `
    });
    return html;

}

const generateIntern = () => {
    const html = "";
    team.iterns.forEach(intern => {
        html += `
        <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
        <div class="card-header">${team.interns.getRole()}</div>
        <div class="card-body">
        <h5 class="card-title">Light card title</h5>
        <p class="card-text">${team.interns.getName()}</p>
        <p class="card-text">ID: ${team.interns.getID()}</p>
        <p class="card-text">Email: ${team.interns.getEmail()}</p>
            <p class="card-text">Office #: ${team.interns.getSchool()}</p>
            </div>
            </div>
            `
    });
    return html;
}

const generateManager = () => {
    const html = "";
    html += `    <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
        <div class="card-header">${team.manager.getRole()}</div>
            <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">${team.manager.getName()}</p>
            <p class="card-text">ID: ${team.manager.getID()}</p>
            <p class="card-text">Email: ${team.manager.getEmail()}</p>
            <p class="card-text">Office #: ${team.manager.getOfficeNumber()}</p>
        </div>
    </div>
`
    return html;

}

module.exports = () => {
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
        ${generateEngineer()}
        ${generateIntern()}
      </main>

    </body>
    </html>
    `
    );
};