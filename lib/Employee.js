const inquirer = require("inquirer");
const jest = require("jest");

// class for Employee which is the base for rest of classes
class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){return this.name}
    getId(){return this.id}
    getEmail(){return this.email}
    getRole(){return 'Employee'}
}