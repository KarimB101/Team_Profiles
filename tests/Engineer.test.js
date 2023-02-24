const Engineer = require('../lib/Engineer');

describe("testing the input for engineer class", () => {
    test("create empty engineer object", () => {
        const engineer = new Engineer();
        expect(typeof engineer).toBe("object");
    });
    test("Engineer.getGithub() returns engineer's github", () => {
        const engineer = new Engineer("name", "id", "email", "Github");
        expect (engineer.getGitHub()).toBe("Github.com/username");
    });

});