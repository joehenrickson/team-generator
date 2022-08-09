function generateHtml(teamMembers) {
  let cards = '';
  for (let i = 0; i < teamMembers.length; i++) {
    const currentEmployee = teamMembers[i];
    if (currentEmployee.getRole() === 'Manager') {
      cards += generateManagerCard(currentEmployee);
    } else if (currentEmployee.getRole() === 'Engineer') {
      cards += generateEngineerCard(currentEmployee);
    } else if (currentEmployee.getRole() === 'Intern') {
      cards += generateInternCard(currentEmployee);
    }
  }

  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="../src/style.css" rel="stylesheet">
        <title>Team Profiles</title>
    </head>
    <header>
      <h1>My Team</h1>
    </header>
    <body>
    <section>
        ${cards}
    </section>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>`;

  return html;
}

function generateEngineerCard(engineer) {
  const card = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h4>${engineer.getRole()}</h4>
            <h5 class="card-title">${engineer.getName()}</h5>
            <p class="card-text">${engineer.getId()}</p>
            <a href = "mailto:${engineer.getEmail()} class="card-text">${engineer.getEmail()}</a>
            <a href="https://www.github.com/${engineer.getGithub()}" class="">${engineer.getGithub()}</a>
        </div>
    </div>
    `;
  return card;
}

function generateManagerCard(manager) {
  const card = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h4>${manager.getRole()}</h4>
            <h5 class="card-title">${manager.getName()}</h5>
            <p class="card-text">${manager.getId()}</p>
            <a href = "mailto:${manager.getEmail()} class="card-text">${manager.getEmail()}</a>
            <a href="tel:${manager.getPhoneNumber()}" class="">${manager.getPhoneNumber()}</a>
        </div>
    </div>
    `;
  return card;
}

function generateInternCard(intern) {
  const card = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h4>${intern.getRole()}</h4>
            <h5 class="card-title">${intern.getName()}</h5>
            <p class="card-text">${intern.getId()}</p>
            <a href = "mailto:${intern.getEmail()} class="card-text">${intern.getEmail()}</a>
            <p class="">${intern.getSchool()}</p>
        </div>
    </div>
    `;
  return card;
}

module.exports = generateHtml;
