// Pseudocode -- README GENERATOR
// User Story
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Enter title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions for your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter what this project will be used for:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for project:",
    choices: [
      "MIT",
      "Apache 2.0",
      "Open Database License (ODbL)",
      "The Artistic License 2.0",
      "None",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines for your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions for your project:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// TODO: Create a function to write README file
function generateReadme(answers) {
  let licenseSVG = "";
  if (answers.license === "MIT") {
    licenseSVG =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (answers.license === "Apache 2.0") {
    licenseSVG =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (answers.license === "Open Database License (ODbL)") {
    licenseSVG =
      "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
  } else if (answers.license === "The Artistic License 2.0") {
    licenseSVG =
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else {
    licenseSVG =
      "[![License: None](https://img.shields.io/badge/License-None-brightgreen.svg)](https://choosealicense.com/no-permission/)";
  }

  // Table of Contents
  const toc = `
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  `;

  // Create the README.md file
  const readme = `

${licenseSVG}

# ${answers.projectTitle}

${toc}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any additional questions, please contact me at [${answers.email}](mailto:${answers.email}). You can also visit my [GitHub profile](https://github.com/${answers.githubUsername}).
`;

  // Write the README.md file
  fs.writeFileSync('TEST.md', readme);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(generateReadme);
}

// Function call to initialize app
init();
