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
const generateMarkdown = require("./generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
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
function writeToFile(fileName, data) {
    // Use the fs.writeFile function to write the data to the file
    fs.writeFile(fileName, data, function(error) {
      // If there is an error, log it to the console
      if (error) {
        console.log(error);
      }
      // If there is no error, log a success message to the console
      else {
        console.log("Successfully created README file.");
      }
    });
  }
  
  
// TODO: Create a function to initialize app
function init() {
    // collect input data from prompt
    inquirer.prompt(questions).then((data) => {
    //  create sample-readme file (per Niles in slack)
    writeToFile("sample-README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();