#! /usr/bin/env node


import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input for guessing number

// 3) Compare user input with computer generated number and sow result 


const randonNumber = Math.floor(Math.random()* 5 + 1);

const answers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message: "Please guess a number between 1-5:",
    },
]);

if(answers.userGuessedNumber === randonNumber){
    console.log("Congratulation! You guessed right number")

}
else{
    console.log("You guessed wrong number")
}
