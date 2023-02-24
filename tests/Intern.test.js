const Intern = require('../lib/Intern');

describe("testing the input for intern class", () => {
    test("create empty intern object", () => {
        const intern = new Intern();
        expect(typeof intern).toBe("object");
    });
    test("Intern.getSchool() returns intern's school", () => {
        const intern = new Intern("name", "id", "email", "school");
        expect (intern.getSchool()).toBe("school");
    });

});