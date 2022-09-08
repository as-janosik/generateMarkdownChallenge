// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMd = require('./utils/generateMarkdown.js');
let fileContents = '';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Usage information:',
        name: 'usage_Info',
    },
    {
        type: 'input',
        message: 'Contribution guidelines:',
        name: 'contribution_Guide',
    },
    {
        type: 'input',
        message: 'Test instructions:',
        name: 'test_Instructions',
    },
    {
        type: 'input',
        message: 'Github Username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Email address:',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What License do you have:',
        name: 'license',
        choices: ['ISC','Zlib','mit','none'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//write data to file here.
fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
        )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>{
            fileContents= genMd(response);
            writeToFile("README.md",fileContents);
            //console.log(fileContents);

            
        })
}


// Function call to initialize app
init();
