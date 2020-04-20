const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        // Returns 'Employee'

    }

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter employee's first and last name: "

        },
        {
            type: "input",
            name: "id",
            message: "Employee ID#: "

        },
        {
            type: "input",
            name: "email",
            message: "Employee e-mail address: "

        },
        {
            type: "list",
            name: "role",
            message: "Employee's Job Role: ",
            choices: [
                "Engineer",
            "Manager",
            "Intern"
            ]

        }

    ]);

    // getName()
    // return this.name;

    // getId()
    // return this.id;

    // getEmail()
    // return this.email;

    // getRole()
    // return this.role;

}
}
// newEmployee();

module.exports = Employee;
