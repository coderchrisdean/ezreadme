// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "Open Database License (ODbL)") {
    return `![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)`;
  } else if (license === "The Artistic License 2.0") {
    return `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`;
  } else {
    return `![License: None](https://img.shields.io/badge/License-None-brightgreen.svg)]`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "Apache 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "Open Database License (ODbL)") {
    return `https://opendatacommons.org/licenses/odbl/`;
  } else if (license === "The Artistic License 2.0") {
    return `https://opensource.org/licenses/Artistic-2.0`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license === "None") {
    return `This project is licensed under the (${renderLicenseLink(
      license
    )}) license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // -- include the title of the project and sections entitled Description
  // -- Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  return `# ${data.title}
    ${renderLicenseBadge(data.license)}
  
    ## Description
    ${data.description}
    
    ## Table of Contents
    * [Description](description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    * [Demo](#demo)
    
    ## Installation
    To install necessary dependencies, run the following command:
    \`\`\`
    ${data.installation}
    \`\`\`
    
    ## Usage
    ${data.usage}
    
    ## License
    ${renderLicenseSection(data.license)}
    
    ## Contributing
    ${data.contribution}
    
    ## Tests
    To run tests, run the following command:
    \`\`\`
    ${data.test}
    \`\`\`
    
    ## Questions
    If you have any questions about the repo, open an issue or contact me directly at ${
      data.email
    }. You can find more of my work at [${data.github}](www.github.com/${
    data.github
  }/)
    
    ##Demo
  `;
}

module.exports = generateMarkdown;
