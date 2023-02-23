const Employee = require('../lib/Employee')
const jest = require('jest')
const { default: inquirer } = require('inquirer')

describe('testing to make sure all the requirements of an employee has been submitted', () => {
    test("create empty employee object", () => {
        const employee = new Employee(); 
        expect(typeof employee).toBe("object");
    });
    test("Employee.getName() return epmloyee name", () => {
        const employee = new Employee ("name", "id", "email");
        expect(employee.getName()).toBe("name");
    })
    test("Employee.getId() return epmloyee Id", () => {
        const employee = new Employee ("name", "id", "email");
        expect(employee.getId()).toBe("id");
    })
    test("Employee.getEmail() return epmloyee email", () => {
        const employee = new Employee ("name", "id", "email");
        expect(employee.getEmail()).toBe("email");
    })
    test("Employee.getRole() return epmloyee role", () => {
        const employee = new Employee ("name", "id", "email");
        expect(employee.getRole()).toBe("Employee");
    });
})