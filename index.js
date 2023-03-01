// required to ask questions for user input to generate team profile
const inquirer = require('inquirer')
// required to write team profile file
const fs = require('fs');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');


// employee classes in lib folder
const Engineer = require("./lib/Engineer");
const Intern = require('./lib/Intern')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')

// required to generate html 
const generateHTML = require("./src/generateHTML");
const { type } = require('os');
const { default: Choices } = require('inquirer/lib/objects/choices');

// empty array to combine answers for each employee input
const teamArray = [];



// validate questions to be asked for input from user
const addRole = () => {
    inquirer.prompt([
        {
            name: "employeeStatus",
            type: "list",
            message: "Please confirm which role you would like to fill out next unless done creating team.",
            choices: ["Finished Building Team", "Intern", "Engineer"],
        },
    ])
        .then((answers) => {
            console.log(answers)
            if (answers.employeeStatus === "Engineer") {
                addEngineer();
            } else if (answers.employeeStatus === "Intern") {
                addIntern();
            } else {
                createTeamPage();
            }

        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
};


// function to prompt user through employee questions
const addManager = () => {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the Manager's name?",
                validate: (name) => {
                    if (name) { return true; }
                    else { return false; }
                },
            },
            {
                name: "id",
                type: "input",
                message: "What is the Manager's Id?",
                validate: (id) => {
                    if (id) { return true; }
                    else { return false; }
                },
            },
            {
                name: "email",
                type: "input",
                message: "What is the Manager's email?",
                validate: (email) => {
                    if (email) { return true; }
                    else { return false; }
                },
            },
            {
                name: "officeNumber",
                type: "input",
                message: "What is the Manager's Office Number?",
                validate: (officeNumber) => {
                    if (officeNumber) { return true; }
                    else { return false; }
                },
            },
        ])
        .then((answers) => {
            console.log(answers) // user feedback
            teamArray.push(answers);
            console.log(teamArray)
            addRole() // prompts user through employee choices again
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });


};
const addEngineer = () => {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the Engineer's name?",
                validate: (name) => {
                    if (name) { return true; }
                    else { return false; }
                },
            },
            {
                name: "id",
                type: "input",
                message: "What is the Engineer's Id?",
                validate: (id) => {
                    if (id) { return true; }
                    else { return false; }
                },
            },
            {
                name: "email",
                type: "input",
                message: "What is the Engineer's email?",
                validate: (email) => {
                    if (email) { return true; }
                    else { return false; }
                },
            },
            {
                name: "Github",
                type: "input",
                message: "What is the Engineer's Github username?",
                validate: (Github) => {
                    if (Github) { return true; }
                    else { return false; }
                },
            },
        ])
        .then((answers) => {
            console.log(answers)  // user feedback 
            teamArray.push(answers)
            console.log(teamArray)
            addRole() // prompts user through employee choices again
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });


};
const addIntern = () => {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the Intern's name?",
                validate: (name) => {
                    if (name) { return true; }
                    else { return false; }
                },
            },
            {
                name: "id",
                type: "input",
                message: "What is the Intern's Id?",
                validate: (id) => {
                    if (id) { return true; }
                    else { return false; }
                },
            },
            {
                name: "email",
                type: "input",
                message: "What is the Intern's email?",
                validate: (email) => {
                    if (email) { return true; }
                    else { return false; }
                },
            },
            {
                name: "school",
                type: "input",
                message: "What is the Intern's school?",
                validate: (school) => {
                    if (school) { return true; }
                    else { return false; }
                },
            },
        ])
        .then((answers) => {
            console.log(answers) // user feedback
            teamArray.push(answers);
            console.log(teamArray);
            addRole() // prompts user through employee choices again

        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
};

// function to import and generate html file with data
                const createTeamPage = () => {
                    if (!fs.existsSync(DIST_DIR)) {
                        fs.mkdirSync(DIST_DIR);
                      }
                      fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
                };
                // function createTeamPage() {
                //     const dom = generateHTML();
                //     fs.writeFile("team.html", dom, function (err) {
                //         if (err) throw err;
                //         console.log("Profiles created!");

addManager();
