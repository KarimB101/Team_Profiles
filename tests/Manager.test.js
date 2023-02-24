const Manager = require('../lib/Manager');

describe("testing the input for Manager class", () => {
    test("create empty Manager object", () => {
        const manager = new Manager();
        expect(typeof Manager).toBe("object");
    });
    test("Manager.getOfficeNumber() returns Manager's office number", () => {
        const manager = new Manager("name", "id", "email", "OfficeNumber");
        expect(manager.getOfficeNumber()).toBe("OfficeNumber");
    });

});