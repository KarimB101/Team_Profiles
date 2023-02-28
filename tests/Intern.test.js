const Intern = require('../lib/Intern');
const intern = new Intern("intern", 707, "@school.com", "Vandy");

describe("testing the input for intern class", () => {
    test("Verify that intern is an object", () => {
        console.log(intern)
        expect(typeof intern).toBe("object");
    });
    test("Intern.getSchool() returns intern's school", () => {
        expect (intern.getSchool()).toBe("Vandy");
    });
    test("should return role of intern", () => {
        expect(intern.getRole()).toBe('Intern')
    });

});