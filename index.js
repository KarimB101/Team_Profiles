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

// generate html 
const generateHTML = require("./src/generateHTML");

// validate questions to be asked for input from user

