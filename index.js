#! /user/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 6 + 1); // computer generate random number
// console.log(randomNumber)
const answer = await inquirer.prompt([
    {
        message: "Enter any random Number",
        type: "number",
        name: "randomNum"
    }
]);
if (answer.randomNum == randomNumber) {
    console.log("Congratulation! you typed correct number");
}
else
    (console.log("Sorry! you typed wrong number"));
