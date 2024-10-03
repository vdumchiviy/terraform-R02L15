"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = createEmployee;
const crypto_1 = require("crypto");
function generateRandomId() {
    return (0, crypto_1.randomBytes)(10).toString('hex');
}
function createEmployee(employeeName, salary) {
    return {
        name: employeeName,
        id: generateRandomId(),
        email: `${employeeName}@example.com`,
        salary: salary
    };
}
const Peter = createEmployee('Peter', 10000);
const Dan = createEmployee('Dan', 80000);
const allNewEmployees = [Peter, Dan];
const sendWelcomeMessage = (employee) => {
    console.log(`To: ${employee.email}
        Hello ${employee.name}!
        Welcome to the company!
        Your salary will be ${employee.salary}
        `);
};
allNewEmployees.forEach(emp => sendWelcomeMessage(emp));
