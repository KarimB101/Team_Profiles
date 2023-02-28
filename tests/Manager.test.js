const Manager = require('../lib/Manager');
const management = new Manager('Manager1', 2, '@management.com', 1738)

describe("testing the input for Manager class", () => {
    test("create Manager object", () => {
        // const management = new Manager();
        console.log(management)
        expect(typeof management).toBe("object");
    });
    describe('getOfficeNumber', () => {
        test("should return Manager's office number", () => {
            // const management = new Manager("name", "id", "email", "OfficeNumber");
            expect(management.getOfficeNumber()).toBe(1738);
        });
    });
    describe('getRole', () => {
        test('should return manager role', ()=> {
            expect(management.getRole()).toBe('Manager')
        });
    });

});