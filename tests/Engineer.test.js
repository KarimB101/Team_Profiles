const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Tom', 10, '@engineer.com', 'githubsite')

describe("testing the input for engineer class", () => {
    test("create empty engineer object", () => {
        console.log(engineer)
        expect(typeof engineer).toBe("object");
    });
    test("return engineer's github", () => {
        expect (engineer.getGithub()).toBe("githubsite");
    });
    test("return role for engineer", () => {
        expect(engineer.getRole()).toBe('Engineer')
    });

});