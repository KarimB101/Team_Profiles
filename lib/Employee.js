const inquirer = require("inquirer");

// class for Employee which is the base for rest of classes
class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }       
// function to take in name input
getName(){return this.name;}
// function to take in id input
getId(){return this.id;}
// function to take in email input
getEmail(){return this.email;}
// function to return employee role
    getRole(){return 'Employee'}
}
// console.log(name, id, email)

module.exports = Employee;