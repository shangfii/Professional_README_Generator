// Packages needed for this application

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions =[ 
  {//A greeting and brief description of the application
    type: "confirm",
    name: "WelcomeMssg",
    message: `Hello There! Welcome to the Node README generator App. 
    Answer the following questions to generate a profesional README
    (Hit: enter to continue)`,
    default: true,
  },  

  {
    type: "input",
    name: "fullName",
    message: "Hello creator what is your full name?",
  },

  {
    type: "input",
    name: "projectTitle",
    message: `What is your project title?`,
  },

  {
    type: "input",
    name: "github",
    message: `What is your GitHub account URL?`,
  },

  {
    type: "input",
    name: "LinkedIn",
    message: `What is your LinkedIn URL?`,
  },

  {
    type: "input",
    name: "email",
    message: `What is your email address?`,
  },
  
  {
    type: "confirm",
    name: "descriptionMssg",
    message: `-----------------------------------------------------------------------------------------------
     What is the purpose of this project, The following questions will help layout your case (Hit enter to continue):`,
    default: true,
  },

  {
    type: "input",
    name: "TheWhy",
    message: "What problem does it solve?",
  },

  {
    type: "input",
    name: "installation",
    message: " Provide a step-by-step instruction of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "How does someone start to use this project",
  },

  {
    type: "input",
    name: "test",
    message: "How can someone test that the application is working?:",
  },

  {
      // select one license for the project using checkbox

    type: 'checkbox',
    message: 'Which license should users of your application be aware of',
    name: 'license',

    choices: [
      {
        name: 'MIT',
      },
      {
        name: 'ISC',
      },
      {
        name: 'GNU v3.0',
      },
      {
        name: 'Apache v2.0',
      },
    ], 
    
    //Depending on what license the user selects, the appropriate links will populate the README file.
    validate(answer) {
      if (answer === "MIT") {
        answer.link = 'https://opensource.org/licenses/MIT';
        answer.shield = 'https://img.shields.io/badge/License-MIT-yellow.svg';
        return true;
      } else if (answer === "ISC"){
        answer.link = 'https://opensource.org/licenses/ISC';
        answer.shield = 'https://img.shields.io/badge/License-ISC-blue.svg'
        return true
      } else if(answer === 'GNU v3.0'){
        answer.link = 'https://www.gnu.org/licenses/gpl-3.0';
        answer.shield = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
        return true;
      }else {
        answer.link = 'https://opensource.org/licenses/Apache-2.0';
        answer.shield = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
        return true;
      }
    },
  },
];

//This function initializes the app

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            fs.writeFileSync(
                path.join(process.cwd(), "README.md"),
                generateMarkdown(answers)
            );

            console.log(generateMarkdown(answers));
        })
        .catch((error) => {
            console.log(error);
        });
}
init();
