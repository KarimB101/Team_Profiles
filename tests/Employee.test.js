const Employee = require('../lib/Employee')
const e1 = new Employee('jack', 20, '@yahoo.com');

describe('testing to make sure all the requirements of an employee has been submitted', () => {
    test("should create new employee object e1", () => {
        // const e1 = new Employee('jack', 20, '@yahoo.com');
        console.log(e1)
        expect(e1.name).toBe('jack');
        expect(e1.id).toBe(20);
        expect(e1.email).toBe('@yahoo.com');
    });
    describe('getName', () => {
        test('should return epmloyee name', () => {
            // const employee = new Employee (name);
            expect(e1.getName()).toBe('jack');
        });
    });
    describe('getId', () => {
        test('should return epmloyee Id', () => {
            expect(typeof e1.getId()).toBe("number");
            expect(e1.getId()).toBe(20);
        });
    });
    describe('getEmail', () => {
        test('should return epmloyee email', () => {
            expect(e1.getEmail()).toBe('@yahoo.com');
        });
    });
    describe('getRole', () => {
        test('Employee.getRole() return epmloyee role', () => {
            expect(e1.getRole()).toBe("Employee");
        });
    });

});