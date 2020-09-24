// function to generate markdown for README
function generateMarkdown(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>${answers.title}</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">${answers.title}</h1>
      <h2>Overview</h2>
          <p class="lead">${answers.overview}</p>
      <h2>Installation</h2>
          <p class="lead">${answers.installation}</p>
      <h2>Usage</h2>
          <p class="lead">${answers.usage}</p>
      <h2>Usage</h2>
          <p class="lead">${answers.credits}</p>  
      <h2>License</h2>  
          <p class="lead">${answers.license}</p>     
    </div>
  </div>
  </body>
</html>
`;
}

module.exports = generateMarkdown;
