const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'descrition',
        message: 'Write a short desription about your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What installation instruction are there?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What usage information are there?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How many contribution guidelines?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How many test instructions?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: "list",
        name: "license",
        message: "license choose please:",
        choices: ["MIT", "Eclipse", "IMB"],
      
      },
      {
        type: 'question',
        name: 'question',
        message: 'What kind of question you have?',
      },
])