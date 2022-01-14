const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        message: 'What is your full name?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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
        message: 'How many contribution guidelines are there?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How many test instructions are there?',
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
        message: "Choice a License option please:",
        choices: ["MIT", "Eclipse Public", "IMB", "Mozilla Public", "Apache", "Boost Software", "The Unlicense"],
      
      },
      {
        type: 'question',
        name: 'question',
        message: 'Write down any question(s) you have?',
      },
])

.then((answers) => {
    var readmeContent = generateMD(answers);

    fs.writeFile('testREADME.md', readmeContent , (err) =>
      err ? console.log(err) : console.log('Successfully created a README.md !')
    );
  });

  function generateMD(input) {
      return `
# ${input.title}

# Authors

${input.username}
      
## Description

${input.description}

## Installation

${input.installation}

## Usage

${input.usage}

## Contribution

There are ${input.contribution} contribution guidelines.

## Test

There are ${input.text} applications.

## License

${input.license} License

## Questions

If you have any questions, feel free to contact me via Github: https://github.com/${input.github} or you can email me at: ${input.email} 

${input.question}

`
}