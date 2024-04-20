#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "enter first  number",
        type: "number",
        name: "firstnumber",
    },
    { message: "enter  second number", type: "number", name: "secondnumber" },
    {
        message: "please choose your operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["multiplication", "addition", "subtraction", "division", "power"],
    },
]);
if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "power") {
    console.log(answer.firstnumber ** answer.secondnumber);
}
else
    console.log("please select apropriate operation");
