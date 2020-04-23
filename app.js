const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const generalQs = ([
    {
        type: "input",
        name: "name",
        message: "Please enter employee's first and last name: ",
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return `Please enter the employee's name: `;
            }
        }

    },
    {
        type: "input",
        name: "id",
        message: "Employee ID#: ",
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return `Please enter the employee's ID number: `;
            }
        }

    },
    {
        type: "input",
        name: "email",
        message: "Employee e-mail address: ",
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return `Please enter the employee's e-mail address: `;
            }
        }
    }
]);

// Question sets
const managerQs = [...generalQs, {

}];
const engineerQs = [...generalQs, {

}];

const internQs = [...generalQs, {

}];


function createEmployeeMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Employee's Job Role: ",
            choices: [
                "Engineer",
                "Manager",
                "Intern",
                "I am done adding employees."
            ]

        }.then(answers => {
            switch (answers.employeeType) {
                case "Manager":
                    return askManagerQuestions();
                case "Engineer":
                    return askEngineerQuestions();
                case "Intern":
                    return askInternQuestions();
                case "Done":

            }
        }),
        ,

        {
            type: "input",
            name: "school",
            message: "School Name: ",
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return `Please enter the Intern's school name: `;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub Name? ",
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return `Please enter the engineer's GitHub user name: `;
                }
            }

        },
        {
            type: "input",
            name: "officeNumber",
            message: "Office Number: ",
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return `Please enter the manager's office number: `;
                }
            }
        }


    ]).then(answers => {
        console.log(answers);
        // if (this.role === Engineer) {
        //     const newEngineer = new Engineer(answers.role, answers.name, answers.email, answers.id, answers.github);
        // } if (this.role === Manager) {
        //     const newManager = new Manager(answers.role, answers.name, answers.email, answers.id, answers.officeNumber);
        // } if (this.role === Intern) {
        //     const newIntern = new Intern(answers.role, answers.name, answers.email, answers.id, answers.school);
        // } else {
        //     return;
        // }
    })

}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
