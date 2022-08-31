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
        name:'projetc name',
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
inquirer.prompt(questions).then(answers => {
    console.log(answers)
    // you need to import the generateMardown file into this folder
    // Then when all answers are submitted, then you have to write it to a file and push in the generateMardown functionality into that file
    function generateMarkdown(data) {
        return `# ${data.title}
      
      `;
      }
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // You need to look up how to write to a file using the FS library
    fs.answers('index.js', data, prompt)
    console.log(err)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        console.log(answers);
        answers('README.md', data);
    })
}

// Function call to initialize app
init();