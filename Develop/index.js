// packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "overview",
        message: "Type a brief description of your project"
      },
      {
        type: "input",
        name: "installation",
        message: "Is there an installation process? If so--describe it here."
      },
      {
        type: "input",
        name: "usage",
        message: "Describe how to use your application here."
      },
      {
        type: "input",
        name: "credits",
        message: "Provide links to your collaborators (if any) here."
      },
      {
        type: "input",
        name: "license",
        message: "Type your license here to let others know what they can/cannot do with your project."
      }
    ]);
  }

  // function to generate markdown for README
function generateMarkdown(answers) {
  // Change html to readme(markdown format https://www.markdownguide.org/basic-syntax/)
  return `
# example
# ${answers.title}
==
## Overview
--
### ${answers.overview}
## Installation
--
### ${answers.installation}
## Usage
--
## ${answers.usage}
## Credits
--
## ${answers.credits}
## License
--
## ${answers.license}
`;
}

// function to initialize program
async function init() {
    try {
      const answers = await promptUser();
  
      const readme = generateMarkdown(answers);
  
      await writeFileAsync(`${answers.title}_README.md`, readme);
  
      console.log(`Successfully wrote to ${answers.title}s_README.md`);
    } catch (err) {
      console.log(err);
    }
}

// function call to initialize program
init();
