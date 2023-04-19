// const inquirer = require("inquirer");


const createManagerCard = (manager) => {
    return `
<div class="employee-card manager-card">
    <h2>Manager</h2>
    <h3>${manager.name}</h3>
    <p>${manager.id}</p>
    <p>${manager.email}</p>
    <p>${manager.officeNumber}</p>
</div>
`;
};

const createEngineerCard = (engineer) => {
    return `
<div class="employee-card engineer-card">
    <h2>Engineer</h2>
    <h3>${engineer.name}</h3>
    <p>${engineer.id}</p>
    <p>${engineer.email}</p>
    <p>${engineer.github}</p>
</div>
`;
};

const createInternCard = (intern) => {
    return `
<div class="employee-card intern-card">
    <h2>Intern</h2>
    <h3>${intern.name}</h3>
    <p>${intern.id}</p>
    <p>${intern.email}</p>
    <p>${intern.school}</p>
</div>
`;
};

const generateTeam = (team) => {
    const managerCards = team.filter(employee => employee.role === "Manager").map(createManagerCard).join('');
    const engineerCards = team.filter(employee => employee.role === "Engineer").map(createEngineerCard).join('');
    const internCards = team.filter(employee => employee.role === "Intern").map(createInternCard).join('');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <!-- Add any required CSS here -->
</head>
<body>
    <header>
        <h1>Team Profile</h1>
    </header>
    <main>
        <div class="team-container col-4">
            ${managerCards}
            ${engineerCards}
            ${internCards}
        </div>
    </main>
</body>
</html>
`;
};

module.exports = generateTeam;


// const createEmployeeCard = (employee) => {
//     return `
// <div class="employee-card">
//     <h3>${employee.name}</h3>
//     <p>${employee.role}</p>
//     <p>${employee.id}</p>
//     <p>${employee.email}</p>
//     ${employee.role === 'Intern' ? `<p>${employee.school}</p>` : ''}
//     ${employee.role === 'Engineer' ? `<p>${employee.Github}</p>` : ''}
// </div>
// `;
// };

// const generateHTML = (team) => {
//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Profile</title>
//     <!-- Add any required CSS here -->
// </head>
// <body>
//     <header>
//         <h1>Manager</h1>
//     </header>
//     <main>
//         <div class="team-container">
//             ${team.map(createEmployeeCard).join('')}
//         </div>
//     </main>
// </body>
// </html>
// `;
// };

// module.exports = generateHTML;




