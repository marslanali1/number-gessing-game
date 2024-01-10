#!/usr/bin/env node
import inquirer from "inquirer";
let score = 0;
async function startloop() {
    let again;
    do {
        await guessnumber();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ["YES", "NO"],
                messege: "DO you want to continue:",
            }
        ]);
    } while (again.restart === "YES");
}
startloop();
async function guessnumber() {
    let guessnum = Math.floor(Math.random() * 10);
    let tip;
    if (guessnum % 2 == 0) {
        tip = "This number is even";
    }
    else {
        tip = "This number is odd";
    }
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "userguess",
            message: `Guess The number between 1 To 10 (${tip})`
        }
    ]);
    console.log(`your Guest ${answer.userguess} and system generates ${guessnum}`);
    if (answer.userguess == guessnum) {
        score++;
        console.log(`Congratulation your answer is correct. your score is ${score}`);
    }
    else {
        console.log(`Wrong guess. your score is ${score}. Better Luck Next Time.`);
    }
}
