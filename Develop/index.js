// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMd = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['What is the title?', 'Provide description:', 'Installation instructions:', 'Usage information:', 'Contribution guidelines:', 'Test instructions:'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'Install',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'Usage_Info',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'Contribution_guide',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'test_instructions',
            },
        ])
        .then((response) =>{

            
        })
}


// Function call to initialize app
init();
