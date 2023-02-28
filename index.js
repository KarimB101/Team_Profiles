// required to ask questions for user input to generate team profile
const inquirer = require('inquirer')
// required to write team profile file
const fs = require("fs");
const path = require("path");

// employee classes in lib folder
const Engineer = require("./lib/Engineer");
const Intern = require('./lib/Intern')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')

// required to generate html 
const generateHTML = require("./src/generateHTML");
const { type } = require('os');
const { default: Choices } = require('inquirer/lib/objects/choices');

// validate questions to be asked for input from user
const addRole = () => {
    return (
        inquirer.createPromptModule([
            {
                name: "Employee-Status",
                type: "list",
                message: "Please confirm Employee status you would like to fill out info for.",
                choices: ["Employee", "Intern", "Manager", "Engineer"],
            },

        ])
    )
};

// function to prompt user through employee questions
const addEmployee = () => {
    return (
        inquirer
            .createPromptModule([
                {
                    name: "name",
                    type: "input",
                    message: "What is the Employee's name?",
                    validate: (name) => {
                        if (name) { return true; }
                        else { return false; }
                    },
                },
                {
                    name: "id",
                    type: "input",
                    message: "What is the Employee's Id?",
                    validate: (id) => {
                        if (id) { return true; }
                        else { return false; }
                    },
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is the Employee's email?",
                    validate: (email) => {
                        if (email) { return true; }
                        else { return false; }
                    },
                }
            ])

    )
};
const addManager = () => {
    return (
        inquirer
            .createPromptModule([
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
                    name: "Office Number",
                    type: "input",
                    message: "What is the Manager's Office Number?",
                    validate: (officeNumber) => {
                        if (officeNumber) { return true; }
                        else { return false; }
                    },
                },
            ])

    )
};
const addEngineer = () => {
    return (
        inquirer
            .createPromptModule([
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
                    name: "Github Username",
                    type: "input",
                    message: "What is the Engineer's Github username?",
                    validate: (Github) => {
                        if (Github) { return true; }
                        else { return false; }
                    },
                },
            ])

    )
};
const addIntern = () => {
    return (
        inquirer
            .createPromptModule([
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
                    name: "School",
                    type: "input",
                    message: "What is the Intern's school?",
                    validate: (school) => {
                        if (school) { return true; }
                        else { return false; }
                    },
                },
            ])

    )
};


// function to import and generate html file with data
function createTeamPage() {
    const dom = generateHTML();
    fs.writeFile("profile.html", dom, function (err) {
        if (err) throw err;
        console.log("Profiles created!");
    });
};