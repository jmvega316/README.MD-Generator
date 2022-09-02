// TODO: Include packages needed for this application
 
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'github',
        message:'What is your GitHub name'
    },
    {
        type:'input',
        name:'email',
        message:'What is your email'
    },
   
    {
        type:'input',
        name:'name',
        message:'What is your project name'
    },
   
    {
        type:'input',
        name:'description',
        message:'Give a small discription about your project'
    },
   
    {
        type:'list',
        name:'language',
        message:'what is your preferd laguage',
        choices: ['javascript','index.html', 'python', 'other']
    },
   
    {
        type:'input',
        name:'install',
        message:'What command should you use to install packages',
        default: 'npm i'
    },
   

];


// TODO: Create a function to write README file
function writeToFile( data) {
    // You need to look up how to write to a file using the FS library
    return fs.writeFile('README.md',data, err => {
        if (err) console.log(err)
    })
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        console.log(data)
        writeToFile(data)

    })
}

// Function call to initialize app
init();