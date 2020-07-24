const generateManager = managerData => {
    const html = "";
    html += `    <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
        <div class="card-header">${managerData.getRole()}</div>
            <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">${managerData.getName()}</p>
            <p class="card-text">ID: ${managerData.getID()}</p>
            <p class="card-text">Email: ${managerData.getEmail()}</p>
            <p class="card-text">Office #: ${managerData.getOfficeNumber()}</p>
        </div>
    </div>
`
    return html;

}

const generateEngineer = engineersData => {
    const html = "";
    iterns.forEach(intern => {
        html += `
    <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
        <div class="card-header">${engineersData.getRole()}</div>
            <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">${engineersData.getName()}</p>
            <p class="card-text">ID: ${engineersData.getID()}</p>
            <p class="card-text">Email: ${engineersData.getEmail()}</p>
            <p class="card-text">Office #: ${engineersData.getGithub()}</p>
        </div>
    </div>
`
    });
    return html;

}

const generateIntern = internsData => {
    const html = "";
    iterns.forEach(intern => {
        html += `
    <div class="card bg-light mb-3" style="max-wgetID()th: 18rem;">
        <div class="card-header">${internsData.getRole()}</div>
            <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">${internsData.getName()}</p>
            <p class="card-text">ID: ${internsData.getID()}</p>
            <p class="card-text">Email: ${internsData.getEmail()}</p>
            <p class="card-text">Office #: ${internsData.getSchool()}</p>
        </div>
    </div>
`
    });
    return html;
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
        ${generateManager(templateData.manager)}
        ${generateEngineer(templateData.engineers)}
        ${generateIntern(templateData.interns)}
      </main>

    </body>
    </html>
    `
    );
};