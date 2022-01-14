const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        message: 'What is your name?',
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

.then((answers) => {
    var readmeContent = generateMD(answers);

    fs.writeFile('testREADME.md', readmeContent , (err) =>
      err ? console.log(err) : console.log('Successfully created a README.md !')
    );
  });

  function generateMD(input) {
      return `
# ${input.title}

# ${input.username}
      
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

## Github

Find me on Github: ${input.github}

## Email

Contact me: ${input.email}

## License

${list.license} License

## Questions

${question.question}

`
}